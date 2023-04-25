import { visit } from 'unist-util-visit';

/**
 * A plugin to transform superscript text in Markdown to HTML <sup> tags.
 *
 * @returns A remark plugin.
 */
export const superscriptPlugin = () => {
  /**
   * The visitor function for the plugin. Implements the logic for converting superscript patterns
   * into HTML sup tags and updating the AST accordingly.
   *
   * @param node - The current node being visited.
   * @param index - The index of the node in the parent's `children` array.
   * @param parent - The parent node of the current node.
   */
  const visitor = (node: any, index: any, parent: any) => {
    if (node.type === 'text' && parent && ['paragraph', 'link'].includes(parent.type)) {
      const pattern = /\^([^^]*)\^/g;
      let lastIndex = 0;
      let matchIndex = 0;
      const newChildren = [];

      let match = pattern.exec(node.value as string);
      while (match) {
        const matchedText = match[0];
        matchIndex = match.index;

        if (matchIndex > lastIndex) {
          const textNode = {
            type: 'text',
            value: (node.value as string).slice(lastIndex, matchIndex),
          };
          newChildren.push(textNode);
        }

        const supNode = {
          type: 'sup',
          children: [{ type: 'text', value: match[1] }],
          data: { hName: 'sup' },
        };
        newChildren.push(supNode);

        lastIndex = matchIndex + matchedText.length;
        match = pattern.exec(node.value as string);
      }

      if (lastIndex < (node.value as string).length) {
        const textNode = {
          type: 'text',
          value: (node.value as string).slice(lastIndex),
        };
        newChildren.push(textNode);
      }

      parent.children.splice(index, 1, ...newChildren);
    }
  };

  return (tree: any) => visit(tree, visitor);
};
