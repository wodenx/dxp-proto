import { vitalHelmetBase, asHelmetToken } from '@bodiless/vital-layout';
import { withLangDirProps } from '@bodiless/i18n';
import { as, addProps } from '@bodiless/fclasses';

const Default = asHelmetToken(vitalHelmetBase.Default, {
  Core: {
    LanguageHelmet: as(
      addProps({ 'data-shadowed-by': '__dxp__Helmet' }),
      withLangDirProps,
    ),
  },
});

export default {
  ...vitalHelmetBase,
  Default,
};
