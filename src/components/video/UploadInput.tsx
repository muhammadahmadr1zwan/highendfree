import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface UploadInputProps {
  onFileSelect: (file: File) => void;
}

const UploadInput = ({ onFileSelect }: UploadInputProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles?.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mov', '.avi', '.mkv']
    },
    maxFiles: 1
  });

  return (
    <div
      {...getRootProps()}
      className={`w-full p-8 border-2 border-dashed rounded-lg cursor-pointer transition-colors
        ${isDragging ? 'border-primary bg-primary/5' : 'border-border'}
        hover:border-primary hover:bg-primary/5`}
      onDragEnter={() => setIsDragging(true)}
      onDragLeave={() => setIsDragging(false)}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center text-center">
        <svg
          className="w-12 h-12 mb-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <p className="mb-2 text-sm text-gray-500">
          <span className="font-semibold">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-gray-500">MP4, MOV, AVI or MKV (max 500MB)</p>
      </div>
    </div>
  );
};

export default UploadInput; 