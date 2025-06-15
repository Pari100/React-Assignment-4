import React from 'react';
import { mockSalesData } from '../../data/mockData';

const Chart: React.FC = () => {
  const maxValue = Math.max(...mockSalesData.map(d => d.revenue));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Revenue Overview
        </h3>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">Revenue</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-end justify-between h-64 gap-4">
        {mockSalesData.map((data, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div 
              className="w-full bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-t-lg relative group cursor-pointer hover:from-indigo-600 hover:to-indigo-500 transition-colors"
              style={{ 
                height: `${(data.revenue / maxValue) * 100}%`,
                minHeight: '8px'
              }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                ${data.revenue.toLocaleString()}
              </div>
            </div>
            <div className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400">
              {data.month}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chart;