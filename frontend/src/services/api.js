// src/services/api.js
export async function fetchMockData() {
    // fetch from public/ directly
    const geo = await fetch('/regions.geojson').then((r) => {
      if (!r.ok) throw new Error(`GeoJSON fetch failed: ${r.status}`);
      return r.json();
    });
    return { geo };
  }
  