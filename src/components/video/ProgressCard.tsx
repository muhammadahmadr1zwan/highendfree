"use client";

interface ProgressCardProps {
  progress: number;
  status: string;
}

const ProgressCard = ({ progress, status }: ProgressCardProps) => {
  return (
    <div className="w-full p-6 bg-card rounded-lg border border-border">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Processing Video</h3>
          <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground">{status}</p>
      </div>
    </div>
  );
};

export default ProgressCard; 