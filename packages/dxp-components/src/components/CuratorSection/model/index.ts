import { Model } from '@stackbit/types';

const Curator: Model = {
  name: 'Curator',
  type: 'object',
  label: 'Curator',
  fields: [
    {
      name: 'feedID',
      label: 'Feed ID',
      type: 'text',
    },
    {
      name: 'containerID',
      label: 'Container ID',
      type: 'text',
    },
  ],
};

export default Curator;
