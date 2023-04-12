import { Model } from '@stackbit/types';

const MenuTitle: Model = {
  name: 'MenuTitle',
  type: 'object',
  label: 'Menu Item',
  fields: [
    {
      type: 'string', name: 'text', label: 'Label', default: 'Menu Item', required: true
    },
    {
      type: 'string', name: 'link', label: 'URL', default: '/', required: true
    }
  ]
};

export default MenuTitle;
