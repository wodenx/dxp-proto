import {
  vitalFooterBase, asFooterToken, RewardsClean
} from '@bodiless/vital-layout';
import {
  addClasses,
  addProps, as, flowHoc, on, removeClasses, withDesign
} from '@bodiless/fclasses';
import lactaidRewards from '../Rewards/tokens';

const WithLactaidRewardsExpanding2XL = asFooterToken({
  ...vitalFooterBase.WithRewardsExpanding2XL,
  Components: {
    Rewards: as(
      on(RewardsClean)(lactaidRewards.Default),
      withDesign({
        Footnote: '2xl:hidden md:block hidden',
      }),
    ),
  },
  Spacing: {
    ...vitalFooterBase.WithRewardsExpanding2XL.Spacing,
    FooterMenuWrapper: 'border-b border-primary-divider',
    MenuRow: removeClasses('md:mb-8 2xl:mb-9'),
    Column2Wrapper: flowHoc(
      removeClasses('md:py-9'),
      addClasses('px-5 relative md:py-0 2xl:px-24 2xl:w-8/12'),
    ),
    Container: flowHoc(
      removeClasses('2xl:pt-16 mx-2.5'),
      addClasses('lg:mx-0 2xl:pt-10.5'),
    ),
  }
});

const Default = asFooterToken(vitalFooterBase.Default,
  {
    Behavior: {
      _: addProps({ 'data-shadowed-by': 'LactaidFooter' }),
    }
  },
  WithLactaidRewardsExpanding2XL);

export default {
  ...vitalFooterBase,
  Default,
};
