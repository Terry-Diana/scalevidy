import React from "react";
import { Upload } from "./Upload";
import { ResolutionPicker } from "./ResolutionPicker";
import { Preview } from "./Preview";
import { DownloadButton } from "./DownloadButton";
import { useVideoContext } from "../Context/VideoContext";

export const AppContent: React.FC = () => {
  const { frames, fps, filename, enhancedVideoUrl } = useVideoContext();

  console.log("Enhanced Video in AppContent:", enhancedVideoUrl);

  return (
    <div className="App">
      <Upload />
      <ResolutionPicker />
      <Preview />
      <DownloadButton
        frames={frames}
        fps={fps}
        filename={filename}
        enhancedVideo={enhancedVideoUrl}
      />
    </div>
  );
};
