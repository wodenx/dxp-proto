import { vitalFooterBase, asFooterToken } from '@bodiless/vital-layout';
import { addProps } from '@bodiless/fclasses';
import { listerineColor } from '../../../components/Color';

const Default = asFooterToken(vitalFooterBase.Base, {
  Core: {
    _: addProps({ 'data-shadowed-by': '__dxp__Footer' }),
  }
});

const WithRewardsExpanding2XL = asFooterToken({
  ...vitalFooterBase.WithRewardsExpanding2XL,
  Theme: {
    RewardsWrapper: listerineColor.BgSecondaryFooter,
  }
});

const FooterWithRewards = asFooterToken(vitalFooterBase.Base, {
  ...WithRewardsExpanding2XL,
});

export default {
  ...vitalFooterBase,
  Default,
  WithRewardsExpanding2XL,
  FooterWithRewards,
};
