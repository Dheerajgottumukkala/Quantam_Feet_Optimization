"use client";

import React, { useEffect, useRef } from 'react';

interface RoutePoint {
  name: string;
  lat: number;
  lon: number;
}

interface LeafletRouteMapProps {
  pythonData?: {
    route_plan: RoutePoint[];
  };
  className?: string;
}

declare global {
  interface Window {
    L: any;
  }
}

const LeafletRouteMap: React.FC<LeafletRouteMapProps> = ({ pythonData, className = "" }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const routeGroupRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Load Leaflet CSS and JS
    const loadLeaflet = async () => {
      // Add CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Add JS
      if (!window.L) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = initializeMap;
        document.head.appendChild(script);
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (!window.L || !mapRef.current) return;

      // Clear existing map
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      // Initialize map
      const map = window.L.map(mapRef.current).setView([16.5659605, 81.5225313], 11);

      // Add OpenStreetMap tiles
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(map);

      // Store map instance
      mapInstanceRef.current = map;
      routeGroupRef.current = window.L.layerGroup().addTo(map);

      // Load route if data is available
      if (pythonData?.route_plan) {
        loadRoute();
      }
    };

    const loadRoute = async () => {
      if (!pythonData?.route_plan || !mapInstanceRef.current || !routeGroupRef.current) return;

      const truckRoute = pythonData.route_plan.map(point => ({
        lat: point.lat,
        lng: point.lon,
        name: point.name,
        action: getActionForPoint(point.name),
        time: getTimeForPoint(point.name)
      }));

      // Clear existing route
      routeGroupRef.current.clearLayers();

      // Add markers
      const markers: any[] = [];
      truckRoute.forEach((point, index) => {
        const marker = window.L.marker([point.lat, point.lng])
          .bindPopup(`
            <div style="min-width: 200px;">
              <h4 style="margin: 5px 0; color: #2196F3;">Stop ${index + 1}</h4>
              <strong>${point.action}</strong><br>
              <em>${point.name}</em><br>
              <small>📅 ${point.time}</small><br>
              <small>📍 ${point.lat.toFixed(4)}, ${point.lng.toFixed(4)}</small>
            </div>
          `)
          .addTo(routeGroupRef.current);
        markers.push(marker);
      });

      // Draw road-based path
      await drawRoadPath(truckRoute);

      // Fit map to route bounds
      if (markers.length > 0) {
        const group = window.L.featureGroup(markers);
        mapInstanceRef.current.fitBounds(group.getBounds().pad(0.1));
      }
    };

    const drawRoadPath = async (truckRoute: any[]) => {
      const allRouteSegments: any[] = [];

      for (let i = 0; i < truckRoute.length - 1; i++) {
        const start = truckRoute[i];
        const end = truckRoute[i + 1];

        try {
          const routeData = await getRouteFromOSRM(start, end);
          if (routeData?.coordinates) {
            allRouteSegments.push(...routeData.coordinates);
          } else {
            // Fallback to straight line
            allRouteSegments.push([start.lng, start.lat], [end.lng, end.lat]);
          }
        } catch (error) {
          console.warn(`Routing failed for segment ${i + 1}, using straight line:`, error);
          allRouteSegments.push([start.lng, start.lat], [end.lng, end.lat]);
        }
      }

      // Convert coordinates from [lng, lat] to [lat, lng] for Leaflet
      const leafletCoords = allRouteSegments.map(coord => [coord[1], coord[0]]);

      // Draw the route path
      if (leafletCoords.length > 0) {
        window.L.polyline(leafletCoords, {
          color: '#2196F3',
          weight: 4,
          opacity: 0.8,
          dashArray: '10, 5'
        }).addTo(routeGroupRef.current);
      }
    };

    const getRouteFromOSRM = async (start: any, end: any) => {
      const url = `https://router.project-osrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`;

      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();
        if (data.routes?.[0]?.geometry) {
          return {
            coordinates: data.routes[0].geometry.coordinates,
            distance: data.routes[0].distance,
            duration: data.routes[0].duration
          };
        }
        return null;
      } catch (error) {
        console.error('OSRM Routing error:', error);
        return null;
      }
    };

    const getActionForPoint = (name: string) => {
      if (name.includes('Vishnu Institute')) return '🏁 Start Point';
      if (name.includes('Kalla Farm')) return '📦 Pickup';
      if (name.includes('Undi')) return '📦 Pickup';
      if (name.includes('Narsapur')) return '🚚 Delivery';
      return '📍 Stop';
    };

    const getTimeForPoint = (name: string) => {
      if (name.includes('Vishnu Institute')) return '08:00 AM';
      if (name.includes('Kalla Farm')) return '08:30 AM';
      if (name.includes('Undi')) return '09:00 AM';
      if (name.includes('Narsapur')) return '09:45 AM';
      return '10:30 AM';
    };

    loadLeaflet();

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [pythonData]);

  return (
    <div 
      ref={mapRef} 
      className={`w-full h-80 rounded-lg border border-slate-600/30 ${className}`}
      style={{ minHeight: '320px' }}
    />
  );
};

export default LeafletRouteMap;
