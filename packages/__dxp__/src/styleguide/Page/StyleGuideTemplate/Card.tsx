import React from 'react';
import { flowHoc, replaceWith, on } from '@bodiless/fclasses';
import {
  asStyleGuideTemplateToken,
  vitalStyleGuideTemplate,
} from '@bodiless/vital-templates';
import { asFluidToken } from '@bodiless/vital-elements';
import { CardClean } from '@bodiless/vital-card';
import { listerineCardHero, listerineCardProduct } from '../../../components';
import {
  StyleGuideExamplesClean,
  vitalStyleGuideExamples,
} from '../../Examples';

const listerineCardFlowContainer = asFluidToken({
  ...vitalStyleGuideExamples.Default,
  Layout: {
    ...vitalStyleGuideExamples.Default.Layout,
    Wrapper: 'grid lg:grid-cols-1 gap-4',
  },
  Components: {
    // Hero Cards  (homepage design). (TOP of page)
    Hero: on(CardClean)(listerineCardHero.HeroRightCard),
    // Product Category Cards (homepage design). ("in Our Products Section")
    ProductCategory: on(CardClean)(listerineCardProduct.ProductCategory),
    ProductCategory2: on(CardClean)(listerineCardProduct.ProductCategory),
    ProductCategory3: on(CardClean)(listerineCardProduct.ProductCategory),
    ProductCategory4: on(CardClean)(listerineCardProduct.ProductCategory),
    // Product cards  (homepage design)  ("in Best Sellers Section")
    // - Add a WTB Button that when clicked has no action.
    Product: on(CardClean)(listerineCardProduct.Product),
    Product2: on(CardClean)(listerineCardProduct.Product),
    Product3: on(CardClean)(listerineCardProduct.Product),
    Product4: on(CardClean)(listerineCardProduct.Product),
  },
});

export const Card = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: flowHoc.meta.term('Token')('Card'),
  Content: {
    Title: replaceWith(() => <>Cards Variation</>),
    Description: replaceWith(() => null),
    Examples: on(StyleGuideExamplesClean)(listerineCardFlowContainer),
  },
});
