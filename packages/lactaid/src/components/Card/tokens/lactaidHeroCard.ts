import { vitalCardBase, asCardToken } from '@bodiless/vital-card';
import {
  Div,
  addProps,
  startWith,
  flowHoc,
  as
} from '@bodiless/fclasses';
import { lactaidColor } from '../../Color';
import { lactaidTypography } from '../../Typography';
import { lactaidFontSize } from '../../FontSize';
import { WithHalfHorizontal, WithPrimaryTextLinkWithoutArrow } from './lactaidBaseCard';
import { lactaidTextDecoration } from '../../TextDecoration';

const Hero = asCardToken(vitalCardBase.WithNoEyebrow, WithHalfHorizontal, {
  ...vitalCardBase.Hero,
  Behavior: {
    ...vitalCardBase.Hero.Behavior,
    Wrapper: flowHoc(
      startWith(Div),
      addProps({ 'data-shadowed-by': '__vital__:HeroCard' }),
    ),
  },
  Spacing: {
    Wrapper: 'pb-9 lg:pb-0 lg:pl-36',
    ContentWrapper: 'px-4 lg:px-0 md:w-full',
    DescriptionWrapper: 'mb-3 mt-0 lg:mb-4',
    ImageWrapper: 'pl-14 mb-9 lg:pl-0 lg:mb-0 md:w-full',
  },
  Layout: {
    ...vitalCardBase.Hero.Layout,
    Wrapper:
      'space-x-reverse space-x-14 lg:flex-row-reverse flex-col w-full flex md:flex-col',
  },
  Theme: {
    ...vitalCardBase.Hero.Theme,
    Wrapper: lactaidColor.BgPrimaryBrand,
    TitleWrapper: lactaidTypography.H1,
    Title: lactaidColor.TextWhite,
    CTALink: as(lactaidTypography.Link),
    DescriptionWrapper: as(
      lactaidFontSize.Base,
      lactaidColor.TextWhite,
      lactaidTextDecoration.Medium,
      'font-gotham font-light leading-[120%]',
    ),
  },
});

const HeroRightCard = asCardToken(
  Hero,
  WithPrimaryTextLinkWithoutArrow,
  vitalCardBase.WithHorizontalContentCentered,
  vitalCardBase.WithHorizontalRightOrientation,
  {
    Content: {
      CTALink: addProps({
        href: '#',
      }),
    },
    Meta: {
      title: 'Landing Page Hero: Right',
    },
  },
);

export { Hero, HeroRightCard };
