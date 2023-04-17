import { vitalCardBase, asCardToken } from '@bodiless/vital-card';
import {
  Div,
  addProps,
  startWith,
  flowHoc,
  as
} from '@bodiless/fclasses';
import { vitalTextDecoration } from '@bodiless/vital-elements';
import { listerineColor } from '../../../Color';
import { listerineTypography } from '../../../Typography';
import { listerineFontSize } from '../../../FontSize';
import { WithHalfHorizontal } from './Base';

const HeroBase = asCardToken({
  ...vitalCardBase.Hero,
  Layout: {},
});

const Hero = asCardToken(
  {
    ...vitalCardBase.Hero,
    Behavior: {
      ...vitalCardBase.Hero.Behavior,
      Wrapper: flowHoc(
        startWith(Div),
        addProps({ 'data-shadowed-by': '__vital__:HeroCard' }),
      ),
    },
    Spacing: {
      Wrapper: 'pb-9 lg:pb-12 lg:pl-36',
      ContentWrapper: 'px-4 lg:px-0',
      DescriptionWrapper: 'mb-3 mt-0 lg:mb-4',
      ImageWrapper: 'pl-14 mb-9 lg:pl-0 lg:mb-0'
    },
    Layout: {
      ...vitalCardBase.Hero.Behavior,
      Wrapper: 'space-x-reverse space-x-14 lg:flex-row-reverse flex-col w-full flex'
    },
    Theme: {
      ...vitalCardBase.Hero.Theme,
      Wrapper: listerineColor.BgPrimaryBrand,
      TitleWrapper: listerineTypography.H1,
      Title: listerineColor.TextWhite,
      DescriptionWrapper: as(
        listerineFontSize.Base,
        listerineColor.TextWhite,
        vitalTextDecoration.Medium,
        'font-gotham leading-[120%]'
      ),
    },
  },
  vitalCardBase.WithNoEyebrow,
  WithHalfHorizontal,
);

const HeroRightCard = asCardToken(
  Hero,
  vitalCardBase.WithHorizontalContentCentered,
  vitalCardBase.WithHorizontalRightOrientation,
  vitalCardBase.WithPrimaryTextLink,
  {
    Meta: {
      title: 'Landing Page Hero: Right',
    },
  },
);

export { Hero, HeroBase, HeroRightCard };
