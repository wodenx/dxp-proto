import React from 'react';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import {
  flowHoc,
  replaceWith,
  as,
  addClasses,
  addProps,
} from '@bodiless/fclasses';
import { SectionClean, asSectionToken } from '@kenvue/dxp-section';
import {
  lactaidSection,
} from '../../../components';

const WithLactaidSectionProductFavorites = asSectionToken({
  Theme: {
    Wrapper: 'py-10',
  },
  Layout: {
    Content: flowHoc(
      addClasses('block grid lg:grid-cols-4 gap-4'),
      addProps({
        products: [
          '4sBlRucCv54vLYdzvtI8g3', '5EMSutNUu7ekZcMdwhtjnz', '6Iz936uVJrYaQdeDavRRki',
          '6i12gn672LefAkAMS6MMWH',
        ],
      }),
    ),
  },
  Content: {
    Title: addProps({ children: 'Get Your Favorite LACTAID® Products'}),
    Link: addProps({ children: 'View All Products'}),
  },
});

const LactaidSectionGetYourFavorites = as(
  lactaidSection.ProductCards,
  WithLactaidSectionProductFavorites,
)(SectionClean);

const Examples = () => (
  <>
    <LactaidSectionGetYourFavorites />
  </>
);

export const Section = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: flowHoc.meta.term('Token')('Section'),
  Spacing: {
    TitleWrapper: 'py-6',
  },
  Content: {
    Title: replaceWith(() => <>Section Examples</>),
    Description: replaceWith(() => null),
    Examples: replaceWith(Examples),
  },
});
