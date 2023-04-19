// TODO This file should move to Listerine package..

import {
  vitalFooterBase, asFooterToken, RewardsClean,
} from '@bodiless/vital-layout';
import {
  // Div,
  // P,
  addClasses,
  addProps, as, flowHoc, on, replaceWith, withDesign
} from '@bodiless/fclasses';
// import { listerineFontSize } from '../../../FontSize';
// import { vitalTextDecoration } from '@bodiless/vital-elements';
// import { withParent, withPrependChild } from '@bodiless/core';
// import { listerineTypography } from '../../../Typography';\
// import { listerineFontSize } from '../../../FontSize';
import { listerineColor } from '../../../Color';
import listerineRewards from '../../Rewards/tokens';

const WithListerineRewardsExpanding2XL = asFooterToken({
  // ...vitalFooterBase.WithRewardsExpanding2XL,
  Components: {
    Rewards: flowHoc(
      on(RewardsClean)(listerineRewards.Default),
      withDesign({
        Footnote: replaceWith(() => null),
      }),
    ),
  },
  // @sam your choice if you want to use this token OR jsut rewrite this for listerine
  Theme: {
    // ...vitalFooterBase.WithRewardsExpanding2XL.Theme,
    _: listerineColor.TextWhite,
    Wrapper: 'nothing',
    Column2Wrapper: flowHoc(
      as(listerineColor.BgSecondaryFooter),
      addClasses('md:pl-10 mx-2'),
    ),
    Container: '2xl:m-0 2xl:pt-0 2xl:pb-0 mx-0',
    // Rewards: flowHoc(
    //   addClasses('py-20 px-10'),
    //   withDesign({
    //     Wrapper: as(listerineColor.BgSecondaryFooterSignUp),
    //     Title: as(listerineTypography.H4),
    //     Body: as(listerineTypography.Body),
    //     FormWrapper: flowHoc(
    //       addClasses('2xl:flex 2xl:flex-row 2xl:flex-wrap'),
    //     ),
    //     FormTextFirstName: flowHoc(
    //       addClasses('md:rounded 2xl:bg-white 2xl:text-primary-body-copy 2xl:w-44 2xl:p-3'),
    //       as(listerineTypography.Body),
    //     ),
    //     FormTextEmail: flowHoc(
    //       addClasses('md:rounded 2xl:bg-white 2xl:text-primary-body-copy 2xl:w-44 2xl:p-3'),
    //       as(listerineTypography.Body),
    //     ),
    //     FormButton: flowHoc(
    //       withParent(Div),
    //       withDesign({
    //         Parent: withPrependChild(
    //           flowHoc(
    //             addProps({
    //               children:
    //                  'The information you submit will be governed by our site’s PRIVACY POLICY'
    //             }),
    //             as(
    //               listerineTypography.CrumbsReviews,
    //               '2xl:text-white block 2xl:mb-3',
    //             )
    //           )(P), 'TEST'
    //         ),
    //       }),
    //       addClasses('2xl:bg-interactive-primary md:p-4 2xl:rounded'),
    //       as(
    //         listerineTypography.Body,
    //         vitalTextDecoration.Uppercase,
    //       ),
    //     ),
    //   })
    // ),
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
