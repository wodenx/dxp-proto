import { withDefaultContent, withNode, useNode } from '@bodiless/core';
import { flowHoc } from '@bodiless/fclasses';
import identity from 'lodash/identity';

const useSbContentfromParent = (
  key?: string,
  indexKey: string = 'index'
) => () => {
  const { node } = useNode<any>();
  // Use the current nodeKey as the key unless otherwise specified
  const finalKey = key || node.path[node.path.length-1];
  // @todo type the stackbit model data
  const parentIndex = node.peer<any>([...node.path.slice(0, -1), indexKey]);
  return {
    // Note we must access the data in a callback to ensure it properly observes the store.
    index: () => parentIndex.data[finalKey] || {},
  };
};

/**
 * Provides default Stackbit content in the current node's index by reading the
 * named key from the parent node's index.  For example, if we have
 * ```
 * Page$foo$index = {
 *   bar: barData,
 * }
 * ```
 * and the current node is `Page$foo$bar`, then
 * ```
 * withSbContentFromParent('bar') // Could just be withIndexFromParentIndexKey()
 * ```
 *  this will add default content like
 * ```
 *   'Page$foo$bar$index': barData,
 * ```
 *
 * @param key
 * The key from the parent Stackbit content to use to provide data. Defaults to the
 * current nodeKey (`bar` in the above example).
 *
 * @param indexKey
 * The nodeKey of the "index", which is the node containing the raw stackbit content.
 * Defaults to 'index'.
 */
export const withSbContentFromParent = (key?: string, indexKey = 'index') => flowHoc(
  withDefaultContent(useSbContentfromParent(key, indexKey)),
  // Add the node here so that we can make default content relative
  // to the child node without repeating the nodeKeys.
  withNode,
);

/**
 * Type of a function used to transform content from Stackbit
 * into the shape expected by a Bodiless component.
 */
export type Transformer<D, E> = (d: D) => E;

const useSbContent = <D, E>(
  transformer: Transformer<D, E> = identity,
  indexKey: string = 'index',
) => () => {
    const { node } = useNode();
    // @ts-ignore Bodiless improperly constrints node to be an object
    const indexNode = node.child<D>('index');
    const { data } = indexNode;
    return transformer(data);
  };

/**
 * Extracts and transforms raw Stackbit content from the current node's index
 * using the provided transformer function.  For example, if we have
 * ```
 *   'Page$foo$bar$index': barData,
 * ```
 * Then
 * ```
 * withSbContent(tf)
 * ```
 * will yield
 * ```
 * `Page$foo$bar`: tf(barData)
 * ```
 *
 * @param transformer
 * The function to use to transform the content.  If not provided, the content will
 * be transformed as-is.
 *
 * @param indexKey
 * The nodeKey of the "index", which is the node containing the raw stackbit content.
 * Defaults to 'index'.
 */
export const withSbContent = <D, E>(
  transformer?: Transformer<D, E>,
) => flowHoc(
    withDefaultContent({ '': useSbContent(transformer) }),
    withNode,
  );
