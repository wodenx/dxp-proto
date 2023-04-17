import { asCardToken, vitalCardBase } from '@bodiless/vital-card';
import { as, on, removeClasses } from '@bodiless/fclasses';
import { vitalTextDecoration } from '@bodiless/vital-elements';
import { listerineTypography } from '../../../Typography';
import * as listerineCardBase from './Base';
import { listerineColor } from '../../../Color';
import { listerineFontSize } from '../../../FontSize';
import { listerineRatingsBase, RatingsClean } from '../../../Ratings';

const ProductCategory = asCardToken(
  listerineCardBase.Default,
  vitalCardBase.WithNoEyebrow,
  {
    Theme: {
      Title: as(listerineTypography.H4, listerineColor.TextWhite),
      Description: as(listerineTypography.Link),
      ContentWrapper: as(listerineColor.BgPrimaryBrand, 'rounded-bl-[20px]'),
    },
    Spacing: {
      ContentWrapper: 'px-4.75 py-6 lg:px-6 lg:py-4.75',
    },
    Behavior: {
      Title: removeClasses('text-primary-header-copy'),
      Description: removeClasses('text-primary-body-copy'),
    },
  },
);

const Product = asCardToken(
  listerineCardBase.Default,
  listerineCardBase.WithPrimaryButton,
  vitalCardBase.WithNoTitle,
  {
    Components: {
      Rating: on(RatingsClean)(listerineRatingsBase.Default),
    },
    Theme: {
      ImageWrapper: as(listerineColor.BorderSecondary, 'border-b border-2'),
      CTALink: as(
        listerineCardBase.Default.Theme.CTALink,
        'items-center hover:vital-arrow',
      ),
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
