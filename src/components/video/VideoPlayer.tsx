"use client";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

const VideoPlayer = ({ src, poster }: VideoPlayerProps) => {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden bg-black/5">
      <video
        className="w-full h-full object-contain"
        controls
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer; 