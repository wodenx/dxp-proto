import {
  vitalHeaderBase,
  asHeaderToken,
} from '@bodiless/vital-layout';
import {
  addProps,
  on,
  Div,
  replaceWith,
  startWith,
  flowHoc,
  as
} from '@bodiless/fclasses';
import {
  SearchBoxClean, SearchMenuClean, SearchTogglerClean, vitalSearchMenu
} from '@bodiless/vital-search';
import { withChild } from '@bodiless/core';
import { MenuClean } from '@bodiless/vital-navigation';
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
    SearchToggler: on(SearchTogglerClean)(listerineSearch.SearchToggler),
    DesktopSearch: on(SearchBoxClean)(listerineSearch.DesktopSearch),
    MobileSearch: on(SearchMenuClean)(vitalSearchMenu.Mobile),
    WhereToBuy: listerineButton.WhereToBuy,
    OuterUtilityMenu: flowHoc(
      startWith(MenuClean),
      as(listerineMenu.UtilityMenu),
    ),
    OuterUtilityMenuWrapper: replaceWith(Div),
    // UtilityMenu: listerineMenu.UtilityMenu,
    Menu: listerineMenu.TopNav,
  },
  Content: {
    MenuToggler: withChild(MenuIcon),
  },
  Theme: {
    ...vitalHeaderBase.Default.Theme,
    Wrapper: listerineColor.BgPrimaryBrand,
    OuterUtilityMenuWrapper: listerineColor.BgSecondaryUtility,
  },
});

export default { Default };
