import { flowHoc, replaceWith, on } from '@bodiless/fclasses';
import {
  asStyleGuideTemplateToken,
  vitalStyleGuideTemplate,
} from '@bodiless/vital-templates';
import { asFluidToken } from '@bodiless/vital-elements';
import { CardClean } from '@bodiless/vital-card';
import {
  listerineCardHero,
  listerineCardProduct,
  listerineSpacing,
  listerineTypography,
} from '../../../components';
import {
  StyleGuideExamplesClean,
  vitalStyleGuideExamples,
} from '../../Examples';

const listerineCardFlowContainer = asFluidToken(vitalStyleGuideExamples.Card, {
  Components: {
    Hero: on(CardClean)(listerineCardHero.HeroRightCard),
    Products: on(StyleGuideExamplesClean)(
      asFluidToken(
        vitalStyleGuideExamples.WithFourColumnGrid,
        vitalStyleGuideExamples.WithMargin,
        {
          Components: {
            ProductCategory: on(CardClean)(
              listerineCardProduct.ProductCategory,
            ),
            ProductCategory2: on(CardClean)(
              listerineCardProduct.ProductCategory,
            ),
            ProductCategory3: on(CardClean)(
              listerineCardProduct.ProductCategory,
            ),
            ProductCategory4: on(CardClean)(
              listerineCardProduct.ProductCategory,
            ),
            Product: on(CardClean)(listerineCardProduct.Product),
            Product2: on(CardClean)(listerineCardProduct.Product),
            Product3: on(CardClean)(listerineCardProduct.Product),
            Product4: on(CardClean)(listerineCardProduct.Product),
          },
          Theme: {
            ItemTitle: listerineTypography.H6,
          },
        },
      ),
    ),
  },
});

export const Card = asStyleGuideTemplateToken({
  ...vitalStyleGuideTemplate.Default,
  Meta: flowHoc.meta.term('Token')('Card'),
  Content: {
    ...vitalStyleGuideTemplate.Default.Content,
    Title: replaceWith(() => null),
    Description: replaceWith(() => null),
    Examples: on(StyleGuideExamplesClean)(listerineCardFlowContainer),
  },
  Theme: {
    ...vitalStyleGuideTemplate.Default.Theme,
    Container: 'mx-0',
  },
});
