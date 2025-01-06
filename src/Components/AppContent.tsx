import React from "react";
import { Upload } from "./Upload";
import { ResolutionPicker } from "./ResolutionPicker";
import { Preview } from "./Preview";
import { DownloadButton } from "./DownloadButton";
import { useVideoContext } from "../Context/VideoContext";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const AppContent: React.FC = () => {
  const { frames, fps, filename, enhancedVideoUrl } = useVideoContext();

  return (
    <div className="App">
      <Header />
      <main>
        <Upload />
        <ResolutionPicker />
        <Preview />
        <DownloadButton
          frames={frames}
          fps={fps}
          filename={filename}
          enhancedVideo={enhancedVideoUrl}
        />
      </main>
      <Footer />
    </div>
  );
};
