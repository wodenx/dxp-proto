import { Div, flowHoc, replaceWith } from '@bodiless/fclasses';
import { asLogoToken, vitalLogoBase } from '@bodiless/vital-layout';
import { withChild } from '@bodiless/core';
import { withoutHydration } from '@bodiless/hydration';
import LactaidLogo from '../assets/LactaidLogo';

const Default = asLogoToken({
  ...vitalLogoBase.Default,
  Core: {
    _: withoutHydration(),
  },
  Layout: {
    ...vitalLogoBase.Default.Layout,
    Wrapper: 'w-full max-w-logo xl:max-w-logodesktop',
    Image: flowHoc(replaceWith(Div), withChild(LactaidLogo)),
  },
  Spacing: {
    Wrapper: 'my-4 xl:mr-18 xl:my-0',
  },
});

const Footer = asLogoToken({
  ...vitalLogoBase.Default,
  Core: {
    _: withoutHydration(),
  },
  Layout: {
    ...vitalLogoBase.Default.Layout,
    Wrapper: 'block max-w-30 md:max-w-28 lg:min-w-28',
    Image: flowHoc(replaceWith(Div), withChild(LactaidLogo)),
  },
  Spacing: {
    Wrapper: 'mb-3',
  },
});

export default {
  Default,
  Footer,
};
