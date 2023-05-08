// TODO This file should move to Listerine package..

import {
  vitalFooterBase, asFooterToken, RewardsClean
} from '@bodiless/vital-layout';
import {
  addClasses,
  addProps, as, flowHoc, on, removeClasses, withDesign
} from '@bodiless/fclasses';
import { asElementToken } from '@bodiless/vital-elements';
import { listerineColor } from '../../../Color';
import listerineRewards from '../Rewards/tokens';

const withBottomFooterWave = asElementToken({
  Theme: {
    _: '2xl:before:content-none before:content-[\'\'] before:bg-mobile-wave-bottom',
  },
  Spacing: {
    _: 'before:mr-[-50vw] before:right-[50%] before:top-[-35px]'
  },
  Layout: {
    _: 'before:absolute before:w-screen before:bg-wave-full before:h-9'
  },
});

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
    ...vitalFooterBase.WithRewardsExpanding2XL.Theme,
    _: listerineColor.TextWhite,
    Wrapper: '2xl:footer-wave',
    Column2Wrapper: flowHoc(
      as(listerineColor.BgSecondaryFooter),
      as(withBottomFooterWave),
    ),
    Container: flowHoc(
      removeClasses('md:mx-4.5'),
      addClasses('2xl:mx-0 2xl:px-0 2xl:pt-0 2xl:pb-0 mx-0'),
    ),
  },
  Spacing: {
    ...vitalFooterBase.WithRewardsExpanding2XL.Spacing,
    Column2Wrapper: 'xl:pl-10 px-5 2xl:mt-[13vw] relative 2xl:w-8/12',
    Container: addClasses('lg:mx-0'),
    MenuRow: 'lg:px-24',
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
