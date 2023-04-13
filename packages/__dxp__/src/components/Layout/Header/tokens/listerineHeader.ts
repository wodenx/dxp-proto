import {
  vitalHeaderBase,
  asHeaderToken,
  LogoClean,
} from '@bodiless/vital-layout';
import { withChild } from '@bodiless/core';
import {
  addProps,
  Div,
  on,
} from '@bodiless/fclasses';
import { SearchBoxClean, SearchTogglerClean } from '@bodiless/vital-search';
import { ButtonClean } from '@bodiless/vital-buttons';
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
    Logo: on(LogoClean)(listerineLogo.Default),
    SearchToggler: on(SearchTogglerClean)(listerineSearch.SearchToggler),
    DesktopSearch: on(SearchBoxClean)(listerineSearch.DesktopSearch),
    WhereToBuy: on(ButtonClean)(listerineButton.WhereToBuy),
    UtilityMenu: on(MenuClean)(listerineMenu.UtilityMenu),
    UtilityMenuWrapper: on(Div)(),
    MenuToggler: withChild(MenuIcon),
    Menu: on(MenuClean)(listerineMenu.TopNav),
  },
  Theme: {
    ...vitalHeaderBase.Default.Theme,
    Wrapper: listerineColor.BgSecondaryFooter,
    UtilityMenuWrapper: listerineColor.BgSecondaryFooterSignUp,
  },
});

export default { Default };
