import { vitalCardBase, asCardToken } from '@bodiless/vital-card';
import {
  addProps,
  flowHoc,
  as,
  replaceWith,
  extendMeta,
} from '@bodiless/fclasses';
import { listerineButton } from '../../../Button';
import { listerineColor } from '../../../Color';
import { listerineSpacing } from '../../../Spacing';

const Default = asCardToken(vitalCardBase.Default, {
  Behavior: {
    Wrapper: addProps({ 'data-shadowed-by': '__vital__:Card' }),
  },
});

// Rewrite this to have card on horizontal on desktop and remove spacing
const WithHorizontalOrientationBase = asCardToken({
  Layout: {
    Image: 'w-full',
    ImageWrapper: 'flex flex-col',
    ContentWrapper: 'flex flex-col',
    Wrapper: 'flex-col w-full flex',
  },
  Spacing: {
    Wrapper: 'space-x-10',
  },
  Meta: flowHoc.meta.term('Orientation')('Horizontal'),
});

const WithHalfHorizontal = asCardToken({
  Layout: {
    ImageWrapper: 'lg:w-1/2',
    ContentWrapper: 'lg:w-1/2',
  },
  Meta: flowHoc.meta.term('Orientation')('Half'),
});

const WithThirdHorizontal = asCardToken({
  Layout: {
    ImageWrapper: 'lg:w-1/3 md:w-1/2',
    ContentWrapper: 'lg:w-2/3 md:w-1/2',
  },
  Meta: flowHoc.meta.term('Orientation')('Fourth'),
});

const WithFourthHorizontal = asCardToken({
  Layout: {
    ImageWrapper: 'lg:w-1/4 md:w-1/2',
    ContentWrapper: 'lg:w-3/4 md:w-1/2',
  },
  Meta: flowHoc.meta.term('Orientation')('Fourth'),
});

// These need to be rewritten as the vital inherit from Vital's
// WithHorizontalOrientationBase and don't use above Kenvue's override.
const WithHorizontalLeftOrientation = asCardToken(
  WithHorizontalOrientationBase,
  {
    Layout: {
      Wrapper: 'lg:flex-row',
    },
    Meta: flowHoc.meta.term('Orientation')('Left Image break at Desktop'),
  },
);

const WithHorizontalRightOrientation = asCardToken(
  WithHorizontalOrientationBase,
  {
    Layout: {
      Wrapper: 'lg:flex-row-reverse',
    },
    Spacing: {
      Wrapper: 'space-x-reverse',
    },
    Meta: flowHoc.meta.term('Orientation')('Right Image break at Desktop'),
  },
);

const WithHorizontalLeftOrientationTabletBrkpt = asCardToken(
  WithHorizontalOrientationBase,
  {
    Layout: {
      Wrapper: 'md:flex-row',
    },
    Meta: flowHoc.meta.term('Orientation')('Left Image break at Tablet'),
  },
);

const WithHorizontalRightOrientationTabletBrkpt = asCardToken(
  WithHorizontalOrientationBase,
  {
    Layout: {
      Wrapper: 'md:flex-row-reverse',
    },
    Spacing: {
      Wrapper: 'space-x-reverse',
    },
    Meta: flowHoc.meta.term('Orientation')('Right Image break at Tablet'),
  },
);

const WithPrimaryButton = asCardToken({
  ...vitalCardBase.WithPrimaryButton,
  Theme: {
    CTALink: as(listerineButton.Primary),
  },
});

const WithNoLink = asCardToken({
  Editors: {
    Wrapper: undefined, // Remove Link Editor from Cards;
  },
  Components: {
    CTALink: replaceWith(() => null),
    CTAWrapper: replaceWith(() => null),
  },
  Meta: extendMeta(
    flowHoc.meta.term('CTA Style')('No Link'),
    flowHoc.meta.term('CTA Type')('Non Clickable'),
  ),
});

const WithGreenBg = asCardToken({
  Theme: {
    Wrapper: as(listerineColor.BannerGreen, listerineSpacing.Rounding),
  },
  Meta: flowHoc.meta.term('Color')('Green'),
});
const WithPurpleBg = asCardToken({
  Theme: {
    Wrapper: as(listerineColor.BannerPurple, listerineSpacing.Rounding),
  },
  Meta: flowHoc.meta.term('Color')('Purple'),
});
const WithOrangeBg = asCardToken({
  Theme: {
    Wrapper: as(listerineColor.BannerOrange, listerineSpacing.Rounding),
  },
  Meta: flowHoc.meta.term('Color')('Orange'),
});
const WithRedBg = asCardToken({
  Theme: {
    Wrapper: as(listerineColor.BannerRed, listerineSpacing.Rounding),
  },
  Meta: flowHoc.meta.term('Color')('Red'),
});

export {
  Default,
  WithPrimaryButton,
  WithNoLink,
  WithHorizontalOrientationBase,
  WithHorizontalLeftOrientation,
  WithHorizontalLeftOrientationTabletBrkpt,
  WithHorizontalRightOrientation,
  WithHorizontalRightOrientationTabletBrkpt,
  WithHalfHorizontal,
  WithThirdHorizontal,
  WithFourthHorizontal,
  WithGreenBg,
  WithPurpleBg,
  WithOrangeBg,
  WithRedBg,
};
