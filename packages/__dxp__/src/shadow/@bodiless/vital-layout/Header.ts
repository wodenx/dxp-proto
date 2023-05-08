import { vitalHeaderBase, asHeaderToken } from '@bodiless/vital-layout';
import { LinkClean, vitalLink, asLinkToken } from '@bodiless/vital-link';
import { asLanguageSelector, withLanguageNode } from '@bodiless/i18n';
import {
  addProps, on, startWith, Div,
} from '@bodiless/fclasses';

export const asLanguageSelectorLink = on(LinkClean)(
  asLinkToken({
    ...vitalLink.Default,
    // Make the link not editable.
    Schema: {},
  }),
  asLanguageSelector
);

const Default = asHeaderToken(
  vitalHeaderBase.Default,
  vitalHeaderBase.WithLanguageSelector,
  {
    Core: {
      _: addProps({ 'data-shadowed-by': '__dxp__Header' }),
    },
    Schema: {
      _: withLanguageNode,
    },
    Components: {
      LanguageSelectorWrapper: startWith(Div),
      LanguageSelector: asLanguageSelectorLink,
    },
  }
);

export default {
  ...vitalHeaderBase,
  Default,
};
