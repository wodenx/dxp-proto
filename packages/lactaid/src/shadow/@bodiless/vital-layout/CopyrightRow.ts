import { vitalCopyrightRowBase, asCopyrightRowToken } from '@bodiless/vital-layout';
import {
  Div, P, addClasses, addProps, as, flowHoc, on, removeClasses, replaceWith,
} from '@bodiless/fclasses';
import {
  withAppendChild, withPrependChild,
} from '@bodiless/core';
import { lactaidTypography } from '../../../components/Typography';
import { lactaidSocialLinks } from '../../../components/SocialLinks';
import { SocialLinksClean } from '../../../components/SocialLinks/SocialLinksClean';

const lactaidFooterUtilityMenu = flowHoc(
  as('flex flex-col flex-col-reverse'),
  withAppendChild(
    as(
      withPrependChild(
        as(
          addProps({
            children: 'Do Not Sell or Share My Personal Information',
          }),
          'text-xs underline'
        )(P), 'Utility Link One'
      ),
      withPrependChild(
        as(
          addProps({
            children: 'Limit the Use of My Sensitive Personal Information',
          }),
          'text-xs underline'
        )(P), 'Utility Link Two'
      ),
      withPrependChild(
        as(
          addProps({
            children: 'Cookie Policy',
          }),
          'text-xs underline'
        )(P), 'Utility Link Three'
      ),
      withPrependChild(
        as(
          addProps({
            children: 'Customize Cookie Settings ',
          }),
          'text-xs underline'
        )(P), 'Utility Link Four'
      ),
      as('flex flex-col 2xl:flex-row lg:gap-8 gap-4 font-bold font-gotham py-5'),
    )(Div), 'Utility Menu'
  ),
);

const Default = asCopyrightRowToken({
  ...vitalCopyrightRowBase.Default,
  Components: {
    ...vitalCopyrightRowBase.Default.Components,
    CopyrightWrapper: lactaidFooterUtilityMenu,
    SocialLinks: on(SocialLinksClean)(lactaidSocialLinks.Default),
    SocialDisclaimer: replaceWith(Div), // Comes in as fragement
  },
  Layout: {
    Wrapper: removeClasses('xl:w-3/4'),
  },
  Theme: {
    ...vitalCopyrightRowBase.Default.Theme,
    Wrapper: flowHoc(
      removeClasses('xl:flex'),
      addClasses('flex flex-col'),
    ),
    Disclaimer: replaceWith(() => null),
    CopyrightWrapper: 'shrink-0 border-b border-primary-divider',
    SocialDisclaimer: 'w-full',
    SocialLinksWrapper: removeClasses('xl:w-1/4'),
    Copyright: lactaidTypography.Copyright,
  },
  Spacing: {
    Wrapper: 'gap-y-5 sm:pr-0',
    CopyrightWrapper: 'pb-10',
    SocialDisclaimer: 'py-10 pt-10.5 lg:py-0 lg:pt-12.5',
    SocialLinksWrapper: 'pt-3 pb-20 lg:pb-0 lg:mb-3',
    SocialLinks: 'w-full',
  },
  Behavior: {
    Wrapper: addProps({ 'data-shadowed-by': 'Lactaid:Copyright' }),
  },
});

export default {
  ...vitalCopyrightRowBase,
  Default,
};
