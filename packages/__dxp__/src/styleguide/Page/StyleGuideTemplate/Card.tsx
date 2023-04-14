import React from 'react';
import { flowHoc, replaceWith, on } from '@bodiless/fclasses';
import {
  asStyleGuideTemplateToken,
  vitalStyleGuideTemplate,
} from '@bodiless/vital-templates';
import { asFluidToken } from '@bodiless/vital-elements';
import { CardClean } from '@bodiless/vital-card';
import { listerineCard } from '../../../components';
import {
  StyleGuideExamplesClean,
  vitalStyleGuideExamples,
} from '../../Examples';

const listerineCardFlowContainer = asFluidToken(
  {
    ...vitalStyleGuideExamples.Default,
    Layout: {
      ...vitalStyleGuideExamples.Default.Layout,
      Wrapper: 'grid grid-cols-4 gap-4'
    },
    Components: {
      // Hero Cards  (homepage design). (TOP of page)
      // - responsive behavior:  Hero/Horizontal cards are stacked only on mobile
      Hero: on(CardClean)(listerineCard.HeroRightCard),
      // Product Category Cards (homepage design). ("in Our Products Section")
      ProductCategory: on(CardClean)(listerineCard.Default),
      // Product cards  (homepage design)  ("in Best Sellers Section")
      // - Add a placeholder image for reviews and this is non-functional
      // - Add a WTB Button that when clicked has no action.
      Product: on(CardClean)(listerineCard.Default),
    },
  },
);

export const Card = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: flowHoc.meta.term('Token')('Card'),
  Content: {
    Title: replaceWith(() => <>Cards Variation</>),
    Description: replaceWith(() => null),
    Examples: on(StyleGuideExamplesClean)(listerineCardFlowContainer),
  },
});
