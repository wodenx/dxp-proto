import { on } from '@bodiless/fclasses';
import { vitalBurgerMenuBase, asBurgerMenuToken } from '@bodiless/vital-navigation';
import { LinkClean, vitalLink, asLinkToken } from '@bodiless/vital-link';
import { asLanguageSelector } from '@bodiless/i18n';

export const asLanguageSelectorLink = on(LinkClean)(
  asLinkToken({
    ...vitalLink.Default,
    // Make the link not editable.
    Schema: {},
  }),
  asLanguageSelector
);

const Default = asBurgerMenuToken(vitalBurgerMenuBase.Base, {
  Components: {
    LanguageSelector: asLanguageSelectorLink,
  },
  Spacing: {
    LanguageSelector: 'pl-5',
  },
});

export default {
  ...vitalBurgerMenuBase,
  Default,
};
