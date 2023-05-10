import {
  Div, flowHoc, replaceWith
} from '@bodiless/fclasses';
import { asLogoToken, vitalLogoBase } from '@bodiless/vital-layout';
import { withChild } from '@bodiless/core';
import LactaidLogo from '../assets/LactaidLogo';

const Default = asLogoToken({
  ...vitalLogoBase.Default,
  Layout: {
    ...vitalLogoBase.Default.Layout,
    Wrapper: 'w-full max-w-logo md:max-w-28 lg:min-w-28',
    Image: flowHoc(
      replaceWith(Div),
      withChild(LactaidLogo),
    ),
  },
});

const Footer = asLogoToken({
  ...vitalLogoBase.Default,
  Layout: {
    ...vitalLogoBase.Default.Layout,
    Wrapper: 'block max-w-logo md:max-w-28 lg:min-w-28',
    Image: flowHoc(
      replaceWith(Div),
      withChild(LactaidLogo),
    ),
  },
});

export default {
  Default,
  Footer
};
