// TODOSAM BRING in Lactaid Social Links Clean not from vital-layout
import { vitalCopyrightRowBase, asCopyrightRowToken } from '@bodiless/vital-layout';
import { vitalLink } from '@bodiless/vital-link';
import {
  addProps, withDesign, flowHoc,
  as, P, addClasses, removeClasses, replaceWith, Div
} from '@bodiless/fclasses';
import { withAppendChild, withPrependChild } from '@bodiless/core';
import { SocialLinksClean } from '../../../components/SocialLinks/SocialLinksClean';

const listerineDesktopDisclaimer = flowHoc(
  as('flex flex-col'),
  withAppendChild(
    as(
      withPrependChild(
        flowHoc(
          addProps({
            children: 'Do not sell my personal information.'
          }),
          addClasses('text-white block text-xs'),
        )(P), 'Footnote Line One'
      ),
      withPrependChild(
        flowHoc(
          addProps({
            children: 'Use all products as directed.'
          }),
          addClasses('text-white block mb-3 text-xs'),
        )(P), 'Footnote Line Two'
      ),
      as('flex flex-col'),
    )(Div), 'Desktop Disclaimer'
  ),
);

const Default = asCopyrightRowToken({
  ...vitalCopyrightRowBase.Default,
  Components: {
    ...vitalCopyrightRowBase.Default.Components,
    Wrapper: flowHoc(
      withPrependChild(
        flowHoc(
          addProps({
            children: 'Do not sell my personal information.'
          }),
          addClasses('text-white block text-xs sm:hidden'),
        )(P), 'Footnote Line One'
      ),
      withPrependChild(
        flowHoc(
          addProps({
            children: 'Use all products as directed.'
          }),
          addClasses('text-white block mb-3 text-xs sm:hidden'),
        )(P), 'Footnote Line Two'
      ),
    ),
    SocialLinksWrapper: listerineDesktopDisclaimer,
    SocialLinks: as(
      replaceWith(SocialLinksClean),
      withDesign({
        WrapperFacebook: vitalLink.Base,
        WrapperTikTok: vitalLink.Base,
        WrapperYouTube: vitalLink.Base,
        WrapperPinterest: vitalLink.Base,
        WrapperTwitter: vitalLink.Base,
      }),
      addClasses('flex flex-col'),
    ),
  },
  Theme: {
    ...vitalCopyrightRowBase.Default.Theme,
    Wrapper: flowHoc(
      removeClasses('xl:flex'),
      addClasses('flex flex-col 2xl:flex-row')
    ),
    CopyrightWrapper: 'xl:pr-10 shrink-0',
    SocialDisclaimer: 'w-full',
    SocialLinksWrapper: removeClasses('xl:w-1/4'),
    Disclaimer: replaceWith(() => null),
    Copyright: 'text-xs',
  },
  Spacing: {
    Wrapper: 'gap-y-5 pr-5 sm:pr-0',
    SocialDisclaimer: 'py-10 lg:py-0',
    SocialLinksWrapper: 'mb-3',
    SocialLinks: flowHoc(
      addClasses('w-full'),
      withDesign({
        Wrapper: 'mb-3',
        InnerWrapper: addClasses('w-full flex flex-row xl:mx-0 gap-x-2'),
      }),
    ),
  },
  Behavior: {
    Wrapper: addProps({ 'data-shadowed-by': 'Listerin:Copyright' }),
  },
});

export default {
  ...vitalCopyrightRowBase,
  Default,
};
