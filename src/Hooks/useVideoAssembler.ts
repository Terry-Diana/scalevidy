import { useState, useCallback } from 'react';
import { assembleFrames } from '../Utils/videoAssembler';

export const useVideoAssembler = () => {
  const [isAssembling, setIsAssembling] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const assembleVideo = useCallback(
    async (frames: HTMLCanvasElement[], fps: number, filename: string) => {
      setIsAssembling(true);
      setError(null);
      try {
        const videoBlob = await assembleFrames(frames, fps, filename);
        return videoBlob;
      } catch (err) {
        setError('Failed to assemble video.');
        console.error(err);
        return null;
      } finally {
        setIsAssembling(false);
      }
    },
    []
  );

  return { isAssembling, error, assembleVideo };
};
