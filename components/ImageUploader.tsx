
import React, { useCallback, useState } from 'react';
import { UploadIcon } from './IconComponents';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageUpload(e.target.files[0]);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onImageUpload(e.dataTransfer.files[0]);
    }
  }, [onImageUpload]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <div
        className={`flex justify-center items-center w-full p-12 border-2 border-dashed rounded-lg cursor-pointer transition-colors
          ${isDragging ? 'border-purple-500 bg-gray-800' : 'border-gray-600 hover:border-gray-500 hover:bg-gray-800'}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onClick={() => document.getElementById('file-upload')?.click()}
      >
        <div className="text-center">
          <UploadIcon />
          <p className="mt-4 text-lg text-gray-400">
            <span className="font-semibold text-purple-400">Click to upload</span> or drag and drop
          </p>
          <p className="text-sm text-gray-500">PNG, JPG, or WEBP</p>
          <input id="file-upload" type="file" className="hidden" accept="image/png, image/jpeg, image/webp" onChange={handleFileChange} />
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
