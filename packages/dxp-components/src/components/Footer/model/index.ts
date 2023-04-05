import { Model } from '@stackbit/types';

const FooterModel: Model = {
  name: 'Footer',
  type: 'object',
  label: 'Footer',
  fields: [
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
