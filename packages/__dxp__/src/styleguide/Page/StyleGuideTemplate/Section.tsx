import React from 'react';
import { vitalTypography } from '@bodiless/vital-elements';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import {
  flowHoc,
  H2,
  replaceWith,
  as,
} from '@bodiless/fclasses';
import { dxpProductSection } from '@kenvue/dxp-product';
import { SectionClean, asSectionToken } from '@kenvue/dxp-section';
import { withNode, withNodeKey } from '@bodiless/core';
import {
  listerineSectionProduct,
  listerineSectionProductCollection,
} from '../../../components';

const ProductCardSectionExample = asSectionToken({
  Spacing: {
    Wrapper: 'py-12',
  },
  Theme: {
    Wrapper: 'border-b-4 border-slate-300',
  },
  Layout: {
    Content: 'flex',
  },
  Schema: {
    _: withNode,
  },
});

const ProductExample = as(
  dxpProductSection.ProductCards,
  ProductCardSectionExample,
  listerineSectionProduct.Product,
  asSectionToken({
    Schema: {
      _: withNodeKey('product'),
    }
  }),
)(SectionClean);

const CollectionExample = as(
  dxpProductSection.ProductCollectionCards,
  listerineSectionProductCollection.ProductCollection,
  ProductCardSectionExample,
  asSectionToken({
    Schema: {
      _: withNodeKey('collection'),
    }
  }),
)(SectionClean);

const Subtitle = as(vitalTypography.H2, 'pt-8')(H2);

const Examples = () => (
  <>
    <Subtitle>Product Category Sections</Subtitle>
    <CollectionExample />
    <Subtitle>Product Card Sections</Subtitle>
    <ProductExample />
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
