import { asLogoToken, vitalLogoBase } from '@bodiless/vital-layout';

const Default = asLogoToken({
  ...vitalLogoBase.Default,
  Layout: {
    ...vitalLogoBase.Default.Layout,
    Wrapper: 'w-full max-w-logo md:max-w-28 lg:min-w-28',
  },
});

export default {
  Default
};
