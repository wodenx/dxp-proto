import React, { FC } from 'react';
import { useNode } from '@bodiless/core';
import { observer } from 'mobx-react';
import { HOC } from '@bodiless/fclasses';
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

export const withNodeTreeLogger = (match: RegExp = /.*/): HOC => Component => props => {
  const { node } = useNode();
  const { keys } = node;
  const elems = keys.filter(k => match.test(k)).map(k => {
    let json: string;
    try {
      json = JSON.stringify(node.peer(k).data);
    } catch (e) {
      json = '*** Error ***';
    }
    return `${node.peer(k).path.join('$')}: ${json}`;
  });
  // eslint-disable-next-line no-console
  console.log('Node tree at', node.path.join('$'));
  // eslint-disable-next-line no-console
  console.log(elems);
  return <Component {...props} />;
};

export const withSbContentExample = withSbContent(tf);
export default NodeTreePrinter;
