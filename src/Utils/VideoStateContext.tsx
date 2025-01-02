import React, { createContext, useState, useContext } from "react";

type VideoStateType = {
  frames: HTMLCanvasElement[];
  setFrames: React.Dispatch<React.SetStateAction<HTMLCanvasElement[]>>;
  fps: number;
  setFps: React.Dispatch<React.SetStateAction<number>>;
  filename: string;
  setFilename: React.Dispatch<React.SetStateAction<string>>;
};

const VideoStateContext = createContext<VideoStateType | undefined>(undefined);

export const VideoStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [frames, setFrames] = useState<HTMLCanvasElement[]>([]);
  const [fps, setFps] = useState(30);
  const [filename, setFilename] = useState("enhanced-video.mp4");

  return (
    <VideoStateContext.Provider value={{ frames, setFrames, fps, setFps, filename, setFilename }}>
      {children}
    </VideoStateContext.Provider>
  );
};

export const useVideoState = () => {
  const context = useContext(VideoStateContext);
  if (!context) {
    throw new Error("useVideoState must be used within a VideoStateProvider");
  }
  return context;
};

export { VideoStateContext };