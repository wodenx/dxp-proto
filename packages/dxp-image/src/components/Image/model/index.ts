// eslint-disable-next-line import/no-extraneous-dependencies
import { Model } from '@stackbit/types';

const ImageModel: Model = {
  name: 'Image',
  type: 'object',
  label: 'Plain Image',
  thumbnail: 'https://assets.stackbit.com/components/models/thumbnails/default.png',
  fields: [
    {
      name: 'src',
      type: 'string',
      label: 'Image URL',
    },
    {
      name: 'alt',
      type: 'string',
      label: 'Image Alt Text',
    },
    {
      name: 'title',
      type: 'string',
      label: 'Image Title',
    },
  ],
};

export default ImageModel;
