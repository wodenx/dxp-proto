import { Model } from '@stackbit/types';

const Curator: Model = {
  name: 'Curator',
  type: 'object',
  label: 'Curator',
  fields: [
    {
      name: 'feedId',
      label: 'Feed ID',
      type: 'text',
    },
    {
      name: 'containerId',
      label: 'Container ID',
      type: 'text',
    },
  ],
};

export default Curator;
