import {
  MenuTitleClean, asMenuToken, vitalMenu as vitalMenuBase
} from '@bodiless/vital-navigation';
import type { ListData } from '@bodiless/components';
import {
  as, flowHoc, on,
} from '@bodiless/fclasses';
import {useNode, withDefaultContent } from '@bodiless/core';
import { withMenuDesign } from '@bodiless/navigation';
import { ChameleonData } from '@bodiless/components/lib/Chameleon/types';
import { dxpSubMenu } from '../../SubMenu';
import dxpMenuTitle from '../../MenuTitle/tokens/dxpMenuTitle';
import {
  withSbContent, withSbFieldPath, withSbListItemFieldPath,
} from '../../../util';

type StackbitMenuTitleData = {
  url: string,
  text: string,
  type: string,
};

type StackbitSubMenuData = {
  type: string,
  title: string,
} & StackbitMenuData;

type StackbitMenuItemData = StackbitMenuTitleData|StackbitSubMenuData;

type StackbitMenuData = {
  menuItems: StackbitMenuItemData[],
};

// @todo - transform content gets
const transformContent = (stackbitContent: StackbitMenuData) => ({
  items: (stackbitContent.menuItems || []).map((_, index) => `item-${index}`)
});

const isMenuTitle = (item: StackbitMenuItemData): item is StackbitMenuTitleData => item.type === 'MenuTitle';

const useMenuItemContent = () => {
  const { node } = useNode<ListData>();
  const { data: stackbitData } = node.child<StackbitMenuData>('index');
  // @rodo Seprate this into different methods rather than repeating ternary. Use a type guard.
  const content = (stackbitData.menuItems || []).reduce(
    (acc, next, index) => (isMenuTitle(next)
      ? {
        ...acc,
        [`item-${index}$index`]: next,
        [`item-${index}$cham-sublist`]: { component: null },
      } : {
        ...acc,
        // When the item is a submenu, the title data is in the title field.
        // Otherwise the item itself is the title data.
        [`item-${index}$index`]: next.title,
        [`item-${index}$cham-sublist`]: { component: 'List' },
        [`item-${index}$sublist$index`]: next,
      }),
    {},
  );
  return content;
};

const useTitleFieldPath = () => {
  const { node } = useNode();
  const child = node.child<ChameleonData>('cham-sublist');
  if (child.data?.component === 'List') return 'title';
  return null;
};

const WithStackbitContent = asMenuToken({
  Content: {
    _: flowHoc(
      withSbContent(transformContent),
      withDefaultContent(useMenuItemContent),
    ),
    Item: withSbListItemFieldPath,
    Title: withSbFieldPath(useTitleFieldPath),
    Wrapper: withSbFieldPath('menuItems'),
    Nav: withSbFieldPath(),
  },
});

const Footer = asMenuToken({
  ...vitalMenuBase.Footer,
  Components: {
    ...vitalMenuBase.Footer.Components,
    Title: on(MenuTitleClean)(dxpMenuTitle.Default),
    _: withMenuDesign('List')(as(dxpSubMenu.Footer)),
  },
  Compose: {
    ...vitalMenuBase.Footer.Compose,
    WithStackbitContent,
  },
});

export default {
  ...vitalMenuBase,
  Footer,
};
