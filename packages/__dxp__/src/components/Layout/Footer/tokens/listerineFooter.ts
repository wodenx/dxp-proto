// TODO This file should move to Listerine package..

import { vitalFooterBase, asFooterToken } from '@bodiless/vital-layout';
import { addProps } from '@bodiless/fclasses';
import { listerineColor } from '../../../Color';

const WithListerineRewardsExpanding2XL = asFooterToken({
  // @sam your choice if you want to use this token OR jsut rewrite this for listerine
  ...vitalFooterBase.WithRewardsExpanding2XL,
  Theme: {
    RewardsWrapper: listerineColor.BgSecondaryFooter,
    // @todo This is just to make it more visible, needs to be the correct token.
    CopyrightRow: 'text-primary-page-bg',
    MenuRow: 'text-primary-page-bg',
  }
});

const Default = asFooterToken(vitalFooterBase.Default,
  {
    Behavior: {
      _: addProps({ 'data-shadowed-by': 'ListerineFooter' }),
    }
  },
  WithListerineRewardsExpanding2XL);

export default {
  ...vitalFooterBase,
  Default,
};
