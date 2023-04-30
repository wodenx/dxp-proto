import type { Model, DataModel, PageModel } from '@stackbit/types';
import { addProps } from '@bodiless/fclasses';
import { useNode } from '@bodiless/core';
import { useListContext } from '@bodiless/components';

const isDataModel = (model: Model): model is DataModel => model.type === 'data';
const isPageModel = (model: Model): model is PageModel => model.type === 'page';

const useSbObjectId = (model: Model) => () => {
  const { node } = useNode();

  if (isDataModel(model)) {
    const { filePath } = model;
    // @todo Deal with tokens in data models
    if (filePath && typeof filePath === 'string' && filePath.indexOf('{') < 0) {
      return { 'data-sb-object-id': filePath };
    }
  } else if (isPageModel(model)) {
    const { pagePath } = node;
    return { 'data-sb-object-id': `src/data/pages/${pagePath}` };
  }
  // eslint-disable-next-line no-console
  console.warn('Could not find object id for model', model);
  return {};
};

const withSbObjectId = (model: Model) => addProps(useSbObjectId(model));

type UseSbFieldPath<P = any> = (props: P) => string|null;

const useSbFieldPath = (path?: string|UseSbFieldPath) => (props: any) => {
  const { node } = useNode();
  const finalPath = typeof path === 'function' ? path(props) : path;
  if (finalPath === null) return {};
  return {
    'data-sb-field-path': `.${finalPath || node.path[node.path.length-1]}`,
  };
};

const withSbFieldPath = (path?: string|UseSbFieldPath) => addProps(useSbFieldPath(path));

const useListIndexPath = () => {
  const { currentItem, items } = useListContext();
  const index = items?.findIndex(item => item === currentItem);
  return `[${index}]`;
};

const withSbListItemFieldPath = withSbFieldPath(useListIndexPath);

export {
  useSbObjectId, withSbObjectId, withSbFieldPath, useSbFieldPath, withSbListItemFieldPath,
};
