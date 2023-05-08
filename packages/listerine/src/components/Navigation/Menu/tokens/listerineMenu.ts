import { omit } from 'lodash';
import { asMenuToken, vitalMenuBase } from '@bodiless/vital-navigation';
import { as, flowIf, withDesign } from '@bodiless/fclasses';
import { asBreadcrumbs, useIsActiveTrail } from '@bodiless/navigation';
import { vitalTextDecoration } from '@bodiless/vital-elements';
import { listerineColor } from '../../../Color';
import { listerineSpacing } from '../../../Spacing';
import { listerineTypography } from '../../../Typography';
import { listerineFontSize } from '../../../FontSize';

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
    Title: as(
      listerineFontSize.Base,
      listerineColor.TextWhite,
      vitalTextDecoration.Bold,
      'font-gotham'
    ),
  },
});

export default {
  TopNav,
  UtilityMenu,
};
