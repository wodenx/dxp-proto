import { Model } from '@stackbit/types';

const LayoutModel: Model = {
  name: 'Layout',
  type: 'data',
  label: 'Page Layout',
  singleInstance: true,
  filePath: 'src/data/site/layout.json',
  fields: [
    {
      name: 'footer',
      label: 'Footer',
      type: 'model',
      models: ['Footer'],
      default: {
        $$type: 'Footer',
        copyright: 'Foo bar baz',
      }
    },
  ],
};

export default LayoutModel;
