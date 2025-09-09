import re
import json
import requests
import os
import time
from typing import Tuple, Dict, List, Optional
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

# === CONFIG: Gemini API Key ===
GEMINI_API_KEY ="AIzaSyC0Zv5AixAtH3-hw0T47HIk4Tstg1mBRfY"

# Lazy/optional Gemini import so script can run without the package when skipped
USE_GEMINI = not os.environ.get("SKIP_GEMINI")
try:  
    if USE_GEMINI:
        import google.generativeai as genai  # type: ignore
        genai.configure(api_key=GEMINI_API_KEY)
    else:
        genai = None  # type: ignore
except Exception:
    genai = None  # type: ignore
    USE_GEMINI = False


# === STEP 1: PARSER ===
def parse_trucks(text: str):
    trucks = {}
    truck_blocks = re.split(r"(?=Truck \d+)", text)

    for block in truck_blocks:
        match = re.match(r"Truck (\d+) \((.*?)\).*?(\d+)t capacity\):", block, re.S)
        if not match:
            continue

        truck_id, truck_type, capacity = match.groups()
        truck_id = f"Truck {truck_id}"

        # Route
        route_match = re.search(r"Route:\s*(.*?)\n", block)
        route = []
        if route_match:
            raw_route = route_match.group(1)
            route = re.split(r"→|\+", raw_route)
            route = [r.strip().split(" (")[0] for r in route]

        # Distance
        dist_match = re.search(r"Distance:\s*([\d\.]+)", block)
        distance = float(dist_match.group(1)) if dist_match else None

        # Time
        time_match = re.search(r"Time:\s*([\d\.]+)", block)
        time = float(time_match.group(1)) if time_match else None

        # Load
        load_match = re.search(r"Load:\s*([\d\.]+)t\s*/\s*([\d\.]+)t", block)
        load, cap_used = (float(load_match.group(1)), float(load_match.group(2))) if load_match else (None, None)

        # Farms indexes
        farms_list: List[int] = []
        farms_match = re.search(r"Farms:\s*\[([^\]]*)\]", block)
        if farms_match:
            items = [x.strip() for x in farms_match.group(1).split(",") if x.strip()]
            for item in items:
                try:
                    farms_list.append(int(item))
                except ValueError:
                    pass

        # Utilization percentage
        utilization_pct = None
        util_match = re.search(r"Utilization:\s*([\d\.]+)%", block)
        if util_match:
            try:
                utilization_pct = float(util_match.group(1))
            except ValueError:
                utilization_pct = None

        # Product/Domain type line (optional)
        domain_type_match = re.search(r"Type:\s*(.+)", block)
        domain_type = domain_type_match.group(1).strip() if domain_type_match else None

        # Constraint flags (✅ ok, ⚠ warning, ❌ error)
        flags: List[Dict[str, Optional[object]]] = []
        time_window_min = None
        for line in block.splitlines():
            s = line.strip()
            mflag = re.match(r"([✅⚠❌])\s*(.+)", s)
            if not mflag:
                continue
            symbol = mflag.group(1)
            message = mflag.group(2)
            level = "ok" if symbol == "✅" else ("warn" if symbol == "⚠" else "error")

            # Attempt to parse a time window threshold from parentheses content
            tw_candidate = None
            pmatch = re.search(r"\(([^)]*)\)", message)
            if pmatch:
                paren = pmatch.group(1)
                # Extract all numbers followed by 'min'
                nums = re.findall(r"([\d\.]+)\s*min", paren, flags=re.I)
                if nums:
                    try:
                        tw_candidate = float(nums[-1])
                    except ValueError:
                        tw_candidate = None

            flags.append({"level": level, "message": message, "time_window_min": tw_candidate})
            if time_window_min is None and tw_candidate is not None:
                time_window_min = tw_candidate

        trucks[truck_id] = {
            "type": truck_type,
            "capacity_t": int(capacity),
            "route": route,
            "distance_km": distance,
            "time_min": time,
            "load_t": load,
            "farms": farms_list,
            "utilization_pct": utilization_pct,
            "domain_type": domain_type,
            "flags": flags,
            "time_window_min": time_window_min,
        }

    return trucks


# === STEP 2: GET COORDS FROM OPENSTREETMAP (Nominatim API) ===
_geocode_cache: Dict[str, Tuple[float, float]] = {}


def _create_session() -> requests.Session:
    session = requests.Session()
    retries = Retry(
        total=3,
        backoff_factor=0.5,
        status_forcelist=[429, 500, 502, 503, 504],
        allowed_methods=["GET"],
    )
    adapter = HTTPAdapter(max_retries=retries)
    session.mount("https://", adapter)
    session.mount("http://", adapter)
    # Nominatim requires a valid, descriptive User-Agent with contact info
    session.headers.update(
        {
            "User-Agent": "APSCHE-QuantumHack-RoutePlanner/1.0 (+https://example.com/contact)",
        }
    )
    return session


_session = _create_session()


def _normalize_location_name(location: str) -> str:
    # Remove emojis and non-letter punctuation except spaces and commas
    location = re.sub(r"[^\w\s,]", " ", location)
    name = re.sub(r"\b(Milk|Urban)\b", "", location, flags=re.I).strip()
    name = re.sub(r"\b(Farm|Dairy|Milk Dairy|Plant|Factory)\b", "", name, flags=re.I).strip()
    name = re.sub(r"\s+", " ", name)
    return name


def _build_candidate_queries(location: str) -> List[str]:
    if location.strip().lower() == "depot":
        return []

    cleaned = _normalize_location_name(location)
    region = "West Godavari, Andhra Pradesh, India"
    state = "Andhra Pradesh, India"

    city_map = {
        "narsapur": "Narsapuram",
        "palakollu": "Palakollu",
        "mogalthur": "Mogalthur",
        "undi": "Undi",
        "kalla": "Kalla",
    }

    cleaned_city = cleaned
    lower = cleaned.lower()
    for key, city in city_map.items():
        if key in lower:
            cleaned_city = city
            break

    candidates = [
        f"{location}, {state}",
        f"{cleaned}, {region}",
        f"{cleaned_city}, {region}",
        f"{cleaned}, {state}",
        f"{cleaned}",
    ]

    # Preserve order and uniqueness
    seen = set()
    ordered_unique = []
    for c in candidates:
        if c and c not in seen:
            ordered_unique.append(c)
            seen.add(c)
    return ordered_unique


def get_coords(location: str) -> Tuple[Optional[float], Optional[float]]:
    try:
        canonical = re.sub(r"[^a-zA-Z\s]", " ", location).lower()
        if re.search(r"\bdepot\b", canonical):
            # Try explicit DEPOT_LAT/LON first
            env_lat = os.environ.get("DEPOT_LAT")
            env_lon = os.environ.get("DEPOT_LON")
            if env_lat and env_lon:
                try:
                    lat_lon = (float(env_lat), float(env_lon))
                    _geocode_cache[location] = lat_lon
                    print(f"[geocode] Using DEPOT_LAT/LON from env: {lat_lon}")
                    return lat_lon
                except ValueError:
                    print("[warn] DEPOT_LAT/LON env invalid; falling back to DEPOT_QUERY if set.")

            # Then try a named query from env
            depot_query = os.environ.get("DEPOT_QUERY")
            if depot_query:
                print(f"[geocode] DEPOT_QUERY provided: '{depot_query}'")
                # Reuse normal geocoding flow for this query
                url = "https://nominatim.openstreetmap.org/search"
                for query in _build_candidate_queries(depot_query):
                    params = {
                        "q": query,
                        "format": "json",
                        "limit": 1,
                        "addressdetails": 0,
                        "countrycodes": "in",
                    }
                    r = _session.get(url, params=params, timeout=15)
                    if r.status_code == 200:
                        data = r.json()
                        if isinstance(data, list) and len(data) > 0:
                            result = data[0]
                            lat_lon = (float(result["lat"]), float(result["lon"]))
                            _geocode_cache[location] = lat_lon
                            print(f"[geocode] Success for DEPOT_QUERY: {lat_lon}")
                            return lat_lon
                    else:
                        print(f"[warn] Nominatim status {r.status_code} for depot query '{query}'")
                    time.sleep(1.0)

            # As last resort, leave depot null
            print("[info] Depot has no coords; set DEPOT_LAT/LON or DEPOT_QUERY to geocode it.")
            return None, None

        # Cached?
        if location in _geocode_cache:
            return _geocode_cache[location]

        url = "https://nominatim.openstreetmap.org/search"
        candidates = _build_candidate_queries(location)

        for idx, query in enumerate(candidates):
            print(f"[geocode] Trying '{query}' ...")
            params = {
                "q": query,
                "format": "json",
                "limit": 1,
                "addressdetails": 0,
                "countrycodes": "in",
            }
            r = _session.get(url, params=params, timeout=15)
            if r.status_code == 200:
                data = r.json()
                if isinstance(data, list) and len(data) > 0:
                    result = data[0]
                    lat_lon = (float(result["lat"]), float(result["lon"]))
                    _geocode_cache[location] = lat_lon
                    print(f"[geocode] Success for '{location}': {lat_lon}")
                    return lat_lon
            else:
                print(f"[warn] Nominatim status {r.status_code} for '{query}'")
            # Be nice to Nominatim: 1 req/sec
            time.sleep(1.0)
    except Exception as e:
        print(f"[error] OSM lookup failed for {location}: {e}")
    return None, None


def enrich_with_coords(parsed_output):
    for truck_id, info in parsed_output.items():
        coords = []
        for stop in info["route"]:
            lat, lon = get_coords(stop)
            coords.append({"name": stop, "lat": lat, "lon": lon})
        info["route_coords"] = coords
    return parsed_output


# === STEP 3: GEMINI - PLAN PATH & SUMMARIZE ===
def get_gemini_plan(fleet_json):
    if not genai:
        return "Gemini disabled or unavailable."
    model = genai.GenerativeModel("gemini-1.5-flash")
    prompt = f"""
    You are a logistics planner. Given the truck routing data below (with coordinates), 
    create an optimized mapping plan:
    - Confirm the visiting order of locations for each truck.
    - Suggest if reordering is needed for efficiency.
    - Provide a clear JSON output with truck_id, ordered_stops, route_coords, and summary.

    Data:
    {json.dumps(fleet_json, indent=2)}
    """
    response = model.generate_content(prompt)
    
    # Safer extraction
    if response.candidates:
        return response.candidates[0].content.parts[0].text
    return "No response from Gemini."



# === STEP 3B: GEMINI - PER-TRUCK OPTIMIZATION ===
def _is_depot_name(name: str) -> bool:
    canonical = re.sub(r"[^a-zA-Z\s]", " ", str(name)).lower()
    return bool(re.search(r"\bdepot\b", canonical))


# === CONFIG: Perishables handling ===
DEFAULT_DAIRY_TIME_WINDOW_MIN = float(os.environ.get("DAIRY_TIME_WINDOW_MIN", "120"))
DEFAULT_PERISHABLE_TIME_WINDOW_MIN = float(os.environ.get("PERISHABLE_TIME_WINDOW_MIN", "120"))
NEAR_DEPOT_PROXIMITY_KM = float(os.environ.get("NEAR_DEPOT_PROXIMITY_KM", "5"))


def _haversine_km(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    from math import radians, sin, cos, sqrt, atan2
    R = 6371.0088
    dlat = radians(lat2 - lat1)
    dlon = radians(lon2 - lon1)
    a = sin(dlat / 2) ** 2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlon / 2) ** 2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))
    return R * c


def _to_xy_km(lat: float, lon: float, lat0: float) -> Tuple[float, float]:
    # Equirectangular projection (approx) for small areas
    from math import cos, radians
    k = 111.32  # km per degree approximately
    x = (lon) * cos(radians(lat0)) * k
    y = (lat) * k
    return x, y


def _point_to_segment_distance_km(
    p_lat: float,
    p_lon: float,
    a_lat: float,
    a_lon: float,
    b_lat: float,
    b_lon: float,
) -> float:
    # Compute shortest distance from P to line segment AB using local planar approx
    lat0 = (a_lat + b_lat) / 2.0
    px, py = _to_xy_km(p_lat, p_lon, lat0)
    ax, ay = _to_xy_km(a_lat, a_lon, lat0)
    bx, by = _to_xy_km(b_lat, b_lon, lat0)
    vx = bx - ax
    vy = by - ay
    wx = px - ax
    wy = py - ay
    vlen2 = vx * vx + vy * vy
    if vlen2 <= 1e-12:
        # A and B are the same point
        from math import sqrt
        dx = px - ax
        dy = py - ay
        return (dx * dx + dy * dy) ** 0.5
    t = (wx * vx + wy * vy) / vlen2
    if t < 0:
        cx, cy = ax, ay
    elif t > 1:
        cx, cy = bx, by
    else:
        cx, cy = ax + t * vx, ay + t * vy
    dx = px - cx
    dy = py - cy
    return (dx * dx + dy * dy) ** 0.5


def _adjust_route_with_midway_depot(
    ordered_stops: List[str],
    name_to_coord: Dict[str, Tuple[Optional[float], Optional[float]]],
    depot_name: Optional[str],
    time_window_min: Optional[float],
    speed_kmph: float,
    proximity_km: float = 5.0,
) -> List[str]:
    if not depot_name or not ordered_stops or time_window_min is None:
        return ordered_stops
    if depot_name not in ordered_stops:
        return ordered_stops

    def leg_time_minutes(a: str, b: str) -> float:
        lat1, lon1 = name_to_coord.get(a, (None, None))
        lat2, lon2 = name_to_coord.get(b, (None, None))
        if lat1 is None or lon1 is None or lat2 is None or lon2 is None:
            return 0.0
        km = _haversine_km(float(lat1), float(lon1), float(lat2), float(lon2))
        return (km / max(speed_kmph, 1e-6)) * 60.0

    def depot_distance_to_leg(a: str, b: str) -> float:
        latd, lond = name_to_coord.get(depot_name, (None, None))
        lat1, lon1 = name_to_coord.get(a, (None, None))
        lat2, lon2 = name_to_coord.get(b, (None, None))
        if None in (latd, lond, lat1, lon1, lat2, lon2):
            return float("inf")
        return _point_to_segment_distance_km(float(latd), float(lond), float(lat1), float(lon1), float(lat2), float(lon2))

    adjusted = list(ordered_stops)
    changed = True
    safety_counter = 0
    while changed and safety_counter < 10:
        safety_counter += 1
        changed = False
        time_since_last_depot = 0.0
        for i in range(len(adjusted) - 1):
            a = adjusted[i]
            b = adjusted[i + 1]
            this_leg_min = leg_time_minutes(a, b)
            if (time_since_last_depot + this_leg_min) > float(time_window_min):
                if a != depot_name and b != depot_name and depot_distance_to_leg(a, b) <= proximity_km:
                    adjusted.insert(i + 1, depot_name)
                    changed = True
                    break
            time_since_last_depot += this_leg_min
            if b == depot_name:
                time_since_last_depot = 0.0
    return adjusted

def _build_intermediate_distance_matrix(route_coords: List[dict], start_name: Optional[str] = None, end_name: Optional[str] = None) -> Dict[str, Dict[str, float]]:
    def is_fixed_endpoint(name: str) -> bool:
        if start_name and name == start_name:
            return True
        if end_name and name == end_name:
            return True
        return False

    valid = [
        rc for rc in route_coords
        if rc.get("lat") is not None and rc.get("lon") is not None and not is_fixed_endpoint(str(rc.get("name")))
    ]
    matrix: Dict[str, Dict[str, float]] = {}
    for i, a in enumerate(valid):
        name_a = str(a.get("name"))
        matrix[name_a] = {}
        for j, b in enumerate(valid):
            name_b = str(b.get("name"))
            if i == j:
                matrix[name_a][name_b] = 0.0
            else:
                matrix[name_a][name_b] = _haversine_km(float(a["lat"]), float(a["lon"]), float(b["lat"]), float(b["lon"]))
    return matrix


def _estimate_intermediate_metrics(ordered_stops: List[str], name_to_coord: Dict[str, Tuple[Optional[float], Optional[float]]], speed_kmph: float) -> Dict[str, float]:
    total_km = 0.0
    for i in range(len(ordered_stops) - 1):
        a = ordered_stops[i]
        b = ordered_stops[i + 1]
        lat1, lon1 = name_to_coord.get(a, (None, None))
        lat2, lon2 = name_to_coord.get(b, (None, None))
        if lat1 is not None and lon1 is not None and lat2 is not None and lon2 is not None:
            total_km += _haversine_km(float(lat1), float(lon1), float(lat2), float(lon2))
    time_min = (total_km / max(speed_kmph, 1e-6)) * 60.0
    return {"distance_km_estimated_intermediate": round(total_km, 2), "time_min_estimated_intermediate": round(time_min, 1)}

def _extract_json_from_text(text: str) -> Optional[dict]:
    try:
        fenced = re.search(r"```(?:json)?\s*({[\s\S]*?})\s*```", text, flags=re.I)
        if fenced:
            return json.loads(fenced.group(1))
        start = text.find("{")
        end = text.rfind("}")
        if start != -1 and end != -1 and end > start:
            candidate = text[start : end + 1]
            return json.loads(candidate)
    except Exception:
        pass
    return None


def get_gemini_plan_for_truck(truck_id: str, truck_info: dict):
    if not genai:
        return {"error": "Gemini disabled or unavailable."}
    model = genai.GenerativeModel("gemini-1.5-flash")

    truck_payload = {
        "truck_id": truck_id,
        "type": truck_info.get("type"),
        "capacity_t": truck_info.get("capacity_t"),
        "load_t": truck_info.get("load_t"),
        "distance_km": truck_info.get("distance_km"),
        "time_min": truck_info.get("time_min"),
        "route": truck_info.get("route"),
        "route_coords": truck_info.get("route_coords"),
        "farms": truck_info.get("farms"),
        "utilization_pct": truck_info.get("utilization_pct"),
        "flags": truck_info.get("flags"),
        "time_window_min": truck_info.get("time_window_min"),
        "domain_type": truck_info.get("domain_type"),
    }

    route_coords: List[dict] = truck_info.get("route_coords") or []
    original_route: List[str] = truck_info.get("route") or []
    start_name = original_route[0] if len(original_route) > 0 else None
    end_name = original_route[-1] if len(original_route) > 1 else None
    distance_matrix = _build_intermediate_distance_matrix(route_coords, start_name, end_name)
    intermediate_stops = list(distance_matrix.keys())
    name_to_coord: Dict[str, Tuple[Optional[float], Optional[float]]] = {str(rc.get("name")): (rc.get("lat"), rc.get("lon")) for rc in route_coords if rc.get("name")}
    truck_type = (truck_info.get("type") or "").lower()
    speed_kmph = 35.0 if "refrigerated" in truck_type else 40.0

    prompt = f"""
You are a logistics route planner. The input route is already quantum-optimized. Craft a clear, step-by-step execution plan (no re-optimization) that respects constraints.

MANDATORY rules:
- Do NOT change the set or order of stops unless a HARD constraint with level "error" explicitly requires adjustment.
- The route MUST start at the first stop and end at the last stop from the provided route.
- Incorporate context: farms indices, utilization, flags (✅ ok, ⚠ warning, ❌ error). If a constraint (e.g., milk time window) is violated, annotate it clearly in the summary.
- Use the provided pairwise distance matrix for intermediate-stops estimation and average speed = {speed_kmph} km/h for time estimation if needed.
- Return ONLY a JSON object.

Inputs:
- truck: {json.dumps(truck_payload, indent=2)}
- intermediate_stops: {json.dumps(intermediate_stops)}
- pairwise_distance_km: {json.dumps(distance_matrix, indent=2)}

Output JSON schema (exact keys, React-friendly):
{{
  "truck_id": string,
  "ordered_stops": [string, ...],
  "route_coords": {{ by_stop: {{ [stop: string]: {{"lat": number|null, "lon": number|null}} }} }},
  "legs": {{ list: [{{"from": string, "to": string, "distance_km_estimated": number, "time_min_estimated": number}}] }},
  "steps": [{{"step": number, "action": string, "from": string, "to": string, "notes": string|null}}],
  "constraints": {{
    "utilization_pct": number|null,
    "flags": [{{"level": "ok"|"warn"|"error", "message": string}}],
    "time_window_min": number|null
  }},
  "summary": {{
    "type": string,
    "capacity_t": number,
    "load_t": number,
    "total_distance_km_estimated": number,
    "total_time_min_estimated": number,
    "violations": [string]
  }}
}}

Notes:
- ordered_stops should normally equal the provided route order.
- steps is a human-friendly sequence like "Drive from A to B", including notes if a warning/error applies.
"""

    response = model.generate_content(prompt)
    text = ""
    if response and getattr(response, "candidates", None):
        try:
            text = response.candidates[0].content.parts[0].text  # type: ignore[attr-defined]
        except Exception:
            text = str(response)
    else:
        text = "No response from Gemini."

    parsed = _extract_json_from_text(text)
    if parsed is None:
        return {"truck_id": truck_id, "raw_text": text}

    try:
        ordered: List[str] = parsed.get("ordered_stops") or []
        depot_name = original_route[-1] if len(original_route) > 0 else None
        tw = truck_info.get("time_window_min")
        ordered = _adjust_route_with_midway_depot(ordered, name_to_coord, depot_name, tw, speed_kmph)
        parsed["ordered_stops"] = ordered
        legs = []
        total_km = 0.0
        for i in range(len(ordered) - 1):
            a = ordered[i]
            b = ordered[i + 1]
            lat1, lon1 = name_to_coord.get(a, (None, None))
            lat2, lon2 = name_to_coord.get(b, (None, None))
            if lat1 is not None and lon1 is not None and lat2 is not None and lon2 is not None:
                leg_km = _haversine_km(float(lat1), float(lon1), float(lat2), float(lon2))
            else:
                leg_km = float(distance_matrix.get(a, {}).get(b, 0.0))
            total_km += leg_km
            legs.append({
                "from": a,
                "to": b,
                "distance_km_estimated": round(leg_km, 2),
                "time_min_estimated": round((leg_km / max(speed_kmph, 1e-6)) * 60.0, 1),
            })

        total_min = (total_km / max(speed_kmph, 1e-6)) * 60.0

        if isinstance(parsed.get("legs"), dict) and isinstance(parsed["legs"].get("list"), list):
            parsed["legs"] = parsed["legs"]["list"]
        parsed.setdefault("legs", legs)

        if not parsed.get("steps"):
            steps = []
            for idx, leg in enumerate(legs, start=1):
                steps.append({
                    "step": idx,
                    "action": "Drive",
                    "from": leg["from"],
                    "to": leg["to"],
                    "notes": None,
                })
            parsed["steps"] = steps

        flags = truck_info.get("flags") or []
        simple_flags = [{"level": f.get("level"), "message": f.get("message")} for f in flags]
        time_window_min = truck_info.get("time_window_min")
        if time_window_min is None:
            domain = (truck_info.get("domain_type") or "").lower()
            if "dairy" in domain or "milk" in domain:
                time_window_min = DEFAULT_DAIRY_TIME_WINDOW_MIN
            elif any(k in domain for k in ["perish", "fresh", "cold"]):
                time_window_min = DEFAULT_PERISHABLE_TIME_WINDOW_MIN
        parsed["constraints"] = {
            "utilization_pct": truck_info.get("utilization_pct"),
            "flags": simple_flags,
            "time_window_min": time_window_min,
        }

        summary = parsed.get("summary") if isinstance(parsed.get("summary"), dict) else {}
        summary.update({
            "type": truck_info.get("type"),
            "capacity_t": truck_info.get("capacity_t"),
            "load_t": truck_info.get("load_t"),
            "total_distance_km_estimated": round(total_km, 2),
            "total_time_min_estimated": round(total_min, 1),
        })

        violations: List[str] = []
        if isinstance(time_window_min, (int, float)) and total_min > float(time_window_min):
            violations.append(f"Time window violated: {round(total_min,1)} min > {float(time_window_min)} min")
        for f in flags:
            if f.get("level") == "error":
                msg = str(f.get("message"))
                if msg not in violations:
                    violations.append(msg)
        if violations:
            summary["violations"] = violations
        parsed["summary"] = summary
    except Exception:
        pass

    return parsed


def get_per_truck_plans(trucks_with_coords: dict) -> Dict[str, dict]:
    results: Dict[str, dict] = {}
    for truck_id, info in trucks_with_coords.items():
        plan = get_gemini_plan_for_truck(truck_id, info)
        if isinstance(plan, dict) and "truck_id" not in plan:
            plan["truck_id"] = truck_id
        results[truck_id] = plan
    return results



# === MAIN PIPELINE ===
if __name__ == "__main__":
    raw_input = os.environ.get("ROUTING_TEXT", """=== OPTIMAL QUANTUM ROUTING SOLUTION ===
Truck 1 (Refrigerated) (refrigerated, 8t capacity):
  Route: Vishnu Institute of Technology, Bhimavaram → Kalla Farm + Undi Urban Farm + Narsapur Milk Dairy → Vishnu Institute of Technology, Bhimavaram 
  Distance: 77.24 km
  Time: 154.5 minutes (2.6 hours)
  Load: 7t / 8t
  Type: Dairy Products
  Farms: [1, 3, 8]
  Utilization: 87.5%
  ✅ Capacity constraint satisfied
  ✅ Refrigerated truck constraint satisfied
  ⚠ Milk time window violated (time: 154.5min > 120min)
""")

    parsed = parse_trucks(raw_input)
    enriched = enrich_with_coords(parsed)

    fleet_json = {
        "fleet_summary": {"total_trucks": len(enriched)},
        "trucks": enriched,
    }

    if not os.environ.get("SKIP_GEMINI"):
        per_truck = get_per_truck_plans(enriched)
        minimal_output: Dict[str, Dict[str, object]] = {}
        for tid, plan in per_truck.items():
            if not isinstance(plan, dict):
                continue
            ordered = plan.get("ordered_stops") or enriched.get(tid, {}).get("route", [])
            steps = plan.get("steps") or []
            constraints = plan.get("constraints") or {}
            summary = plan.get("summary") or {}
            minimal_output[tid] = {
                "route": ordered,
                "steps": steps,
                "constraints": constraints,
                "summary": summary,
            }
        print(json.dumps(minimal_output, indent=2))
    else:
        minimal_output: Dict[str, Dict[str, object]] = {}
        for tid, info in enriched.items():
            minimal_output[tid] = {
                "route": info.get("route", []),
                "steps": [],
                "constraints": {},
                "summary": {
                    "type": info.get("type"),
                    "capacity_t": info.get("capacity_t"),
                    "load_t": info.get("load_t"),
                },
            }
        print(json.dumps(minimal_output, indent=2))


