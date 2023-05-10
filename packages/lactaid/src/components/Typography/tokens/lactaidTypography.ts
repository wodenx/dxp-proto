import { as } from '@bodiless/fclasses';
import { asElementToken, vitalTypographyBase } from '@bodiless/vital-elements';
import { lactaidTextDecoration } from '../../TextDecoration';
import { lactaidColor } from '../../Color';
import { lactaidFontSize } from '../../FontSize';

const Meta = {
  categories: {
    Type: ['Element'],
    Group: ['Typography'],
  },
};

const H1 = asElementToken({
  Meta,
  Core: {
    _: as(lactaidFontSize.XXXL, lactaidTextDecoration.Normal, 'font-abril'),
  },
  Theme: {
    _: lactaidColor.TextPrimaryHeaderCopy,
  },
});

const H2 = asElementToken({
  Meta,
  Core: {
    _: as(
      lactaidFontSize.XXL,
      lactaidTextDecoration.Black,
      'font-gotham',
    ),
  },
  Theme: {
    _: lactaidColor.TextPrimaryHeaderCopy,
  },
});

const H3 = asElementToken({
  Meta,
  Core: {
    _: as(lactaidFontSize.XL, lactaidTextDecoration.Bold, 'font-gotham'),
  },
  Theme: {
    _: lactaidColor.TextPrimaryHeaderCopy,
  },
});

const H4 = asElementToken({
  Meta,
  Core: {
    _: as(lactaidFontSize.LG, lactaidTextDecoration.Medium, 'font-gotham'),
  },
  Theme: {
    _: lactaidColor.TextPrimaryHeaderCopy,
  },
});

const H5 = asElementToken({
  Meta,
  Core: {
    _: as(lactaidFontSize.Base, lactaidTextDecoration.Bold, 'font-gotham'),
  },
  Theme: {
    _: lactaidColor.TextPrimaryBodyCopy,
  },
});

const Body = asElementToken({
  Meta,
  Core: {
    _: as(lactaidFontSize.Base, 'font-gotham'),
  },
  Theme: {
    _: as(lactaidColor.TextPrimaryBodyCopy, lactaidTextDecoration.Book),
  },
});

const CrumbsReviews = asElementToken({
  Meta,
  Core: {
    _: as(lactaidFontSize.SM, 'font-gotham'),
  },
  Theme: {
    _: as(lactaidColor.TextPrimaryBodyCopy, lactaidTextDecoration.Book),
  },
});

const LegalCopy = asElementToken({
  Meta,
  Core: {
    _: as(lactaidFontSize.XS, 'font-gotham'),
  },
  Theme: {
    _: as(lactaidColor.TextPrimaryBodyCopy, lactaidTextDecoration.Book),
  },
});

const Copyright = asElementToken({
  Meta,
  Core: {
    _: as(lactaidFontSize.XS, 'font-gotham'),
  },
  Theme: {
    _: as(lactaidColor.TextPrimaryBodyCopy)
  },
});

const Link = asElementToken({
  Meta,
  Core: {
    _: as(lactaidFontSize.Base, 'font-gotham'),
  },
  Theme: {
    _: as(lactaidTextDecoration.Bold, lactaidColor.TextPrimaryInteractive),
  },
});

const WhiteLink = asElementToken({
  ...Link,
  Theme: {
    _: as(
      lactaidTextDecoration.Bold,
      lactaidTextDecoration.Uppercase,
      lactaidColor.TextWhite,
    ),
  },
});

const WithHoverArrow = asElementToken({
  Layout: {
    _: 'items-center',
  },
  Theme: {
    _: 'hover:vital-arrow',
  },
});

export default {
  ...vitalTypographyBase,
  H1,
  H2,
  H3,
  H4,
  H5,
  Body,
  CrumbsReviews,
  Copyright,
  LegalCopy,
  Link,
  WhiteLink,
  WithHoverArrow,
};
