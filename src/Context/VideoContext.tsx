import React, { createContext, useContext, useState, ReactNode } from "react";

interface VideoContextType {
  originalVideo: string | undefined;
  enhancedVideo: string | undefined;
  resolution: string | undefined;
  setOriginalVideo: (url: string) => void;
  setEnhancedVideo: (url: string) => void;
  setResolution: (res: string) => void;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [originalVideo, setOriginalVideoState] = useState<string | undefined>(
    undefined
  );
  const [enhancedVideo, setEnhancedVideoState] = useState<string | undefined>(
    undefined
  );
  const [resolution, setResolutionState] = useState<string | undefined>(
    undefined
  );

  const setOriginalVideo = (url: string) => {
    setOriginalVideoState(url);
  };

  const setEnhancedVideo = (url: string) => {
    setEnhancedVideoState(url);
  };

  const setResolution = (res: string) => {
    setResolutionState(res);
  };

  return (
    <VideoContext.Provider
      value={{
        originalVideo,
        enhancedVideo,
        resolution,
        setOriginalVideo,
        setEnhancedVideo,
        setResolution,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  const context = useContext(VideoContext);
  if (!context) {
    throw new Error("useVideoContext must be used within a VideoProvider");
  }
  return context;
};
