import React from "react";
import "../Styles/DownloadButton.css";

interface DownloadButtonProps {
  frames: HTMLCanvasElement[];
  fps: number;
  filename: string;
  enhancedVideo: string | undefined;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  frames,
  fps,
  filename,
  enhancedVideo,
}) => {
  const handleDownload = () => {
    if (enhancedVideo) {
      const link = document.createElement("a");
      link.href = enhancedVideo;
      link.download = filename;
      link.click();
    }
  };

  return (
    <div className="download-container">
      <button onClick={handleDownload} disabled={!enhancedVideo}>
        Download Enhanced Video
      </button>
      {!enhancedVideo && <p>Enhance video to enable download.</p>}
    </div>
  );
};
