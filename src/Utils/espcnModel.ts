import * as tf from '@tensorflow/tfjs';

let model: tf.GraphModel | null = null;

export const loadESPCNModel = async (): Promise<tf.GraphModel> => {
  if (!model) {
    model = await tf.loadGraphModel('/model/espcn/model.json');
    console.log('ESPCN model loaded');
  }
  return model;
};
