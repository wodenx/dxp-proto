import {
  Div, flowHoc, replaceWith
} from '@bodiless/fclasses';
import { asLogoToken, vitalLogoBase } from '@bodiless/vital-layout';
import ListerineLogo from '../assets/ListerineLogo';

const Default = asLogoToken({
  ...vitalLogoBase.Default,
  Layout: {
    ...vitalLogoBase.Default.Layout,
    Wrapper: 'w-full max-w-logo md:max-w-28 lg:min-w-28',
    // Note: withChild does not work here, presumably because it's assumed to be adding
    // a child element inside of img tags.
    // Image: withChild(ListerineLogo),
    Image: flowHoc(
      replaceWith(Div),
      replaceWith(ListerineLogo),
    ),
  },
});

export default {
  Default
};
