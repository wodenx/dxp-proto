import {
  asRewardsToken,
  vitalRewards,
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
  removeClasses,
} from '@bodiless/fclasses';

import { withParent, withPrependChild } from '@bodiless/core';
import { omit } from 'lodash';
import { vitalTextDecoration } from '@bodiless/vital-elements';
import {
  listerineColor,
  listerineFontSize,
  listerineTypography,
} from '../../../..';
import ListerineLogo from '../../../../Logo/assets/ListerineLogo';

const WithListerineRewards = asRewardsToken({
  ...vitalRewards.Default,
  Theme: {
    ...vitalRewards.Default.Theme,
    Wrapper: flowHoc(
      addClasses('2xl:flex 2xl:flex-col 2xl:bg-secondary-footer-bg-signup lg:bg-secondary-footer-bg bg-secondary-footer-bg-signup mobile-wave-top relative'),
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
      removeClasses('2xl:w-44'),
      addClasses('rounded bg-white text-primary-body-copy 2xl:w-[12rem] 2xl:p-3'),
      as(listerineFontSize.Base),
    ),
    FormTextEmail: flowHoc(
      removeClasses('2xl:w-44'),
      addClasses('md:rounded 2xl:bg-white 2xl:text-primary-body-copy 2xl:w-[12rem] 2xl:p-3'),
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
              listerineFontSize.XS,
              'text-white block mb-3 2xl:block md:hidden',
            )
          )(P), 'TEST'
        ),
      }),
      removeClasses('md:p-2'),
      addClasses('bg-interactive-primary p-4 rounded'),
      as(
        listerineTypography.Body,
        vitalTextDecoration.Uppercase,
      ),
    ),
  },
  Spacing: {
    Wrapper: flowHoc(
      removeClasses('max-w-3xl'),
      addClasses('py-20 2xl:px-24 md:px-5 px-15 2xl:w-4/12 justify-center'),
    ),
    Brand: 'mb-2',
  },
  Content: {
    ...vitalRewardsBase.Default.Content,
    Title: withProps({
      children: 'Sign Up & Save',
    }),
    Body: flowHoc(
      withProps({
        children: 'Sign up for our Loyalty Program today and get $1 off your next Listerine® purchase. Plus, get tips, personalized content and more from the #1 dentist and hygienist recommended mouthwash brand! TERMS & CONDITIONS',
      }),
      addClasses('leading-5'),
    ),
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
