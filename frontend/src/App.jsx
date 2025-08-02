// src/App.jsx

import './index.css';
import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import MapView from './components/MapView';
import SummaryCard from './components/SummaryCard';
import { fetchMockData } from './services/api';

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchMockData()
      .then(setData)
      .catch((err) => {
        console.error('Data load failed:', err);
      });
  }, []);

  if (!data) return <div className="text-center mt-10">Loading…</div>;

  // Data-driven logic for top-3 and summary
  const features = data.geo.features;
  const sorted = [...features].sort(
    (a, b) => b.properties.metric - a.properties.metric
  );
  const top3 = sorted.slice(0, 3);
  const correlationSummary =
    'Higher environmental metric values tend to correlate with increased health incidents in these areas.';

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Dashboard Section */}
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-indigo-600 text-center">
            Dashboard
          </h2>
          <p className="mt-2 text-center text-gray-700">
            Explore environmental health trends in your community
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Map */}
            <MapView geoData={data.geo} />

            {/* Summary Cards */}
            <div className="space-y-4">
              <SummaryCard title="Correlation Summary">
                {correlationSummary}
              </SummaryCard>
              <SummaryCard title="Top 3 At-Risk Areas">
                <ol className="list-decimal list-inside">
                  {top3.map((f) => (
                    <li key={f.properties.name}>
                      {f.properties.name}: {f.properties.metric}
                    </li>
                  ))}
                </ol>
              </SummaryCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
