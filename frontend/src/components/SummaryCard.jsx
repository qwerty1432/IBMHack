// src/components/SummaryCard.jsx

import React from 'react';

export default function SummaryCard({ title, children }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  );
}
