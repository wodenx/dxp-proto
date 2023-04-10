import React, { FC } from 'react';
import {
  A,
  Div,
  Fragment,
  Header,
  designable
} from '@bodiless/fclasses';
import { ButtonClean } from '@bodiless/vital-buttons';
import { BurgerMenuClean, MenuClean } from '@bodiless/vital-navigation';
import { SearchTogglerClean, SearchMenuClean } from '@bodiless/vital-search';
import type { HeaderComponents, HeaderProps } from '@bodiless/vital-layout';
import { LogoClean } from '@bodiless/vital-layout';

const headerComponents: HeaderComponents = {
  Wrapper: Header,
  Container: Div,
  MenuContainer: Div,
  MenuTogglerWrapper: Div,
  MenuToggler: A,
  MenuWrapper: Fragment,
  Menu: MenuClean,
  BurgerMenuWrapper: Fragment,
  BurgerMenu: BurgerMenuClean,
  Logo: LogoClean,
  ActionMenuContainer: Div,
  UtilityMenuWrapper: Fragment,
  UtilityMenu: MenuClean,
  DesktopSearch: SearchMenuClean,
  MobileSearch: SearchMenuClean,
  SearchToggler: SearchTogglerClean,
  LanguageSelectorWrapper: Fragment,
  LanguageSelector: Fragment,
  WhereToBuyWrapper: Fragment,
  WhereToBuy: ButtonClean,
};

const HeaderCleanBase: FC<HeaderProps> = ({ components: C, ...rest }) => (
  <C.Wrapper {...rest}>
    <C.UtilityMenuWrapper>
      <C.UtilityMenu />
    </C.UtilityMenuWrapper>
    <C.Container>
      <C.MenuTogglerWrapper>
        <C.MenuToggler />
      </C.MenuTogglerWrapper>
      <C.Logo />
      <C.SearchToggler />
      <C.MenuContainer>
        <C.MenuWrapper>
          <C.Menu />
        </C.MenuWrapper>
        <C.ActionMenuContainer>
          <C.DesktopSearch />
          <C.LanguageSelectorWrapper>
            <C.LanguageSelector />
          </C.LanguageSelectorWrapper>
          <C.WhereToBuyWrapper>
            <C.WhereToBuy />
          </C.WhereToBuyWrapper>
        </C.ActionMenuContainer>
      </C.MenuContainer>
      <C.BurgerMenuWrapper>
        <C.BurgerMenu />
      </C.BurgerMenuWrapper>
    </C.Container>
    <C.MobileSearch />
  </C.Wrapper>
);

/**
 * A clean header to be used in pages layouts following vital design.
 *
 * @category Component
 *
 */
const HeaderClean = designable(headerComponents, 'Header')(HeaderCleanBase);

export default HeaderClean;
