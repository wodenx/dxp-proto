// @todo shold be named listerineProductCard, not listerineCardProduct OR should just be part of listerineCard.
import { asCardToken, vitalCardBase } from '@bodiless/vital-card';
import {
  addProps,
  as,
  Div,
  Img,
  on,
  replaceWith,
  Span,
  withDesign,
} from '@bodiless/fclasses';
import { vitalTextDecoration } from '@bodiless/vital-elements';
import { listerineTypography } from '../../Typography';
import { listerineColor } from '../../Color';
import { listerineFontSize } from '../../FontSize';
import * as listerineCardBase from './Base';

const ProductCategory = asCardToken(
  {
    ...listerineCardBase.Default,
    Components: {
      ...listerineCardBase.Default.Components,
      CTAWrapper: replaceWith(Div),
    },
    Theme: {
      ...listerineCardBase.Default.Theme,
      Title: as(
        listerineFontSize.XXL,
        vitalTextDecoration.Normal,
        listerineColor.TextWhite,
        'font-gotham'
      ),
      Link: as(
        listerineTypography.Link,
        listerineTypography.WithTertiaryHover
      ),
      ContentWrapper: as(listerineColor.BgPrimaryBrand, 'rounded-bl-[20px]'),
    },
    Spacing: {
      ContentWrapper: 'px-4.75 py-6 lg:px-6 lg:py-4.75',
      Image: 'w-full',
    },
  },
  vitalCardBase.WithPrimaryTextLink,
  vitalCardBase.WithNoDescription,
  vitalCardBase.WithNoEyebrow,
);

const Product = asCardToken(
  listerineCardBase.Default,
  listerineCardBase.WithPrimaryButton,
  vitalCardBase.WithNoDescription,
  // vitalCardBase.WithNoEyebrow,
  {
    Components: {
      Eyebrow: replaceWith(Span),
      Rating: on(Img)(
        addProps({
          src: 'https://i.ibb.co/QHNZGn6/reviews.png',
          alt: 'Stars with 4.1 rating, out of 5 max.',
          title: 'Rating stars',
        }),
        'max-w-100',
      ),
    },
    Theme: {
      ImageWrapper: as(listerineColor.BorderSecondary, 'border-b border-2'),
      CTALink: listerineTypography.WithHoverArrow,
      TitleWrapper: 'leading-none lg:leading-none',
      Title: as(
        listerineFontSize.LG,
        vitalTextDecoration.Normal,
        'font-gotham',
      ),
      ContentWrapper: as(
        listerineColor.BgPrimaryCard,
        listerineColor.BorderSecondary,
        'border-t border-2',
      ),
    },
    Spacing: {
      ContentWrapper: 'p-6 lg:px-6.5 lg:py-5.5 lg:pb-6',
      TitleWrapper: 'mb-2.5 lg:mb-2',
      Rating: 'mb-5.5 lg:mb-6',
    },
    Content: {
      Eyebrow: addProps({ children: 'Dentist Recommended' }),
      CTALink: withDesign({
        Body: as(replaceWith(Span), addProps({ chidren: 'where to buy' })),
      }),
    },
  },
);

export { ProductCategory, Product };
