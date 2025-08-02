// src/components/Hero.jsx
import React from 'react';
import { Globe, Stethoscope } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-white py-20">
      <div className="max-w-3xl mx-auto text-center px-4">
        <div className="relative inline-block">
          {/* Globe in orange */}
          <Globe className="w-32 h-32 text-orange-500" />
          {/* Stethoscope overlaid in gray */}
          <Stethoscope
            className="absolute inset-0 w-32 h-32 text-gray-300"
            style={{ transform: 'rotate(-45deg)' }}
          />
        </div>
        <h1 className="mt-6 text-5xl font-extrabold text-gray-800">
          EnviroCare AI
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Actionable environmental health insights for your community.
        </p>
        <button className="mt-8 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
