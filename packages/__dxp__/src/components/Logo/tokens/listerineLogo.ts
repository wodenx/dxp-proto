import { replaceWith } from '@bodiless/fclasses';
import { asLogoToken, vitalLogoBase } from '@bodiless/vital-layout';
import ListerineLogo from '../assets/ListerineLogo';

const Default = asLogoToken({
  ...vitalLogoBase.Default,
  Layout: {
    ...vitalLogoBase.Default.Layout,
    Wrapper: 'w-full max-w-logo md:max-w-28 lg:min-w-28',
    Image: replaceWith(ListerineLogo),
  },
});

export default {
  Default
};
