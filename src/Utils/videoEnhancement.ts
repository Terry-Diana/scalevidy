import * as tf from '@tensorflow/tfjs';
import { loadESPCNModel } from './espcnModel';

export const enhanceFrame = async (frame: HTMLImageElement): Promise<HTMLCanvasElement> => {
  const model = await loadESPCNModel();

  const inputTensor = tf.browser.fromPixels(frame).expandDims(0);

  const enhancedTensor = model.execute(inputTensor) as tf.Tensor;

  const squeezedTensor = enhancedTensor.squeeze();

  const shape = squeezedTensor.shape;

  let enhancedCanvas = document.createElement('canvas');
  if (shape.length === 2) {
    await tf.browser.toPixels(squeezedTensor as tf.Tensor2D, enhancedCanvas);
  } else if (shape.length === 3) {
    await tf.browser.toPixels(squeezedTensor as tf.Tensor3D, enhancedCanvas);
  } else {
    throw new Error(`Unexpected tensor shape: ${shape}`);
  }

  tf.dispose([inputTensor, enhancedTensor, squeezedTensor]);

  return enhancedCanvas;
};
