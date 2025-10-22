import React, { useState } from 'react';
import PromptInput from './PromptInput';
import ExpandTool from './ExpandTool';

interface EditingToolsProps {
  onSubmitPrompt: (prompt: string) => void;
  onExpand: (aspectRatio: string) => void;
  isLoading: boolean;
}

type ActiveTab = 'stylize' | 'expand';

const EditingTools: React.FC<EditingToolsProps> = ({ onSubmitPrompt, onExpand, isLoading }) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('stylize');

  const TabButton: React.FC<{ tabName: ActiveTab; label: string; children: React.ReactNode }> = ({ tabName, label, children }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition
        ${activeTab === tabName
          ? 'text-purple-400 border-purple-400'
          : 'text-gray-400 border-transparent hover:text-white hover:border-gray-500'
        }`}
      aria-current={activeTab === tabName ? 'page' : undefined}
    >
      {children}
      {label}
    </button>
  );

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg">
        <div className="flex border-b border-gray-700">
            <TabButton tabName="stylize" label="Stylize">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.25278C12 6.25278 15.0113 3.69763 17.5224 6.20879C20.0336 8.71994 17.4784 11.7312 17.4784 11.7312M12 6.25278C12 6.25278 8.98873 3.69763 6.47757 6.20879C3.96642 8.71994 6.52157 11.7312 6.52157 11.7312M12 6.25278V18.2528M4 16.2528H20" />
                </svg>
            </TabButton>
            <TabButton tabName="expand" label="AI Expand">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4h4m12 4V4h-4M4 16v4h4m12-4v4h-4" />
                </svg>
            </TabButton>
        </div>
        <div className="p-4">
            {activeTab === 'stylize' && <PromptInput onSubmit={onSubmitPrompt} isLoading={isLoading} />}
            {activeTab === 'expand' && <ExpandTool onExpand={onExpand} isLoading={isLoading} />}
        </div>
    </div>
  );
};

export default EditingTools;
