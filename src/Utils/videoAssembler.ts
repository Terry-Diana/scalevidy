import { FFmpeg } from "@ffmpeg/ffmpeg";

const ffmpeg: any = new FFmpeg();

export const assembleFrames = async (
  frames: HTMLCanvasElement[],
  fps: number,
  outputFilename: string
): Promise<Blob> => {
  if (!ffmpeg.loaded) {
    await ffmpeg.load();
  }

  for (let i = 0; i < frames.length; i++) {
    const frameData = frames[i].toDataURL("image/png");
    const binaryFrame = Uint8Array.from(atob(frameData.split(",")[1]), (c) =>
      c.charCodeAt(0)
    );
    ffmpeg.FS("writeFile", `frame${i}.png`, binaryFrame);
  }

  const frameList = frames.map((_, i) => `file 'frame${i}.png'\n`).join("");
  ffmpeg.FS("writeFile", "frames.txt", new TextEncoder().encode(frameList));

  await ffmpeg.run(
    "-f",
    "concat",
    "-safe",
    "0",
    "-r",
    fps.toString(),
    "-i",
    "frames.txt",
    "-pix_fmt",
    "yuv420p",
    outputFilename
  );

  const videoData = ffmpeg.FS("readFile", outputFilename);

  frames.forEach((_, i) => ffmpeg.FS("unlink", `frame${i}.png`));
  ffmpeg.FS("unlink", "frames.txt");
  ffmpeg.FS("unlink", outputFilename);

  return new Blob([videoData.buffer], { type: "video/mp4" });
};
