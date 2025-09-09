"use client";

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Map, Navigation, AlertCircle } from 'lucide-react';
import { GOOGLE_MAPS_API_KEY } from '@/lib/config';

interface RoutePoint {
  lat: number;
  lng: number;
  address: string;
  step?: number;
}

interface PythonRouteData {
  route: string[];
  steps: Array<{
    step: number;
    action: string;
    from: string;
    to: string;
    notes: string | null;
  }>;
  constraints: {
    utilization_pct: number;
    flags: Array<{
      level: string;
      message: string;
    }>;
    time_window_min: number;
  };
  summary: {
    type: string;
    capacity_t: number;
    load_t: number;
    total_distance_km_estimated: number;
    total_time_min_estimated: number;
    violations: string[];
  };
}

interface GoogleMapComponentProps {
  pythonData?: PythonRouteData;
  className?: string;
}

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

export default function GoogleMapComponent({ pythonData, className = "" }: GoogleMapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [directionsService, setDirectionsService] = useState<any>(null);
  const [directionsRenderer, setDirectionsRenderer] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log('GoogleMapComponent received pythonData:', pythonData);

  // Geocoded coordinates from your Python output
  const geocodedPoints = {
    "Vishnu Institute of Technology, Bhimavaram": { lat: 16.5659605, lng: 81.5225313 },
    "Kalla Farm": { lat: 16.5360809, lng: 81.4113414 },
    "Undi Urban Farm": { lat: 16.5856693, lng: 81.4577972 },
    "Narsapur Milk Dairy": { lat: 16.4405615, lng: 81.7024526 }
  };

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google) {
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=geometry&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      window.initMap = initializeMap;
      document.head.appendChild(script);

      script.onerror = () => {
        setError('Failed to load Google Maps');
        setIsLoading(false);
      };
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      try {
        const mapInstance = new window.google.maps.Map(mapRef.current, {
          zoom: 12,
          center: { lat: 16.5659605, lng: 81.5225313 }, // Center on Vishnu Institute
          mapTypeId: window.google.maps.MapTypeId.SATELLITE,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }]
            }
          ]
        });

        const directionsServiceInstance = new window.google.maps.DirectionsService();
        const directionsRendererInstance = new window.google.maps.DirectionsRenderer({
          draggable: false,
          suppressMarkers: true, // We'll add custom markers
          polylineOptions: {
            strokeColor: '#FF6B35',
            strokeWeight: 6,
            strokeOpacity: 0.9
          }
        });

        directionsRendererInstance.setMap(mapInstance);

        setMap(mapInstance);
        setDirectionsService(directionsServiceInstance);
        setDirectionsRenderer(directionsRendererInstance);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to initialize map');
        setIsLoading(false);
      }
    };

    loadGoogleMaps();

    return () => {
      // Cleanup function - no specific cleanup needed for Google Maps
    };
  }, []);

  useEffect(() => {
    if (!map || !directionsService || !directionsRenderer || !pythonData) return;

    const drawRoute = () => {
      const route = pythonData.route;
      if (route.length < 2) return;

      const waypoints = route.slice(1, -1).map(location => {
        const coords = geocodedPoints[location as keyof typeof geocodedPoints];
        return coords ? { location: coords } : null;
      }).filter(Boolean);

      const request = {
        origin: geocodedPoints[route[0] as keyof typeof geocodedPoints],
        destination: geocodedPoints[route[route.length - 1] as keyof typeof geocodedPoints],
        waypoints: waypoints,
        travelMode: window.google.maps.TravelMode.DRIVING,
        optimizeWaypoints: false
      };

      directionsService.route(request, (result: any, status: any) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
          
          // Add custom markers for each step
          addCustomMarkers(route);
        } else {
          console.error('Directions request failed:', status);
          // Fallback: show markers without route
          addCustomMarkers(route);
        }
      });
    };

    const addCustomMarkers = (route: string[]) => {
      route.forEach((location, index) => {
        const coords = geocodedPoints[location as keyof typeof geocodedPoints];
        if (!coords) return;

        const marker = new window.google.maps.Marker({
          position: coords,
          map: map,
          title: location,
          label: {
            text: (index + 1).toString(),
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px'
          },
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 12,
            fillColor: index === 0 || index === route.length - 1 ? '#28a745' : '#dc3545',
            fillOpacity: 1,
            strokeColor: 'white',
            strokeWeight: 3
          }
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div class="p-2">
              <h3 class="font-semibold text-sm">${location}</h3>
              <p class="text-xs text-gray-600">Step ${index + 1}</p>
              ${pythonData.steps[index] ? `
                <p class="text-xs text-gray-500 mt-1">
                  Action: ${pythonData.steps[index].action}
                </p>
              ` : ''}
            </div>
          `
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
        });
      });
    };

    drawRoute();
  }, [map, directionsService, directionsRenderer, pythonData]);

  if (error) {
    return (
      <Card className={`bg-card border-border ${className}`}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Map className="h-5 w-5 text-primary" />
            Route Map
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-64">
          <div className="text-center space-y-2">
            <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
            <p className="text-destructive">{error}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!pythonData) {
    return (
      <Card className={`bg-card border-border ${className}`}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Map className="h-5 w-5 text-primary" />
            Route Map
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-64">
          <div className="text-center space-y-2">
            <Map className="h-16 w-16 text-muted-foreground mx-auto" />
            <p className="text-muted-foreground">
              Select trucks and configure pickup locations to generate an optimized route
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`bg-card border-border ${className}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <Map className="h-5 w-5 text-primary" />
            Route Map
          </CardTitle>
          {pythonData && (
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                Python Optimized
              </Badge>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                {pythonData.route.length} Stops
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 bg-muted/50 flex items-center justify-center z-10 rounded-lg">
              <div className="text-center space-y-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                <p className="text-sm text-muted-foreground">Loading map...</p>
              </div>
            </div>
          )}
          <div 
            ref={mapRef} 
            className="w-full h-96 rounded-lg border border-border"
            style={{ minHeight: '400px' }}
          />
        </div>
        
        {pythonData && (
          <div className="mt-4 space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold text-card-foreground">
                  {pythonData.summary.total_distance_km_estimated} km
                </div>
                <div className="text-sm text-muted-foreground">Total Distance</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-lg font-bold text-card-foreground">
                  {Math.round(pythonData.summary.total_time_min_estimated)} min
                </div>
                <div className="text-sm text-muted-foreground">Total Time</div>
              </div>
            </div>
            
            <div className="p-3 bg-muted rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Navigation className="h-4 w-4 text-primary" />
                <span className="font-medium text-card-foreground">Route Summary</span>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p><strong>Truck Type:</strong> {pythonData.summary.type}</p>
                <p><strong>Capacity:</strong> {pythonData.summary.capacity_t}t</p>
                <p><strong>Load:</strong> {pythonData.summary.load_t}t</p>
                <p><strong>Utilization:</strong> {pythonData.constraints.utilization_pct}%</p>
              </div>
            </div>

            {pythonData.constraints.flags.length > 0 && (
              <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-yellow-400" />
                  <span className="font-medium text-yellow-400">Constraints</span>
                </div>
                <div className="space-y-1">
                  {pythonData.constraints.flags.map((flag, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <span className={`w-2 h-2 rounded-full ${
                        flag.level === 'ok' ? 'bg-green-400' : 
                        flag.level === 'warn' ? 'bg-yellow-400' : 'bg-red-400'
                      }`}></span>
                      <span className={`${
                        flag.level === 'ok' ? 'text-green-400' : 
                        flag.level === 'warn' ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {flag.message}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {pythonData.summary.violations.length > 0 && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-red-400" />
                  <span className="font-medium text-red-400">Violations</span>
                </div>
                <div className="space-y-1">
                  {pythonData.summary.violations.map((violation, index) => (
                    <p key={index} className="text-sm text-red-400">• {violation}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
