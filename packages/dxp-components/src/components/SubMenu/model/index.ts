import { Model } from '@stackbit/types';

const SubMenu: Model = {
  name: 'SubMenu',
  type: 'object',
  label: 'Sub Menu',
  fields: [
    {
      name: 'title', label: 'Sub Menu Title', type: 'model', default: 'Sub Menu Title', required: true, models: ['MenuTitle']
    },
    {
      type: 'list',
      name: 'menuItems',
      label: 'Sub Menu Items',
      items: { type: 'model', models: ['MenuTitle'] },
      default: [
        { $$type: 'MenuTitle', label: 'Home', url: '/' },
      ]
    }
  ]
};

export default SubMenu;
