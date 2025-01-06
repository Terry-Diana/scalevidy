import React from "react";
import { useVideoContext } from "../Context/VideoContext";
import "../Styles/Upload.css";

export const Upload: React.FC = () => {
  const { setOriginalVideoUrl, setEnhancedVideoUrl, resolution } =
    useVideoContext();

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setOriginalVideoUrl(videoUrl);

      if (resolution) {
        setTimeout(() => {
          const enhancedVideoUrl = `${videoUrl}#enhanced-${resolution}`;
          setEnhancedVideoUrl(enhancedVideoUrl);
        }, 3000);
      }
    }
  };

  return (
    <div className="upload-container">
      <h2>Upload a Video</h2>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
    </div>
  );
};
