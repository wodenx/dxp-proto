// TODO This file should move to Listerine package..

import {
  vitalFooterBase, asFooterToken, RewardsClean
} from '@bodiless/vital-layout';
import {
  addClasses,
  addProps, as, flowHoc, on, removeClasses, withDesign
} from '@bodiless/fclasses';
import { listerineColor } from '../../../Color';
import listerineRewards from '../Rewards/tokens';

const WithListerineRewardsExpanding2XL = asFooterToken({
  ...vitalFooterBase.WithRewardsExpanding2XL,
  Components: {
    Rewards: flowHoc(
      on(RewardsClean)(listerineRewards.Default),
      withDesign({
        Footnote: '2xl:hidden md:block hidden',
      }),
    ),
  },
  Theme: {
    ...vitalFooterBase.Default.Theme,
    _: listerineColor.TextWhite,
    Wrapper: 'footer-wave',
    Column2Wrapper: flowHoc(
      as(listerineColor.BgSecondaryFooter),
      addClasses('md:pl-10 px-5 2xl:mt-[13vw] mobile-wave-bottom relative 2xl:w-8/12'),
    ),
    Container: flowHoc(
      removeClasses('md:mx-4.5'),
      addClasses('2xl:mx-0 2xl:px-0 2xl:pt-0 2xl:pb-0 mx-0'),
    ),
  },
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
