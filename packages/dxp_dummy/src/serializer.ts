/**
 * Copyright © 2020 Johnson & Johnson
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { jsx } from 'slate-hyperscript';
import { Text } from 'slate';
import type { Node as SlateNode } from 'slate';
import { JSDOM } from 'jsdom';

const { DOMParser } = new JSDOM().window;
const { document } = new JSDOM().window;
/**
 * leveraging https://github.com/ianstormtaylor/slate/issues/3457#issuecomment-577395255
 */
const wrapTopLevelInlineNodesInParagraphs = (fragment: SlateNode[]) => {
  let inlineNodes: SlateNode[] = [];
  const newFragments: SlateNode[] = [];

  const maybePushInlineNodeParagraph = () => {
    if (inlineNodes.length > 0) {
      newFragments.push(jsx('element', { type: 'paragraph' }, inlineNodes));
      inlineNodes = [];
    }
  };

  fragment.forEach(node => {
    if (Text.isText(node)) { // || (node as Element).type === 'Link') {
      inlineNodes.push(node);
    } else {
      maybePushInlineNodeParagraph();
      newFragments.push(node);
    }
  });
  maybePushInlineNodeParagraph();

  return newFragments;
};

type HTMLElementMatch = (element: HTMLElement) => boolean;
type HTMLElementMap = (element: HTMLElement) => object;
enum TagName {
  Element = 'element',
  Text = 'text',
  Fragment = 'fragment',
}

type Deserializer = {
  match: HTMLElementMatch,
  map: HTMLElementMap,
  tagName: TagName,
};

type DeserializeElementParams = {
  element: HTMLElement,
  deserializers: Deserializer[],
};
type DeserializeElement = (params: DeserializeElementParams) => SlateNode[];
type Deserializers = {
  [key: string]: Deserializer,
};

const NODE_TEXT_NODE = 3;
const NODE_ELEMENT_NODE = 1;
const DEFAULT_ELEMENTS = [
  'P',
  'BR',
];

// @ts-ignore todo: resolve types
const deserializeElement: DeserializeElement = ({
  element,
  deserializers,
}) => {
  if (element.nodeType === NODE_TEXT_NODE) return element.textContent;
  if (element.nodeType !== NODE_ELEMENT_NODE) return [];

  const children$ = Array.from(element.childNodes)
    .map((element$: ChildNode) => deserializeElement({
      element: element$ as HTMLElement,
      deserializers,
    }))
    .flat();

  // Ensure we don't pass an empty array of children. Slate elements must have
  // at least an empty text node.
  // See https://github.com/ianstormtaylor/slate/issues/3625#issuecomment-617541881
  const children = children$.length === 0 ? [{ text: '' }] : children$;

  if (element.nodeName === 'BODY') {
    return jsx(TagName.Fragment, {}, children);
  }

  const elementDeserializer = deserializers.find(
    deserializer$ => deserializer$.tagName === TagName.Element && deserializer$.match(element),
  );
  if (elementDeserializer) {
    const attrs = elementDeserializer.map(element);
    return jsx(TagName.Element, attrs, children);
  }

  const textDeserializer = deserializers.find(
    deserializer$ => deserializer$.tagName === TagName.Text && deserializer$.match(element),
  );
  if (textDeserializer) {
    return children.map(child => jsx(TagName.Text, textDeserializer.map(element), child));
  }

  if (DEFAULT_ELEMENTS.includes(element.nodeName)) {
    return jsx(TagName.Element, { type: 'paragraph' }, children);
  }

  return children;
};

const deserializeHtml = (
  html: string,
  deserializers: Deserializers,
  domParser?: DOMParser,
) => {
  const domParser$ = domParser || new DOMParser();
  const parsed = domParser$.parseFromString(html, 'text/html');
  const result = deserializeElement({
    element: parsed.body,
    deserializers: Object.values(deserializers),
  });
  const result$ = wrapTopLevelInlineNodesInParagraphs(result);
  return result$;
};

type CreateDeserializerSettings = {
  nodeName: string,
  tagName: TagName,
};

const createDeserializer = ({
  nodeName,
  tagName,
}: CreateDeserializerSettings) => ({
  match: (element: HTMLElement) => element.nodeName === nodeName,
  map: () => ({ type: nodeName }),
  tagName,
});

const truncateHtml = (content: string, maxLength = 255) => {
  const container = document.createElement('div');
  container.innerHTML = content;

  let limitReached = false;
  let counted = 0;

  const nodeHandler = (node: HTMLElement) => {
    if (limitReached) {
      node.remove();
      return;
    }

    const childNodes = Array.from(node.childNodes) as HTMLElement[];
    if (childNodes.length) {
      childNodes.forEach(childNode => nodeHandler(childNode));
    } else if (node.textContent) {
      counted += node.textContent?.length || 0;
      if (counted >= maxLength) {
        limitReached = true;
        if (counted > maxLength) {
          // eslint-disable-next-line no-param-reassign
          node.textContent = node.textContent.slice(0, -(counted - maxLength));
        }
      }
    }
  };

  nodeHandler(container);

  return container.innerHTML;
};

export {
  deserializeElement,
  deserializeHtml,
  createDeserializer,
  truncateHtml,
  TagName,
};

export type {
  HTMLElementMatch,
  HTMLElementMap,
  Deserializer,
};
