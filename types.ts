
export interface OptimizedPrompt {
  prompt: string;
  style: string[];
  reference: string;
  camera: string | null;
  lighting: string | null;
  color_grade: string | null;
  negative_prompts: string;
  mask_hint: string | null;
  strength: number;
  aspect_ratio: string;
  num_variants: number;
  notes?: string;
}

export interface OriginalImage {
  file: File;
  dataUrl: string;
}
