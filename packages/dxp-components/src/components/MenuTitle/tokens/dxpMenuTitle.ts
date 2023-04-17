// @ts-nocheck
import { asMenuTitleToken, vitalMenuTitle } from '@bodiless/vital-navigation';
import { withDefaultContent, useNode, withNode } from '@bodiless/core';
import { HOC, as, on } from '@bodiless/fclasses';
import { EditorPlainClean } from '@bodiless/vital-editors';
import { useSbContentFromParent } from '../../../util';
import { dxpEditorPlain } from '../../EditorPlain';

const useSbContent = () => {
  const { node } = useNode();
  // Note, the 'title' nodeKey is assigned in MenuTitleClean (not in a token)
  // so we have to grab content from the current index (not the parent index)
  // and pass it down 2 levels.  This is a problem in bodiless-navigation and
  // should be fixed there (it is due to the fact that breadcrumbs and menu
  // items need to share the same node key).
  const { data, path } = node.child('index');
  const linkUrl = data.link || '';
  // console.log('index', path.join('$'), JSON.stringify(data));
  return {
    title$text$index: data.text,
    // Turn link on/off based on content in "link" field.
    'title$link-toggle': linkUrl.trim().length > 0 ? { component: 'Link' } : { component: null },
    title$link: {
      href: data.link,
    },
  };
};

const withNodeLogger: HOC = C => p => {
  const { node } = useNode();
  const { keys } = node;
  const { data: textData } = node.child('text$index');
  // console.log('node text index', textData);
  // keys.forEach(
  //   key => console.log('key', key, JSON.stringify(node.peer(key)))
  // );
  return null;
};

const Default = asMenuTitleToken({
  ...vitalMenuTitle.Default,
  Editors: {
    // Title: as(withNodeLogger, withNode),
    Title: on(EditorPlainClean)(dxpEditorPlain.Default),
  },
  Content: {
    _: withDefaultContent(useSbContent),
  },
});

export default {
  ...vitalMenuTitle,
  Default,
};
