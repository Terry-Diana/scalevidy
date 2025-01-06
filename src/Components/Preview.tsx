import React, { useEffect, useRef } from "react";
import { useVideoContext } from "../Context/VideoContext";
import "../Styles/Preview.css";

export const Preview: React.FC = () => {
  const { originalVideoUrl, enhancedVideoUrl } = useVideoContext();

  const enhancedVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (enhancedVideoRef.current) {
      const video = enhancedVideoRef.current;
      video.currentTime = 0;

      const handleTimeUpdate = () => {
        if (video.currentTime >= 15) {
          video.pause();
        }
      };

      video.addEventListener("timeupdate", handleTimeUpdate);
      return () => video.removeEventListener("timeupdate", handleTimeUpdate);
    }
  }, [enhancedVideoUrl]);

  return (
    <div className="preview-container">
      <h2>Preview</h2>
      <div className="video-players">
        {/* Original Video Section */}
        <div className="video-wrapper">
          <h3>Original Video</h3>
          {originalVideoUrl ? (
            <video controls src={originalVideoUrl} className="original-video" />
          ) : (
            <p>No original video available</p>
          )}
        </div>

        {/* Enhanced Video Section */}
        <div className="video-wrapper">
          <h3>Enhanced Video (15-Second Preview)</h3>
          {enhancedVideoUrl ? (
            <video
              controls
              src={enhancedVideoUrl}
              ref={enhancedVideoRef}
              className="enhanced-video"
            />
          ) : (
            <p>No enhanced video available</p>
          )}
        </div>
      </div>
    </div>
  );
};
