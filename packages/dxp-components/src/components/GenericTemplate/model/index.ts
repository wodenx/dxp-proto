import { Model } from '@stackbit/types';

const GenericTemplateModel: Model = {
  name: 'GenericTemplate',
  type: 'page',
  label: 'Generic Page',
  urlPath: '/{slug}',
  filePath: 'src/data/pages/{slug}/index.json',
  hideContent: true,
  thumbnail:
    'https://assets.stackbit.com/components/models/thumbnails/default.png',
  fields: [
    // @todo Restore once Stackbit bug is fixed.
    // @see https://vendorstackbit.slack.com/archives/C04N8Q1GS6S/p1679058403031449
    {
      name: 'slug',
      type: 'slug',
      label: 'Slug',
      required: true,
    },
    {
      name: 'Title',
      type: 'string',
      required: true,
      default: 'Generic Page',
    },
    {
      // @todo This raises an error (invlid field name). Follow up with stackbit to see why
      // If it has to be this way, we may need to change the key that bodiless expects.
      name: '#template',
      type: 'string',
      const: '_default',
    },
    // Top content demonstrates the pattern of providing a switchable component.
    {
      name: 'top-content',
      label: 'Hero',
      type: 'model',
      models: ['EditorPlain'],
    },
    {
      name: 'main-content',
      label: 'Main Content',
      // @todo this should be replaced by a model like bottom content
      type: 'string',
      default: 'Default text',
    },
    // Bottom content demonstrates the pattern of transforming a field value
    {
      name: 'bottom-content',
      label: 'Bottom Content',
      type: 'string',
      default: 'Default bottom content',
    },
  ],
};

export default GenericTemplateModel;
