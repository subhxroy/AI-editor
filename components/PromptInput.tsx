import React, { useState } from 'react';
import { MagicWandIcon } from './IconComponents';

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

const PRESET_PROMPTS = [
  { name: "Retouch", prompt: "Natural portrait retouch: smooth skin, remove blemishes, brighten eyes, keep natural texture, subtle color correction, maintain identity." },
  { name: "Dramatic", prompt: "Replace background with dramatic stormy seascape at sunset; add cinematic rim light from left; desaturate background slightly; keep subject color pop; apply subtle film grain and 35mm look." },
  { name: "Cartoon", prompt: "Turn the portrait into a hand-drawn, textured watercolor illustration: strong black ink outlines, soft washes of color, paper texture visible, maintain facial likeness." },
  { name: "80s Poster", prompt: "Make this look like an 80s movie poster with neon and dramatic shadows, keep the face the same but stylize everything else." },
];

const PromptInput: React.FC<PromptInputProps> = ({ onSubmit, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt);
    }
  };
  
  const handlePresetClick = (presetPrompt: string) => {
    setPrompt(presetPrompt);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-2">Describe your edit</label>
      <textarea
        id="prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g., 'Turn me into a superhero' or 'Add a futuristic city in the background'"
        className="w-full h-32 p-3 bg-gray-900 border border-gray-700 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition resize-none text-gray-200"
        disabled={isLoading}
      />
      <div className="mt-2 flex flex-wrap gap-2">
          {PRESET_PROMPTS.map(p => (
              <button
                  key={p.name}
                  type="button"
                  onClick={() => handlePresetClick(p.prompt)}
                  disabled={isLoading}
                  className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-900/50 rounded-full hover:bg-purple-800/50 disabled:opacity-50 transition"
              >
                  {p.name}
              </button>
          ))}
      </div>
      <button
        type="submit"
        disabled={isLoading || !prompt.trim()}
        className="mt-4 w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
      >
        <MagicWandIcon />
        {isLoading ? 'Generating...' : 'Generate Variants'}
      </button>
    </form>
  );
};

export default PromptInput;