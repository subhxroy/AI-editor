import React from 'react';
import Header from '../components/Header';
import ImageUploader from '../components/ImageUploader';
import EditingTools from '../components/EditingTools';
import ResultDisplay from '../components/ResultDisplay';
import Loader from '../components/Loader';
import { useImageEditing } from '../hooks/useImageEditing';
import { ResetIcon } from '../components/IconComponents';

const EditorPage: React.FC = () => {
  const {
    originalImage,
    editedImages,
    isLoading,
    loadingMessage,
    error,
    optimizedPromptData,
    handleImageUpload,
    handleSubmitPrompt,
    handleExpandImage,
    handleRefine,
    handleReset
  } = useImageEditing();

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      <Header />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {error && (
          <div className="bg-red-800/50 border border-red-600 text-red-200 px-4 py-3 rounded-lg relative mb-6" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {!originalImage ? (
          <ImageUploader onImageUpload={handleImageUpload} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {isLoading && <Loader message={loadingMessage} />}
            
            <div className="lg:col-span-1 flex flex-col gap-6 sticky top-8 self-start">
              <div>
                <h2 className="text-xl font-bold mb-3 text-gray-300">Source Image</h2>
                <div className="relative">
                  <img src={originalImage.dataUrl} alt="Original" className="w-full h-auto object-contain rounded-lg shadow-lg" />
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md">SOURCE</div>
                </div>
              </div>
              <EditingTools
                onSubmitPrompt={handleSubmitPrompt}
                onExpand={handleExpandImage}
                isLoading={isLoading}
              />
              <button
                onClick={handleReset}
                disabled={isLoading}
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 transition"
              >
                <ResetIcon/> Start Over
              </button>
            </div>
            
            <div className="lg:col-span-2">
              <ResultDisplay
                editedImages={editedImages}
                optimizedPromptData={optimizedPromptData}
                onRefine={handleRefine}
                isLoading={isLoading}
              />
            </div>
          </div>
        )}
         <footer className="text-center mt-12 py-4 border-t border-gray-700">
            <p className="text-sm text-gray-500">
                Images edited with Gemini may include SynthID for provenance. 
                Please adhere to safety policies and respect copyrights.
            </p>
        </footer>
      </main>
    </div>
  );
};

export default EditorPage;