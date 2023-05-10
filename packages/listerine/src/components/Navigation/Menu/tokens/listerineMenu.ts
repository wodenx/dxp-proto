import { omit } from 'lodash';
import { MenuTitleClean, asMenuToken, vitalMenuBase } from '@bodiless/vital-navigation';
import {
  as, flowIf, on, withDesign
} from '@bodiless/fclasses';
import { asBreadcrumbs, useIsActiveTrail } from '@bodiless/navigation';
import { listerineFontSize } from '../../../FontSize';
import { listerineColor } from '../../../Color';
import { listerineSpacing } from '../../../Spacing';
import { listerineTypography } from '../../../Typography';

const TopNav = asMenuToken(omit(vitalMenuBase.TopNav, 'Theme'), {
  Theme: {
    Title: as(
      listerineTypography.WhiteLink,
      listerineTypography.WithTertiaryHover,
      'group-hover:shadow-inner-bottom-md',
    ),
    Item: as(
      asBreadcrumbs,
      withDesign({
        List: asMenuToken({
          Theme: {
            Wrapper: 'w-72',
            Title: as(
              listerineTypography.Body,
              listerineColor.BgTertiaryHover,
              flowIf(useIsActiveTrail)(
                as(listerineColor.BgTertiaryInteractive),
              ),
            ),
            Item: 'mx-0',
          },
          Spacing: {
            ...vitalMenuBase.TopNav.Spacing,
            Wrapper: 'py-0',
            Title: 'py-5',
          }
        }),
      }),
    ),
  },
  Spacing: {
    Title: 'py-9',
  },
});

const UtilityMenu = asMenuToken({
  ...vitalMenuBase.Utility,
  Layout: {
    Wrapper: 'hidden lg:flex justify-end',
  },
  Spacing: {
    Item: 'ml-10',
  },
  Theme: {
    Wrapper: as(listerineSpacing.WithSiteMargin, 'py-3.5'),
    Title: on(MenuTitleClean)(
      listerineFontSize.Base,
      'font-gotham text-white normal-case',
    ),
  },
});

export default {
  TopNav,
  UtilityMenu,
};
