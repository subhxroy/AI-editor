import { useState, useCallback } from 'react';
import { OptimizedPrompt, OriginalImage } from '../types';
import * as geminiService from '../services/geminiService';

export const useImageEditing = () => {
  const [originalImage, setOriginalImage] = useState<OriginalImage | null>(null);
  const [editedImages, setEditedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [optimizedPromptData, setOptimizedPromptData] = useState<OptimizedPrompt | null>(null);

  const handleImageUpload = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file.');
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setOriginalImage({ file, dataUrl: reader.result as string });
      setEditedImages([]);
      setOptimizedPromptData(null);
      setError(null);
    };
    reader.onerror = () => {
      setError('Failed to read the image file.');
    };
    reader.readAsDataURL(file);
  }, []);

  const handleSubmitPrompt = useCallback(async (userPrompt: string) => {
    if (!originalImage) {
      setError('Please upload an image first.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setEditedImages([]);
    setOptimizedPromptData(null);

    try {
      setLoadingMessage('Step 1/2: Optimizing your prompt with AI...');
      const optimizedData = await geminiService.optimizePrompt(userPrompt);
      setOptimizedPromptData(optimizedData);
      
      const numVariants = Math.max(1, Math.min(optimizedData.num_variants || 1, 4)); // Clamp between 1 and 4
      
      setLoadingMessage(`Step 2/2: Generating ${numVariants} image variant(s)...`);

      const fullPrompt = `${optimizedData.prompt}. Style: ${optimizedData.style.join(', ')}. Reference: ${optimizedData.reference}. Negative prompts: ${optimizedData.negative_prompts}`;

      const editPromises = Array(numVariants).fill(null).map(() => 
        geminiService.editImage(originalImage.dataUrl, originalImage.file.type, fullPrompt)
      );

      const results = await Promise.all(editPromises);
      setEditedImages(results);

    } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('An unknown error occurred.');
        }
    } finally {
      setIsLoading(false);
      setLoadingMessage('');
    }
  }, [originalImage]);

  const handleExpandImage = useCallback(async (aspectRatio: string) => {
    if (!originalImage) {
      setError('Please upload an image first.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setEditedImages([]);
    setOptimizedPromptData(null);

    try {
      setLoadingMessage(`Expanding image to ${aspectRatio}...`);
      
      const expandPrompt = `Expand this image to a ${aspectRatio} aspect ratio. Intelligently fill in the new areas based on the existing content of the image, maintaining the original style and lighting. The result should look natural and seamless. Do not change the original part of the image.`;

      const result = await geminiService.editImage(originalImage.dataUrl, originalImage.file.type, expandPrompt);
      setEditedImages([result]);

    } catch (err) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('An unknown error occurred during image expansion.');
        }
    } finally {
      setIsLoading(false);
      setLoadingMessage('');
    }
  }, [originalImage]);

  const handleRefine = useCallback((imageDataUrl: string) => {
    if (!originalImage) return;
    
    // Create a mock File object for consistency, though it won't have all properties
    const newFile = new File([], "refined_image.png", { type: originalImage.file.type });

    setOriginalImage({ file: newFile, dataUrl: imageDataUrl });
    setEditedImages([]);
    setOptimizedPromptData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [originalImage]);
  
  const handleReset = useCallback(() => {
    setOriginalImage(null);
    setEditedImages([]);
    setOptimizedPromptData(null);
    setError(null);
    setIsLoading(false);
  }, []);

  return {
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
  };
};