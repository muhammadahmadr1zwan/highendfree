import { useState } from 'react';

interface PromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
}

const PromptInput = ({ onSubmit, isLoading = false }: PromptInputProps) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe how you want to edit your video..."
          className="w-full min-h-[100px] p-4 rounded-lg border border-border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        disabled={!prompt.trim() || isLoading}
        className="w-full px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Processing...' : 'Generate Video'}
      </button>
    </form>
  );
};

export default PromptInput; 