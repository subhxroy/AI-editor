import React from 'react';
import { OptimizedPrompt } from '../types';
import { DownloadIcon } from './IconComponents';

interface ResultDisplayProps {
  editedImages: string[];
  optimizedPromptData: OptimizedPrompt | null;
  onRefine: (imageDataUrl: string) => void;
  isLoading: boolean;
}

const DetailChip: React.FC<{ label: string; value: string | number | string[] }> = ({ label, value }) => (
  <div className="bg-gray-700 rounded-full px-3 py-1 text-xs flex items-center">
    <span className="font-semibold text-gray-300 mr-1.5">{label}:</span>
    <span className="text-purple-300">{Array.isArray(value) ? value.join(', ') : value}</span>
  </div>
);


const ResultDisplay: React.FC<ResultDisplayProps> = ({ editedImages, optimizedPromptData, onRefine, isLoading }) => {
  const handleDownload = (imageDataUrl: string, index: number) => {
    const link = document.createElement('a');
    link.href = imageDataUrl;
    link.download = `stylized-image-${index + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="w-full flex flex-col gap-8">
      {/* AI Editing Plan */}
      {optimizedPromptData ? (
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-purple-400 mb-2">AI Editing Plan</h3>
          <p className="text-gray-300 italic mb-3">"{optimizedPromptData.prompt}"</p>
          <div className="flex flex-wrap gap-2">
            <DetailChip label="Strength" value={optimizedPromptData.strength} />
            <DetailChip label="Aspect Ratio" value={optimizedPromptData.aspect_ratio} />
            <DetailChip label="Style" value={optimizedPromptData.style} />
            {optimizedPromptData.camera && <DetailChip label="Camera" value={optimizedPromptData.camera} />}
            {optimizedPromptData.lighting && <DetailChip label="Lighting" value={optimizedPromptData.lighting} />}
          </div>
          {optimizedPromptData.mask_hint && <p className="text-xs text-gray-400 mt-3"><strong>Mask Hint:</strong> {optimizedPromptData.mask_hint}</p>}
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-lg text-center h-full flex items-center justify-center min-h-[200px]">
           <p className="text-gray-400">Your generated images and the AI's editing plan will appear here.</p>
        </div>
      )}

      {/* Generated Variants */}
      {editedImages.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">
            {optimizedPromptData ? 'Generated Variants' : 'Generated Image'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {editedImages.map((image, index) => (
              <div key={index} className="relative group rounded-lg overflow-hidden shadow-2xl">
                <img src={image} alt={`Generated variant ${index + 1}`} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-black/70 flex flex-col sm:flex-row justify-center items-center gap-4 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => onRefine(image)}
                    disabled={isLoading}
                    className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 disabled:opacity-50 transition w-full sm:w-auto"
                  >
                    Refine This
                  </button>
                  <button
                    onClick={() => handleDownload(image, index)}
                    disabled={isLoading}
                    className="flex items-center justify-center px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 disabled:opacity-50 transition w-full sm:w-auto"
                  >
                    <DownloadIcon />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;