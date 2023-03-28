import { Model } from '@stackbit/types';

const FooterModel: Model = {
  name: 'Footer',
  type: 'data',
  label: 'Footer',
  filePath: 'src/data/site/footer.json',
  fields: [
    {
      name: 'copyright',
      label: 'Copyright',
      type: 'text',
      default: 'Default copyright text...',
    },
  ],
};

export default FooterModel;
