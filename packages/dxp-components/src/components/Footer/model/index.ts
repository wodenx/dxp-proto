import { Model } from '@stackbit/types';

const FooterModel: Model = {
  name: 'Footer',
  type: 'object',
  label: 'Footer',
  fields: [
    {
      name: 'footer-menu',
      label: 'Footer Menu',
      type: 'model',
      models: ['SimpleMenu'],
    },
    {
      name: 'copyright',
      label: 'Copyright',
      type: 'markdown',
      default: 'Default copyright text...',
    },
    {
      name: 'disclaimer',
      label: 'Disclaimer',
      type: 'markdown',
      default: 'Default disclaimer text...',
    },
  ],
};

export default FooterModel;
