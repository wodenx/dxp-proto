import { Model } from '@stackbit/types';

const Curator: Model = {
  name: 'Curator',
  type: 'object',
  label: 'Curator Section',
  labelField: 'Curator Section',
  fields: [
    {
      name: 'containerId',
      label: 'Container ID',
      type: 'string',
    },
    {
      name: 'feedId',
      label: 'Feed ID',
      type: 'string',
    },
  ],
};

export default Curator;
