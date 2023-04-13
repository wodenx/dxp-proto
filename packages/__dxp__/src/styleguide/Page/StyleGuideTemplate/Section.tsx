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
    Wrapper: 'py-12 border-b-4 border-slate-300',
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
    Title: addProps({ children: 'Best Sellers (Two Products)'}),
  },
});

const WithSectionContentZero = asSectionToken({
  Spacing: {
    Wrapper: 'py-12 border-b-4 border-slate-300',
  },
  Layout: {
    Content: flowHoc(
      addClasses('flex'),
      addProps({
        products: ['5JLJSAJn9wuHnoWLyP3Lg5', '6fAXdpJM6ibblpTiO4JOqi', '4wjOoQHFSAqePnJMpNKEqg', '11gcuXew6vue7doHKlCE81'],
      }),
    ),
  },
  Content: {
    Title: addProps({ children: 'Best Sellers (Four Products)'}),
  },
});

const WithSectionContentCool = asSectionToken({
  Spacing: {
    Wrapper: 'py-12 border-b-4 border-slate-300',
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
    Title: addProps({ children: 'Best Sellers (Three Products: Cool Mint)'}),
  },
});

const WithSectionContentCoolReordered = asSectionToken({
  Spacing: {
    Wrapper: 'py-12 border-slate-300',
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
    Title: addProps({ children: 'Best Sellers (Three Products: Cool Mint Reordered)'}),
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
