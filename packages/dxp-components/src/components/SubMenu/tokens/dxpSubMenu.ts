import {
  MenuTitleClean, asSubMenuToken, vitalSubMenu
} from '@bodiless/vital-navigation';
import type { ListData } from '@bodiless/components';
import {
  flowHoc, on,
} from '@bodiless/fclasses';
import { useNode, withDefaultContent, withNode } from '@bodiless/core';
import dxpMenuTitle from '../../MenuTitle/tokens/dxpMenuTitle';
import { withSbFieldPath, withSbListItemFieldPath } from '../../../util';

type StackbitLinkData = {
  url: string,
};

type StackbitMenuData = {
  menuItems: StackbitLinkData[]
};

const useMenuItemContent = () => {
  const { node } = useNode<ListData>();
  // THe submenu items are in the sublist index (the main index hold the title)
  const { data: stackbitData } = node.child('sublist').child<StackbitMenuData>('index');
  const content = stackbitData.menuItems.reduce(
    (acc, next, index) => ({
      ...acc,
      [`sublist$item-${index}$index`]: next,
      // [`item-${index}$sublist$default$index`]: next,
    }),
    // We create the submenu items array here.
    {
      sublist: {
        items: stackbitData.menuItems.map((_, index) => `item-${index}`)
      },
    },
  );
  return content;
};

const WithStackbitContent = asSubMenuToken({
  Content: {
    _: flowHoc(
      withDefaultContent(useMenuItemContent),
      withNode,
    ),
    Item: withSbListItemFieldPath,
    Wrapper: withSbFieldPath('menuItems'),
  },
});

const Footer = asSubMenuToken({
  ...vitalSubMenu.Footer,
  Components: {
    ...vitalSubMenu.Footer.Components,
    Title: on(MenuTitleClean)(dxpMenuTitle.Default),
  },
  Compose: {
    ...vitalSubMenu.Footer.Compose,
    WithStackbitContent,
  }
});

export default {
  ...vitalSubMenu,
  Footer,
};
