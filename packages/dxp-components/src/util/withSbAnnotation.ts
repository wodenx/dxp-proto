import type { Model, DataModel, PageModel } from '@stackbit/types';
import { addProps } from '@bodiless/fclasses';
import { useNode } from '@bodiless/core';

const isDataModel = (model: Model): model is DataModel => model.type === 'data';
const isPageModel = (model: Model): model is PageModel => model.type === 'page';

const useSbObjectId = (model: Model) => () => {
  const { node } = useNode();

  if (isDataModel(model)) {
    const { filePath } = model;
    // @todo Deal with tokens in data models
    if (filePath && filePath.indexOf('{') < 0) {
      return { 'data-sb-object-id': filePath };
    }
  } else if (isPageModel(model)) {
    const { pagePath } = node;
    return { 'data-sb-object-id': `src/data/pages/${pagePath}` };
  }
  console.warn('Could not find object id for model', model);
  return {};
};

const withSbObjectId = (model: Model) => addProps(useSbObjectId(model));

const withSbFieldPath = (path: string) => addProps({ 'data-sb-field-path': path });

export { withSbObjectId, withSbFieldPath, useSbObjectId };
