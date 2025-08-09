"use client";

import { useState } from 'react';
import UploadInput from './UploadInput';
import PromptInput from './PromptInput';
import ProgressCard from './ProgressCard';
import VideoPlayer from './VideoPlayer';

const VideoEditor = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('');

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setVideoUrl(URL.createObjectURL(file));
  };

  const handlePromptSubmit = async (prompt: string) => {
    setIsProcessing(true);
    setStatus('Starting video processing...');

    // Simulate processing with a fake progress bar
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 5;
      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsProcessing(false);
        setStatus('Processing complete!');
      } else {
        setProgress(currentProgress);
        setStatus(`Processing video... ${currentProgress}%`);
      }
    }, 500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 p-6">
      {!selectedFile ? (
        <UploadInput onFileSelect={handleFileSelect} />
      ) : (
        <>
          <VideoPlayer src={videoUrl} />
          <PromptInput onSubmit={handlePromptSubmit} isLoading={isProcessing} />
          {isProcessing && (
            <ProgressCard progress={progress} status={status} />
          )}
        </>
      )}
    </div>
  );
};

export default VideoEditor; 