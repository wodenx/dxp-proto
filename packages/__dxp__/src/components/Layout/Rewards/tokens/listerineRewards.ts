import {
  asRewardsToken,
  vitalRewardsBase,
} from '@bodiless/vital-layout';
import {
  addProps,

  Div,

  flowHoc,
  as,
  addClasses,
  withDesign,
  P,
  withProps,
  replaceWith,
} from '@bodiless/fclasses';

import { withParent, withPrependChild } from '@bodiless/core';
import { omit } from 'lodash';
import { vitalTextDecoration } from '@bodiless/vital-elements';
import {
  listerineColor,
  listerineFontSize,
  listerineTypography,
} from '../../..';
import ListerineLogo from '../../../Logo/assets/ListerineLogo';

const WithListerineRewards = asRewardsToken({
  Theme: {
    ...vitalRewardsBase.Default.Theme,
    Wrapper: flowHoc(
      addClasses('py-20 px-10'),
      as(listerineColor.BgSecondaryFooterSignUp,
        listerineColor.TextWhite),
    ),
    Brand: flowHoc(
      replaceWith(ListerineLogo),
      withParent(Div),
      withDesign({
        Parent: addClasses('mb-4'),
      }),
    ),
    Title: listerineFontSize.XXL,
    Body: listerineFontSize.Base,
    FormWrapper: flowHoc(
      addClasses('2xl:flex 2xl:flex-row 2xl:flex-wrap'),
    ),
    FormTextFirstName: flowHoc(
      addClasses('rounded bg-white text-primary-body-copy 2xl:w-44 2xl:p-3'),
      as(listerineFontSize.Base),
    ),
    FormTextEmail: flowHoc(
      addClasses('md:rounded 2xl:bg-white 2xl:text-primary-body-copy 2xl:w-50 2xl:p-3'),
      as(listerineFontSize.Base),
    ),
    FormButton: flowHoc(
      withParent(Div),
      withDesign({
        Parent: withPrependChild(
          flowHoc(
            addProps({
              children: 'The information you submit will be governed by our site’s PRIVACY POLICY'
            }),
            as(
              listerineTypography.CrumbsReviews,
              '2xl:text-white block 2xl:mb-3',
            )
          )(P), 'TEST'
        ),
      }),
      addClasses('2xl:bg-interactive-primary md:p-4 2xl:rounded'),
      as(
        listerineTypography.Body,
        vitalTextDecoration.Uppercase,
      ),
    ),
  },
  Spacing: {
    Brand: 'mb-2',
  },
  Content: {
    ...vitalRewardsBase.Default.Content,
    Title: withProps({
      children: 'Sign Up & Save',
    }),
    Body: withProps({
      children: 'Sign up for our Loyalty Program today and get $1 off your next Listerine® purchase. Plus, get tips, personalized content and more from the #1 dentist and hygienist recommended mouthwash brand! TERMS & CONDITIONS',
    }),
  },
});
const Default = asRewardsToken(omit(vitalRewardsBase.Default, 'Theme'), {
  Behavior: {
    ...vitalRewardsBase.Default.Behavior,
    Wrapper: addProps({ 'shadowed-by': 'Listerine' }),
  },
},
WithListerineRewards);

export default {
  ...vitalRewardsBase,
  Default
};
