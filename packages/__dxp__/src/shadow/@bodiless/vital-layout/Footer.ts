import { vitalFooterBase, asFooterToken } from '@bodiless/vital-layout';
import { addProps } from '@bodiless/fclasses';
import { withLanguageNode } from '@bodiless/i18n';

const Default = asFooterToken(vitalFooterBase.Default, {
  Core: {
    _: addProps({ 'data-shadowed-by': '__dxp__Footer' }),
  },
  Schema: {
    _: withLanguageNode,
  },
});

export default {
  ...vitalFooterBase,
  Default,
};
