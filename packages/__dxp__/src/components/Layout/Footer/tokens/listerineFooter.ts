// TODO This file should move to Listerine package..

import {
  vitalFooterBase, asFooterToken, RewardsClean, vitalRewards
} from '@bodiless/vital-layout';
import {
  addClasses,
  addProps, as, flowHoc, on, withDesign
} from '@bodiless/fclasses';
// import { listerineFontSize } from '../../../FontSize';
import { vitalTextDecoration } from '@bodiless/vital-elements';
import { listerineTypography } from '../../../Typography';
import { listerineColor } from '../../../Color';

const WithListerineRewardsExpanding2XL = asFooterToken({
  ...vitalFooterBase.Default,
  Components: {
    Rewards: on(RewardsClean)(vitalRewards.Default),
  },
  // @sam your choice if you want to use this token OR jsut rewrite this for listerine
  Theme: {
    ...vitalFooterBase.Default.Theme,
    _: listerineColor.TextWhite,
    Column2Wrapper: flowHoc(
      as(listerineColor.BgSecondaryFooter),
      addClasses('md:px-20'),
    ),
    Container: '2xl:m-0 2xl:pt-0 2xl:pb-0',
    Rewards: flowHoc(
      addClasses('2xl:py-20 2xl:px-10'),
      withDesign({
        Wrapper: as(listerineColor.BgSecondaryFooterSignUp),
        Title: as(listerineTypography.H4),
        Body: as(listerineTypography.Body),
        FormWrapper: '2xl:flex 2xl:flex-row 2xl:flex-wrap',
        FormTextFirstName: flowHoc(
          addClasses('md:rounded 2xl:bg-white 2xl:text-primary-body-copy 2xl:w-44 2xl:p-3'),
          as(listerineTypography.Body),
        ),
        FormTextEmail: flowHoc(
          addClasses('md:rounded 2xl:bg-white 2xl:text-primary-body-copy 2xl:w-44 2xl:p-3'),
          as(listerineTypography.Body),
        ),
        FormButton: flowHoc(
          addClasses('2xl:bg-interactive-primary md:p-4 2xl:rounded'),
          as(
            listerineTypography.Body,
            vitalTextDecoration.Uppercase,
          ),
        ),
      })
    ),
    // @todo This is just to make it more visible, needs to be the correct token.
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
