import { omit } from 'lodash';
import { withPrependChild } from '@bodiless/core';
import {
  addProps,
  as,
  flowHoc,
  on,
  P
} from '@bodiless/fclasses';
import { asMenuToken, MenuTitleClean, vitalMenuBase } from '@bodiless/vital-navigation';
import { lactaidTypography } from '../../../Typography';
import { lactaidSpacing } from '../../../Spacing';
import { lactaidTextDecoration } from '../../../TextDecoration';
import { lactaidFontSize } from '../../../FontSize';
import { lactaidColor } from '../../../Color';
import { SearchIcon } from '../../../Search';

const TopNav = asMenuToken(omit(vitalMenuBase.TopNav, 'Theme'), {
  Theme: {
    Title: as(lactaidTypography.Link, lactaidTextDecoration.Uppercase),
  },
  Spacing: {
    Title: 'py-14',
  },
});

const UtilityMenu = asMenuToken({
  ...vitalMenuBase.Utility,
  Layout: {
    Wrapper: 'hidden lg:flex justify-end',
  },
  Components: {
    Title: on(MenuTitleClean)(
      lactaidColor.TextPrimaryBrand,
      lactaidFontSize.SM,
      lactaidTextDecoration.Uppercase,
      lactaidTextDecoration.Bold,
      'border-l border-primary-divider font-gotham',
    ),
  },
  Content: {
    Wrapper: withPrependChild(
      flowHoc(
        withPrependChild(SearchIcon, 'SearchIcon'),
        as(
          lactaidTypography.Link,
          lactaidTextDecoration.Uppercase,
          'flex items-center gap-2',
        ),
        addProps({
          children: 'Search',
        }),
      )(P),
      'SearchWrapper',
    ),
  },
  Spacing: {
    Wrapper: 'py-4',
    Title: 'ml-3 pl-3',
  },
  Theme: {
    Wrapper: lactaidSpacing.WithSiteMargin,
  },
});

export default {
  TopNav,
  UtilityMenu,
};
