import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface VideoContextType {
  originalVideoUrl: string | undefined;
  setOriginalVideoUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
  enhancedVideoUrl: string | undefined;
  setEnhancedVideoUrl: React.Dispatch<React.SetStateAction<string | undefined>>;
  resolution: string | undefined;
  setResolution: React.Dispatch<React.SetStateAction<string | undefined>>;
  frames: HTMLCanvasElement[];
  setFrames: React.Dispatch<React.SetStateAction<HTMLCanvasElement[]>>;
  fps: number;
  setFps: React.Dispatch<React.SetStateAction<number>>;
  filename: string;
  setFilename: React.Dispatch<React.SetStateAction<string>>;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

export const VideoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [originalVideoUrl, setOriginalVideoUrl] = useState<string | undefined>(
    undefined
  );
  const [enhancedVideoUrl, setEnhancedVideoUrl] = useState<string | undefined>(
    undefined
  );
  const [resolution, setResolution] = useState<string | undefined>(undefined);
  const [frames, setFrames] = useState<HTMLCanvasElement[]>([]);
  const [fps, setFps] = useState<number>(30);
  const [filename, setFilename] = useState<string>("enhanced-video.mp4");

  useEffect(() => {
    if (originalVideoUrl && resolution) {
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
        frames,
        setFrames,
        fps,
        setFps,
        filename,
        setFilename,
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
