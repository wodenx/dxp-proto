import { TokenCollection, as, replaceWith } from '@bodiless/fclasses';
import { ButtonComponent, asButtonToken, vitalButtonsBase } from '@bodiless/vital-buttons';
import { vitalTextDecoration } from '@bodiless/vital-elements';
import { listerineColor } from '../../Color';
import { listerineFontSize } from '../../FontSize';
import BottleIcon from '../assets/Bottle';

const Primary = asButtonToken({
  ...vitalButtonsBase.Primary,
  Spacing: {
    ...vitalButtonsBase.Primary.Spacing,
    Wrapper: 'px-6 py-3.5'
  },
  Theme: {
    ...vitalButtonsBase.Primary.Theme,
    Wrapper: as(
      listerineColor.BgPrimaryInteractiveActive,
      listerineColor.TextWhite,
      vitalTextDecoration.Bold,
      vitalTextDecoration.Uppercase,
      listerineFontSize.Base,
      'font-gotham rounded',
    ),
  },
});

const WhereToBuy = asButtonToken({
  ...vitalButtonsBase.WhereToBuy,
  Components: {
    Icon: replaceWith(BottleIcon),
  },
  Layout: {
    ...vitalButtonsBase.WhereToBuy.Layout,
    Body: 'hidden xl:flex'
  },
  Spacing: {
    ...vitalButtonsBase.WhereToBuy.Spacing,
    Body: 'ml-2',
    Wrapper: 'px-6',
  },
  Theme: {
    ...vitalButtonsBase.WhereToBuy.Theme,
    Wrapper: as(
      listerineColor.BgPrimaryInteractive,
      listerineColor.TextPrimaryHeaderCopy,
      vitalTextDecoration.Bold,
      vitalTextDecoration.Uppercase,
      listerineFontSize.Base,
      'font-gotham rounded',
    ),
    Body: 'leading',
  },
});

interface ListerineButtons extends TokenCollection<ButtonComponent, {}> {}
const listerineButtons: ListerineButtons = {
  ...vitalButtonsBase,
  Primary,
  WhereToBuy,
};

export default listerineButtons;
