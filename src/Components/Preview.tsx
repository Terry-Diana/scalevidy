import React from "react";
import { useVideoContext } from "../Context/VideoContext";
import "../Styles/Preview.css";

export const Preview: React.FC = () => {
  const { originalVideo, enhancedVideo } = useVideoContext();

  return (
    <div className="preview-container">
      <h2>Preview</h2>
      <div className="video-players">
        <div className="video-wrapper">
          <h3>Original Video</h3>
          <video
            controls
            src={originalVideo || undefined}
            className="original-video"
          />
        </div>
        {enhancedVideo && (
          <div className="video-wrapper">
            <h3>15-Second Preview</h3>
            <video
              controls
              src={enhancedVideo}
              className="enhanced-video"
              onLoadedMetadata={(e) => {
                const video = e.currentTarget;
                video.currentTime = 0;
                video.addEventListener("timeupdate", () => {
                  if (video.currentTime >= 15) {
                    video.pause();
                  }
                });
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
