import { as, replaceWith } from '@bodiless/fclasses';
import {
  asButtonToken,
  vitalButtonsBase,
} from '@bodiless/vital-buttons';
import { vitalTextDecoration } from '@bodiless/vital-elements';
import { listerineColor } from '../../Color';
import { listerineFontSize } from '../../FontSize';
import BottleIcon from '../assets/Bottle';

const WhereToBuy = asButtonToken({
  ...vitalButtonsBase.WhereToBuy,
  Components: {
    Icon: replaceWith(BottleIcon),
  },
  Theme: {
    ...vitalButtonsBase.WhereToBuy.Theme,
    Wrapper: as(
      listerineColor.BgPrimaryInteractive,
      listerineColor.TextPrimaryHeaderCopy,
      vitalTextDecoration.Bold,
      vitalTextDecoration.Uppercase,
      listerineFontSize.Base,
      'font-gotham rounded px-6',
    ),
    Body: 'leading ml-2 hidden xl:flex',
  },
});

export default {
  WhereToBuy,
};
