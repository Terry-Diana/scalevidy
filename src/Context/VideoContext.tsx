import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface VideoContextType {
  originalVideoUrl: string | undefined;
  setOriginalVideoUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
  enhancedVideoUrl: string | undefined;
  setEnhancedVideoUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
  resolution: string | undefined;
  setResolution: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [originalVideoUrl, setOriginalVideoUrl] = useState<string | undefined>(undefined);
  const [enhancedVideoUrl, setEnhancedVideoUrl] = useState<string | undefined>(undefined);
  const [resolution, setResolution] = useState<string | undefined>(undefined);

  // Update the enhanced video URL when resolution changes
  useEffect(() => {
    if (originalVideoUrl && resolution) {
      // Simulate enhanced video creation for the selected resolution
      const newEnhancedVideoUrl = `${originalVideoUrl}#enhanced-${resolution}`;
      setEnhancedVideoUrl(newEnhancedVideoUrl);
    }
  }, [originalVideoUrl, resolution]);

  return (
    <VideoContext.Provider
      value={{
        originalVideoUrl,
        setOriginalVideoUrl,
        enhancedVideoUrl,
        setEnhancedVideoUrl,
        resolution,
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
