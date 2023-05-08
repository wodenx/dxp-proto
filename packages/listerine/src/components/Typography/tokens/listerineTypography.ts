import { as } from '@bodiless/fclasses';
import { asElementToken, vitalTextDecoration } from '@bodiless/vital-elements';
import { listerineColor } from '../../Color';
import { listerineFontSize } from '../../FontSize';

const Meta = {
  categories: {
    Type: ['Element'],
    Group: ['Typography'],
  },
};

const H1 = asElementToken({
  Meta,
  Core: {
    _: as(
      listerineFontSize.XXXXXL,
      vitalTextDecoration.Medium,
      'font-knockout',
    ),
  },
  Theme: {
    _: listerineColor.TextPrimaryHeaderCopy,
  },
});

const H2 = asElementToken({
  Meta,
  Core: {
    _: as(
      listerineFontSize.XXXXL,
      vitalTextDecoration.Bold,
      'font-knockout'
    ),
  },
  Theme: {
    _: listerineColor.TextPrimaryHeaderCopy,
  },
});

const H3 = asElementToken({
  Meta,
  Core: {
    _: as(
      listerineFontSize.XXXL,
      vitalTextDecoration.Bold,
      'font-knockout'
    ),
  },
  Theme: {
    _: listerineColor.TextPrimaryHeaderCopy,
  },
});

const H4 = asElementToken({
  Meta,
  Core: {
    _: as(
      listerineFontSize.XXL,
      vitalTextDecoration.Normal,
      'font-gotham'
    ),
  },
  Theme: {
    _: listerineColor.TextPrimaryHeaderCopy,
  },
});

const H5 = asElementToken({
  Meta,
  Core: {
    _: as(
      listerineFontSize.XL,
      vitalTextDecoration.Bold,
      'font-knockout'
    ),
  },
  Theme: {
    _: listerineColor.TextPrimaryHeaderCopy,
  },
});

const H6 = asElementToken({
  Meta,
  Core: {
    _: as(
      listerineFontSize.LG,
      vitalTextDecoration.Medium,
      'font-gotham'
    ),
  },
  Theme: {
    _: listerineColor.TextPrimaryBodyCopy,
  },
});

const Body = asElementToken({
  Meta,
  Core: {
    _: as(listerineFontSize.Base, 'font-gotham'),
  },
  Theme: {
    _: as(
      vitalTextDecoration.Normal,
      listerineColor.TextPrimaryBodyCopy
    ),
  },
});

const Eyebrow = asElementToken({
  Meta,
  Core: {
    _: as(listerineFontSize.XS, 'font-gotham'),
  },
  Theme: {
    _: as(
      listerineColor.TextSecondaryEyebrow,
      vitalTextDecoration.Uppercase,
      vitalTextDecoration.Bold,
    ),
  },
});

const CrumbsReviews = asElementToken({
  Meta,
  Core: {
    _: as(listerineFontSize.XS, 'font-gotham'),
  },
  Theme: {
    _: as(
      listerineColor.TextPrimaryBodyCopy,
      vitalTextDecoration.Medium
    ),
  },
});

const Link = asElementToken({
  Meta,
  Core: {
    _: as(
      listerineFontSize.Base,
      'font-gotham'
    ),
  },
  Theme: {
    _: as(
      vitalTextDecoration.Bold,
      vitalTextDecoration.Uppercase,
      listerineColor.TextPrimaryInteractive,
    ),
  },
});

const WhiteLink = asElementToken({
  ...Link,
  Theme: {
    _: as(
      vitalTextDecoration.Bold,
      vitalTextDecoration.Uppercase,
      listerineColor.TextWhite,
    ),
  },
});

const WithHoverArrow = asElementToken({
  Layout: {
    _: 'items-center'
  },
  Theme: {
    _: 'hover:vital-arrow',
  },
});

const WithTertiaryHover = asElementToken({
  Theme: {
    _: listerineColor.WithTextTertiaryHover,
  },
});

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Body,
  Eyebrow,
  CrumbsReviews,
  Link,
  WhiteLink,
  WithHoverArrow,
  WithTertiaryHover
};
