// src/components/MapView.jsx

import React from 'react';
// Pull in Leaflet’s CSS here in addition to main.jsx, to guarantee it’s applied
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

// Simple color ramp for your “metric” property
const getColor = (value) => {
  return value > 75 ? '#800026' :
         value > 50 ? '#BD0026' :
         value > 25 ? '#E31A1C' :
                      '#FFEDA0';
};

// Style each feature based on its properties.metric
const styleFeature = (feature) => ({
  fillColor: getColor(feature.properties.metric),
  weight: 1,
  opacity: 1,
  color: 'white',
  fillOpacity: 0.7
});

export default function MapView({ geoData }) {
  // If no data yet, render nothing (parent shows Loading…)
  if (!geoData) return null;

  return (
    <MapContainer
      // Force the container to be 400px tall and full width
      style={{ height: '400px', width: '100%' }}
      center={[40.1, -75.1]}
      zoom={11}
      scrollWheelZoom={false}
    >
      {/* OpenStreetMap tiles */}
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Your GeoJSON overlay */}
      <GeoJSON data={geoData} style={styleFeature} />
    </MapContainer>
  );
}
