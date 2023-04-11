import { omit } from 'lodash';
import { asMenuToken, vitalMenuBase } from '@bodiless/vital-navigation';
import { as, removeClasses } from '@bodiless/fclasses';
import { listerineTypography } from '../../../Typography';
import { listerineSpacing } from '../../../Spacing';

const TopNav = asMenuToken(omit(vitalMenuBase.TopNav, 'Theme'), {
  Theme: {
    Title: as(listerineTypography.WhiteLink),
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
    Title: listerineTypography.WhiteLink,
  },
  Behavior: {
    Title: removeClasses('uppercase'),
  },
});

export default {
  TopNav,
  UtilityMenu,
};
