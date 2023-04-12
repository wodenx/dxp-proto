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
      type: 'text',
      default: 'Default copyright text...',
    },
    {
      name: 'disclaimer',
      label: 'Disclaimer',
      type: 'text',
      default: 'Default disclaimer text...',
    },
  ],
};

export default FooterModel;
