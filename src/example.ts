import mongoose, { Document, Model, Schema } from 'mongoose';

type ExampleDocument = {
  name: string;
} & Document<any>

const exampleSchema = new Schema<ExampleDocument>({
  name: 'dawd',
});

export const ExampleModel: Model<ExampleDocument> =  mongoose.model('Example', exampleSchema);

export const getExampleByName = async (name: string) => {
  const exampleDocument = await ExampleModel.findOne({ name }, 'name');
  if (!exampleDocument) throw new Error(`Example document not found for ${name}`);
  return exampleDocument;
};
