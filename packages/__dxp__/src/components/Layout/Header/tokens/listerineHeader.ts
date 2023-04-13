import {
  vitalHeaderBase,
  asHeaderToken,
} from '@bodiless/vital-layout';
import {
  addProps,
  on,
  Div,
  replaceWith
} from '@bodiless/fclasses';
import {
  SearchBoxClean, SearchMenuClean, vitalSearchMenu
} from '@bodiless/vital-search';
import { withChild } from '@bodiless/core';
import {
  listerineColor,
  listerineMenu,
  listerineButton,
  listerineSearch,
  listerineLogo,
} from '../../..';
import { MenuIcon } from '../../../Search';

const Default = asHeaderToken({
  ...vitalHeaderBase.Default,
  Behavior: {
    ...vitalHeaderBase.Default.Behavior,
    Wrapper: addProps({ 'shadowed-by': 'Listerine' }),
  },
  Components: {
    ...vitalHeaderBase.Default.Components,
    Logo: listerineLogo.Default,
    SearchToggler: listerineSearch.SearchToggler,
    DesktopSearch: on(SearchBoxClean)(listerineSearch.DesktopSearch),
    MobileSearch: on(SearchMenuClean)(vitalSearchMenu.Mobile),
    WhereToBuy: listerineButton.WhereToBuy,
    UtilityMenu: listerineMenu.UtilityMenu,
    UtilityMenuWrapper: replaceWith(Div),
    Menu: listerineMenu.TopNav,
  },
  Content: {
    MenuToggler: withChild(MenuIcon),
  },
  Theme: {
    ...vitalHeaderBase.Default.Theme,
    Wrapper: listerineColor.BgSecondaryFooter,
    UtilityMenuWrapper: listerineColor.BgSecondaryFooterSignUp,
  },
});

export default { Default };
