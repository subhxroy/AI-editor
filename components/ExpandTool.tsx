import React, { useState } from 'react';
import { ExpandIcon } from './IconComponents';

interface ExpandToolProps {
  onExpand: (aspectRatio: string) => void;
  isLoading: boolean;
}

const ASPECT_RATIOS = [
  { name: 'Landscape', value: '16:9' },
  { name: 'Portrait', value: '9:16' },
  { name: 'Widescreen', value: '4:3' },
  { name: 'Tall', value: '3:4' },
  { name: 'Square', value: '1:1' },
];

const ExpandTool: React.FC<ExpandToolProps> = ({ onExpand, isLoading }) => {
  const [selectedRatio, setSelectedRatio] = useState<string>(ASPECT_RATIOS[0].value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRatio) {
      onExpand(selectedRatio);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="aspect-ratio" className="block text-sm font-medium text-gray-300 mb-2">Select an aspect ratio to expand to</label>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {ASPECT_RATIOS.map(({ name, value }) => (
          <button
            key={value}
            type="button"
            onClick={() => setSelectedRatio(value)}
            disabled={isLoading}
            className={`p-2 text-sm font-medium rounded-md transition disabled:opacity-50 text-center
              ${selectedRatio === value
                ? 'bg-purple-600 text-white ring-2 ring-purple-400'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
          >
            <div>{name}</div>
            <div className="text-xs opacity-80">{value}</div>
          </button>
        ))}
      </div>
      
      <button
        type="submit"
        disabled={isLoading || !selectedRatio}
        className="w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
      >
        <ExpandIcon />
        {isLoading ? 'Expanding...' : 'Generate Expansion'}
      </button>
    </form>
  );
};

export default ExpandTool;