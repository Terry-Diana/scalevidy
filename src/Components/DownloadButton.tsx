import React, { useState } from "react";
import { useVideoAssembler } from "../Hooks/useVideoAssembler";

type Props = {
  frames: HTMLCanvasElement[];
  fps: number;
  filename: string;
  enhancedVideo: string | undefined;
};

export const DownloadButton: React.FC<Props> = ({ frames, fps, filename, enhancedVideo }) => {
  const { isAssembling, assembleVideo, error } = useVideoAssembler();
  const [videoURL, setVideoURL] = useState<string | null>(null);

  const handleDownload = async () => {
    try {
      const videoBlob = await assembleVideo(frames, fps, filename);
      if (videoBlob) {
        setVideoURL(URL.createObjectURL(videoBlob));
      }
    } catch (err) {
      console.error("Error during video assembly:", err);
    }
  };

  return (
    <div className="download-container">
      <button
        onClick={handleDownload}
        disabled={!enhancedVideo || isAssembling || frames.length === 0}
      >
        {isAssembling ? "Assembling Video..." : "Download Video"}
      </button>
      {videoURL && (
        <a href={videoURL} download={filename}>
          Download Enhanced Video
        </a>
      )}
      {error && <p className="error-message">{error}</p>}
      {!enhancedVideo && <p className="info-message">Enhance video to enable download.</p>}
    </div>
  );
};
