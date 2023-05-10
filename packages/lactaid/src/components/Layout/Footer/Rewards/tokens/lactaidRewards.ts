import {
  LogoClean,
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
  removeClasses,
  on,
  replaceWith,
} from '@bodiless/fclasses';

import { withParent, withPrependChild } from '@bodiless/core';
import { omit } from 'lodash';
import { lactaidFontSize } from '../../../../FontSize';
import { lactaidTypography } from '../../../../Typography';
import { lactaidLogo } from '../../../../Logo';

const WithLactaidRewards = asRewardsToken({
  ...vitalRewards.Default,
  Components: {
    Footnote: replaceWith(() => null),
  },
  Layout: {
    Wrapper: '2xl:w-4/12 justify-start',
  },
  Theme: {
    ...vitalRewards.Default.Theme,
    Wrapper: 'relative 2xl:border-r 2xl:border-primary-divider 2xl:flex 2xl:flex-col',
    Brand: flowHoc(
      on(LogoClean)(lactaidLogo.Footer),
    ),
    Title: lactaidTypography.H3,
    Body: lactaidTypography.Body,
    FormWrapper: flowHoc(
      addClasses('md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-10'),
    ),
    FormTextFirstName: flowHoc(
      removeClasses('2xl:w-44'),
      addClasses('rounded border font-gotham font-light bg-white text-primary-body-copy'),
      as(lactaidFontSize.Base),
    ),
    FormTextEmail: flowHoc(
      removeClasses('2xl:w-44'),
      addClasses('border md:rounded 2xl:bg-white font-gotham font-light 2xl:text-primary-body-copy 2xl:w-full'),
      as(lactaidFontSize.Base),
    ),
    FormButton: flowHoc(
      withParent(Div),
      withDesign({
        Parent: flowHoc(
          withPrependChild(
            flowHoc(
              addProps({
                children: 'The information you enter will be governed by Care Club\'s Privacy Policy. By submitting your information, you agree to the Financial Incentive Notice.'
              }),
              as(
                lactaidFontSize.XS,
                'block mb-3 font-gotham',
              )
            )(P), 'Footnote'
          ),
          addClasses('w-full'),
        ),
      }),
      removeClasses('md:p-2'),
      addClasses('bg-interactive-primary hover:bg-interactive-primary-hover transition-colors duration-400 p-4 rounded'),
      as(
        lactaidTypography.WhiteLink,
        'uppercase'
      ),
    ),
  },
  Spacing: {
    ...vitalRewards.Default.Spacing,
    Wrapper: flowHoc(
      removeClasses('max-w-3xl xl:mx-36'),
      addClasses('pt-10 px-5 md:px-5 lg:pt-0 2xl:px-24'),
    ),
    Brand: 'mb-3',
    FormTextFirstName: as(
      removeClasses('xl:py-2'),
      addClasses('p-4 md:p-4 xl:py-4'),
    ),
    FormTextEmail: as(
      removeClasses('md:mx-6 xl:py-2'),
      addClasses('p-4 md:p-4 md:mx-0 xl:py-4'),
    ),
  },
  Content: {
    ...vitalRewardsBase.Default.Content,
    Title: withProps({
      children: 'Get the Scoop',
    }),
    Body: flowHoc(
      withProps({
        children: 'Want to receive delicious recipes, new product updates, and exclusive offers from LACTAID®? Sign up for our emails today!',
      }),
    ),
    FormButton: withProps({
      children: 'Sign Up'
    }),
  },
});
const Default = asRewardsToken(omit(vitalRewardsBase.Default, 'Theme'), {
  Behavior: {
    ...vitalRewardsBase.Default.Behavior,
    Wrapper: addProps({ 'shadowed-by': 'LactaidRewards' }),
  },
},
WithLactaidRewards);

export default {
  ...vitalRewardsBase,
  Default
};
