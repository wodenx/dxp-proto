import { withDefaultContent, withNode, useNode } from '@bodiless/core';
import { flowHoc } from '@bodiless/fclasses';
import identity from 'lodash/identity';

const useSbContentfromParent = (key?: string) => () => {
  const { node } = useNode<any>();
  // Use the current nodeKey as the key unless otherwise specified
  const finalKey = key || node.path[node.path.length-1];
  // @todo type the stackbit model data
  const parentIndex = node.peer<any>([...node.path.slice(0, -1), 'index']);
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
 * The key from the parent Stckbit content to use to provide data. Deraults to the
 * furrent nodeKey (`bar` in the above example).
 */
export const withSbContentFromParent = (key?: string) => flowHoc(
  withDefaultContent(useSbContentfromParent(key)),
  // Add the node here so that we can make default content relative
  // to the child ndde without repeating the nodeKeys.
  withNode,
);

/**
 * Type of a function used to transform content from Stackbit
 * into the shape expected by a Bodiless component.
 */
export type Transformer<D, E> = (d: D) => E;

const useSbContent = <D, E>(
  transformer: Transformer<D, E> = identity,
) => () => {
    const { node } = useNode();
    // @ts-ignore Bodiless improperly constrints node to be an object
    const indexNode = node.child<D>('index');
    const { data } = indexNode;
    return transformer(data);
  };

/**
 * Extracts Stackbit context from the current node's index using the provided
 * transformer function.  For example, if we have
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
 */
export const withSbContent = <D, E>(
  transformer?: Transformer<D, E>,
) => withDefaultContent({
    '': useSbContent(transformer),
  });
