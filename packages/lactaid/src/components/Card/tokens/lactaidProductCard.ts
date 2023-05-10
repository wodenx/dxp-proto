import { asCardToken, vitalCardBase } from '@bodiless/vital-card';
import {
  addProps,
  as,
  H5,
  Img,
  on,
  replaceWith,
  Span,
  startWith,
  withDesign,
} from '@bodiless/fclasses';
import { lactaidTypography } from '../../Typography';
import { lactaidColor } from '../../Color';
import * as lactaidCardBase from './lactaidBaseCard';

const Product = asCardToken(
  lactaidCardBase.Default,
  lactaidCardBase.WithPrimaryButton,
  vitalCardBase.WithNoDescription,
  {
    Components: {
      EyebrowWrapper: replaceWith(() => null),
      TitleWrapper: startWith(H5),
      Rating: on(Img)(
        addProps({
          src: 'https://i.ibb.co/fnG4Q5K/rating.png',
          alt: 'Stars with 4.7 rating, out of 5 max.',
          title: 'Rating stars',
        }),
      ),
    },
    Layout: {
      Image: 'w-full',
      ContentWrapper: 'h-3/4',
      Rating: 'w-36 max-w-48',
    },
    Theme: {
      ImageWrapper: lactaidColor.BgSecondaryBrand,
      CTALink: lactaidTypography.WhiteLink,
      // TitleWrapper: 'leading-none',
      Title: lactaidTypography.H5,
      ContentWrapper: as(
        lactaidColor.BgPrimaryCard,
        lactaidColor.BgSecondaryFooter,
      ),
    },
    Spacing: {
      ...lactaidCardBase.Default.Spacing,
      ImageWrapper: 'p-0',
      ContentWrapper: 'px-3 py-6 lg:px-5 lg:py-8 lg:pb-9',
      TitleWrapper: 'mb-2.5 lg:mb-2',
      Rating: 'mb-3 lg:mb-6',
      CTALink: 'px-3',
    },
    Content: {
      CTALink: withDesign({
        Body: as(replaceWith(Span), addProps({ children: 'where to buy' })),
      }),
    },
  },
);

export { Product };
