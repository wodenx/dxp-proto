import { Model } from '@stackbit/types';

const EditorPlainModel: Model = {
  name: 'EditorPlain',
  type: 'object',
  label: 'Plain Text',
  thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
  fields: [
    {
      // Matches the name of the key in the bodiless data.
      name: 'text',
      type: 'string',
      label: 'Text',
      default: 'Plain text...',
    },
  ],
};

export default EditorPlainModel;
