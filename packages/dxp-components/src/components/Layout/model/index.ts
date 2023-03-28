import { Model } from '@stackbit/types';

const LayoutModel: Model = {
  name: 'Layout',
  type: 'data',
  label: 'Page Layout',
  filePath: 'src/data/site/layout.json',
  fields: [
    {
      name: 'footer',
      label: 'Footer',
      type: 'model',
      models: ['Footer'],
    },
  ],
};

export default LayoutModel;
