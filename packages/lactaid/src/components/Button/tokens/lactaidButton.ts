import { as } from '@bodiless/fclasses';
import { asButtonToken, vitalButtonsBase } from '@bodiless/vital-buttons';
import { lactaidColor } from '../../Color';
import { lactaidTextDecoration } from '../../TextDecoration';
import { lactaidFontSize } from '../../FontSize';
import { lactaidTypography } from '../../Typography';

const Primary = asButtonToken({
  ...vitalButtonsBase.Primary,
  Spacing: {
    ...vitalButtonsBase.Primary.Spacing,
    Wrapper: 'px-6 py-3.5',
  },
  Theme: {
    ...vitalButtonsBase.Primary.Theme,
    Wrapper: as(
      lactaidColor.BgPrimaryBrand,
      lactaidColor.TextWhite,
      lactaidTextDecoration.Bold,
      lactaidTextDecoration.Uppercase,
      lactaidFontSize.Base,
      'font-gotham rounded hover:bg-interactive-primary-hover transition-colors duration-400',
    ),
  },
});

const WhereToBuy = asButtonToken({
  ...vitalButtonsBase.WhereToBuy,
  Layout: {
    ...vitalButtonsBase.WhereToBuy.Layout,
    Body: 'hidden xl:flex',
  },
  Spacing: {
    ...vitalButtonsBase.WhereToBuy.Spacing,
    Body: 'ml-2',
    Wrapper: 'px-6',
  },
  Theme: {
    ...vitalButtonsBase.WhereToBuy.Theme,
    Wrapper: as(lactaidColor.BgPrimaryInteractive, 'rounded'),
    Body: as(
      lactaidTypography.WhiteLink,
      lactaidTextDecoration.Uppercase,
      'leading',
    ),
  },
});

export default {
  Primary,
  WhereToBuy,
};
