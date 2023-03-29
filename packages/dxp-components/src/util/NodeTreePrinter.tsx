import React, { FC } from 'react';
import { useNode } from '@bodiless/core';
import { observer } from 'mobx-react';
import { withSbContent } from './withSbContent';

const NodeTreePrinter$: FC<any> = props => {
  const { node } = useNode();
  const { keys } = node;
  const elems = keys.map(k => (
    <pre key={k}>
      {node.peer(k).path.join('$')}
      :
      {JSON.stringify(node.peer(k).data)}
    </pre>
  ));
  return (
    <>
      {node.path.join('$')}
      :
      {JSON.stringify(node.data)}
      {elems}
    </>
  );
};

const NodeTreePrinter = observer(NodeTreePrinter$);

export const tf = (d: string) => ({
  transformed: `Transformed data is "${d}"`,
});

export const withSbContentExample = withSbContent(tf);
export default NodeTreePrinter;
