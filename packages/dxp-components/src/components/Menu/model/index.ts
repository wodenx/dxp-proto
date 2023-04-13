import { Model } from '@stackbit/types';

const SimpleMenu: Model = {
  name: 'SimpleMenu',
  type: 'object',
  label: 'Menu',
  fields: [
    {
      type: 'list',
      name: 'menuItems',
      label: 'Menu Items',
      items: { type: 'model', models: ['MenuTitle', 'SubMenu'], },
      default: [
        { $$type: 'MenuTitle' },
      ]
    }
  ]
};

export default SimpleMenu;
