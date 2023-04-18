import { asCardToken, vitalCardBase } from '@bodiless/vital-card';
import {
  addClasses,
  addProps,
  as,
  Img,
  on,
  replaceWith,
} from '@bodiless/fclasses';
import { vitalTextDecoration } from '@bodiless/vital-elements';
import { listerineTypography } from '../../../Typography';
import * as listerineCardBase from './Base';
import { listerineColor } from '../../../Color';
import { listerineFontSize } from '../../../FontSize';

const ProductCategory = asCardToken({
  ...listerineCardBase.Default,
  Components: {
    ...listerineCardBase.Default.Components,
    Eyebrow: replaceWith(() => null),
  },
  Theme: {
    ...listerineCardBase.Default.Theme,
    Title: as(
      listerineFontSize.XXL,
      vitalTextDecoration.Normal,
      listerineColor.TextWhite,
      'font-gotham'
    ),
    Description: as(listerineTypography.Link),
    ContentWrapper: as(listerineColor.BgPrimaryBrand, 'rounded-bl-[20px]'),
  },
  Spacing: {
    ContentWrapper: 'px-4.75 py-6 lg:px-6 lg:py-4.75',
  },
});

const Product = asCardToken(
  listerineCardBase.Default,
  listerineCardBase.WithPrimaryButton,
  vitalCardBase.WithNoTitle,
  {
    Components: {
      Rating: on(Img)(
        addProps({
          src: 'https://i.ibb.co/QHNZGn6/reviews.png',
          alt: 'Stars with 4.1 rating, out of 5 max.',
          title: 'Rating stars',
        }),
        addClasses('max-w-100'),
      ),
    },
    Theme: {
      ImageWrapper: as(listerineColor.BorderSecondary, 'border-b border-2'),
      CTALink: listerineTypography.WithHoverArrow,
      Description: as(
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
      Description: 'mb-2.5 lg:mb-2',
      Rating: 'mb-5.5 lg:mb-6',
    },
  },
);

export { ProductCategory, Product };
