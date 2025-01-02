export const extractFrames = (videoFile: File): Promise<HTMLImageElement[]> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.src = URL.createObjectURL(videoFile);
      video.muted = true;
      video.play();
  
      const frames: HTMLImageElement[] = [];
      video.onloadeddata = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d')!;
        video.pause();
  
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
  
        const captureFrame = () => {
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
  
          const frame = new Image();
          frame.src = canvas.toDataURL('image/png');
          frames.push(frame);
  
          if (video.currentTime < video.duration) {
            video.currentTime += 0.03; 
            video.play();
          } else {
            resolve(frames);
          }
        };
  
        video.ontimeupdate = captureFrame;
      };
  
      video.onerror = (e) => reject(e);
    });
  };
  