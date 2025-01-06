import React from "react";
import { Upload } from "./Upload";
import { ResolutionPicker } from "./ResolutionPicker";
import { Preview } from "./Preview";
import { DownloadButton } from "./DownloadButton";
import { useVideoState } from "../Utils/VideoStateContext";

export const AppContent: React.FC = () => {
  const { frames, fps, filename, enhancedVideo } = useVideoState();

  return (
    <div className="App">
      <Upload />
      <ResolutionPicker />
      <Preview />
      <DownloadButton
        frames={frames}
        fps={fps}
        filename={filename}
        enhancedVideo={enhancedVideo}
      />
    </div>
  );
};
