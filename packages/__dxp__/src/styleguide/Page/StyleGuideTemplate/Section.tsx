import React from 'react';
import { vitalTypography } from '@bodiless/vital-elements';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import {
  flowHoc,
  H2,
  replaceWith,
  as,
  addClasses,
  addProps
} from '@bodiless/fclasses';
import { dxpProductSection } from '@kenvue/dxp-product';
import { SectionClean, asSectionToken } from '@kenvue/dxp-section';

const WithSectionContentPocket = asSectionToken({
  Spacing: {
    Wrapper: 'pt-12',
  },
  Layout: {
    Content: flowHoc(
      addClasses('flex'),
      addProps({
        products: ['11gcuXew6vue7doHKlCE81', '6eXQKMmPXeOgBblBssQqdL'],
      }),
    ),
  },
  Content: {
    Title: addProps({ children: 'LISTERINE® POCKETMIST and LISTERINE® POCKETPAKS'}),
  },
});

const WithSectionContentZero = asSectionToken({
  Spacing: {
    Wrapper: 'pt-12',
  },
  Layout: {
    Content: flowHoc(
      addClasses('flex'),
      addProps({
        products: ['5JLJSAJn9wuHnoWLyP3Lg5', '6fAXdpJM6ibblpTiO4JOqi', '4wjOoQHFSAqePnJMpNKEqg'],
      }),
    ),
  },
  Content: {
    Title: addProps({ children: 'LISTERINE® COOL MINT® ZERO'}),
  },
});

const WithSectionContentCool = asSectionToken({
  Spacing: {
    Wrapper: 'pt-8',
  },
  Layout: {
    Content: flowHoc(
      addClasses('flex'),
      addProps({
        products: ['5JLJSAJn9wuHnoWLyP3Lg5', '6eXQKMmPXeOgBblBssQqdL', '6fAXdpJM6ibblpTiO4JOqi'],
      }),
    ),
  },
  Content: {
    Title: addProps({ children: 'LISTERINE® COOL MINT®'}),
  },
});

const WithSectionContentCoolReordered = asSectionToken({
  Spacing: {
    Wrapper: 'pt-8',
  },
  Layout: {
    Content: flowHoc(
      addClasses('flex'),
      addProps({
        products: ['6fAXdpJM6ibblpTiO4JOqi', '5JLJSAJn9wuHnoWLyP3Lg5', '6eXQKMmPXeOgBblBssQqdL'],
      }),
    ),
  },
  Content: {
    Title: addProps({ children: 'LISTERINE® COOL MINT® Reordered'}),
  },
});

const ProductCardSectionCool = as(
  dxpProductSection.ProductCards,
  WithSectionContentCool,
)(SectionClean);

const ProductCardSectionCoolReordered = as(
  dxpProductSection.ProductCards,
  WithSectionContentCoolReordered,
)(SectionClean);

const ProductCardSectionZero = as(
  dxpProductSection.ProductCards,
  WithSectionContentZero,
)(SectionClean);

const ProductCardSectionPocket = as(
  dxpProductSection.ProductCards,
  WithSectionContentPocket,
)(SectionClean);

const Subtitle = as(vitalTypography.H2, 'pt-8')(H2);

const Examples = () => (
  <>
    <Subtitle>Product Card Section</Subtitle>
    <ProductCardSectionPocket />
    <ProductCardSectionZero />
    <ProductCardSectionCool />
    <ProductCardSectionCoolReordered />
  </>
);

export const Section = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: flowHoc.meta.term('Token')('Section'),
  Content: {
    Title: replaceWith(() => <>Section Examples</>),
    Description: replaceWith(() => null),
    Examples: replaceWith(Examples),
  },
});
