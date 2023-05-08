import { withLanguages } from '@bodiless/i18n';
import { asFluidToken } from '@bodiless/vital-elements';
import { vitalPageBase } from '@bodiless/vital-templates';

const Default = asFluidToken(vitalPageBase.Default, {
  Core: {
    _: withLanguages([
      {
        name: 'en',
        label: 'English',
        isDefault: true,
      },
      {
        name: 'es',
        label: 'Español',
      },
    ]),
  },
});

const vitalPage: typeof vitalPageBase = {
  ...vitalPageBase,
  Default,
};

export default vitalPage;
