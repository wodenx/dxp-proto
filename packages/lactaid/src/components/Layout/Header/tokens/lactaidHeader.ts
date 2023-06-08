import { vitalHeaderBase, asHeaderToken } from '@bodiless/vital-layout';
import {
  on,
  Div,
  replaceWith,
  startWith,
  flowHoc,
  as,
  addClasses,
} from '@bodiless/fclasses';
import { SearchTogglerClean } from '@bodiless/vital-search';
import { withChild } from '@bodiless/core';
import { MenuClean } from '@bodiless/vital-navigation';
import {
  lactaidColor,
  lactaidMenu,
  lactaidButton,
  lactaidSearch,
  lactaidLogo,
} from '../../..';
import MenuIcon from '../assets/Menu';

const Default = asHeaderToken({
  ...vitalHeaderBase.Default,
  Components: {
    ...vitalHeaderBase.Default.Components,
    Logo: lactaidLogo.Default,
    SearchToggler: on(SearchTogglerClean)(lactaidSearch.SearchToggler),
    WhereToBuy: lactaidButton.WhereToBuy,
    OuterUtilityMenu: flowHoc(
      startWith(MenuClean),
      as(lactaidMenu.UtilityMenu),
    ),
    OuterUtilityMenuWrapper: replaceWith(Div),
    Menu: lactaidMenu.TopNav,
  },
  Content: {
    MenuToggler: withChild(MenuIcon),
  },
  Spacing: {
    ActionMenuContainer: 'pl-3',
    Container: 'py-1 lg:py-0 mx-2.5 md:mx-8 lg:mx-36'
  },
  Theme: {
    ...vitalHeaderBase.Default.Theme,
    Wrapper: lactaidColor.BgWhite,
    WhereToBuy: 'hover:bg-interactive-primary-hover transition-colors duration-400',
    Container: addClasses('mx-5'),
    OuterUtilityMenuWrapper: lactaidColor.BgSecondaryBrand,
  },
  Layout: {
    ...vitalHeaderBase.Default.Layout,
    MenuContainer: 'hidden xl:flex justify-start items-center flex-grow',
  },
});

export default { Default };
