
import React from 'react';

interface LoaderProps {
  message: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <div className="absolute inset-0 bg-gray-900 bg-opacity-80 flex flex-col justify-center items-center z-50 rounded-lg">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-purple-500"></div>
      <p className="mt-4 text-lg font-semibold text-gray-200">{message}</p>
    </div>
  );
};

export default Loader;
