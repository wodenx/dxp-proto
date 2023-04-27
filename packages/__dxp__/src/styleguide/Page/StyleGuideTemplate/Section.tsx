import React from 'react';
import { vitalTypography } from '@bodiless/vital-elements';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import {
  flowHoc,
  H2,
  replaceWith,
  as,
  addClasses,
  addProps,
  Hr,
} from '@bodiless/fclasses';
import { dxpProductSection } from '@kenvue/dxp-product';
import { SectionClean, asSectionToken } from '@kenvue/dxp-section';
import {
  listerineSectionProduct,
  listerineSectionProductCollection,
  listerineSectionSocialWall,
} from '../../../components';

// {{{ ** Product Sections **

const WithSectionProductCardPocket = asSectionToken({
  Spacing: {
    Wrapper: 'py-12',
  },
  Theme: {
    Wrapper: 'border-b-4 border-slate-300',
  },
  Layout: {
    Wrapper: 'overflow-x-auto',
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

const WithSectionProductCardZero = asSectionToken({
  Spacing: {
    Wrapper: 'py-12',
  },
  Theme: {
    Wrapper: 'border-b-4 border-slate-300',
  },
  Layout: {
    Wrapper: 'overflow-x-auto',
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

const WithSectionProductCardCool = asSectionToken({
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

const WithSectionProductCardCoolReordered = asSectionToken({
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
  WithSectionProductCardCool,
)(SectionClean);

const ProductCardSectionCoolReordered = as(
  dxpProductSection.ProductCards,
  WithSectionProductCardCoolReordered,
)(SectionClean);

const ProductCardSectionZero = as(
  dxpProductSection.ProductCards,
  WithSectionProductCardZero,
)(SectionClean);

const ProductCardSectionPocket = as(
  dxpProductSection.ProductCards,
  WithSectionProductCardPocket,
)(SectionClean);

// }}} ** Product Sections **
// {{{ ** Product Collection Sections **

const WithCollectionSelectedCollections = asSectionToken({
  Spacing: {
    Wrapper: 'py-12 border-b-4 border-slate-300',
  },
  Layout: {
    Wrapper: 'overflow-x-auto',
    Content: flowHoc(
      addClasses('flex'),
      addProps({
        'product-collections': [
          'concentrate',
          'toothpaste',
          'product-collection-w/o-image',
          'mouthwash',
          'concentrate',
          'not-a-collection',
          'mouthwash',
          'mouthwash',
          'antiseptic',
        ],
      }),
    ),
  },
  Content: {
    Title: addProps({ children: 'Selected Collections' }),
  },
});

const WithCollectionDefault = asSectionToken({
  Spacing: {
    Wrapper: 'py-12 border-b-4 border-slate-300',
  },
  Layout: {
    Wrapper: 'overflow-x-auto',
    Content: flowHoc(
      addClasses('flex'),
    ),
  },
  Content: {
    Title: addProps({ children: 'Default collection section'}),
  },
});
const CollectionCardSectionSelected = as(
  dxpProductSection.ProductCollectionCards,
  WithCollectionSelectedCollections,
)(SectionClean);

const CollectionCardSectionDefault = as(
  dxpProductSection.ProductCollectionCards,
  WithCollectionDefault,
)(SectionClean);

// }}} ** Product Collection Sections **
// {{{ ** Listerine Sections **

const WithListerineSectionCollectionOurProducts = asSectionToken({
  Theme: {
    Wrapper: 'border-b-4 border-slate-300 py-4',
  },
  Layout: {
    Wrapper: 'overflow-x-auto',
    Content: flowHoc(
      addClasses('block md:flex md:flex-wrap md:justify-start'),
      addProps({
        'product-collections': [
          'concentrate', 'toothpaste', 'mouthwash', 'on-the-go',
          'product-collection-31z1z2fz',
        ],
      }),
    ),
  },
  Content: {
    Title: addProps({ children: 'Our Products'}),
    Description: addProps({ children: 'Experience the feeling of a million germs* zapped in seconds with LISTERINE®'}),
    Link: addProps({ children: 'All Products'}),
  },
});

const WithListerineSectionProductBestSeller = asSectionToken({
  Theme: {
    Wrapper: 'border-b-4 border-slate-300 py-4',
  },
  Layout: {
    Content: flowHoc(
      addClasses('block md:flex md:flex-wrap md:justify-start'),
      addProps({
        products: [
          '5JLJSAJn9wuHnoWLyP3Lg5', '6fAXdpJM6ibblpTiO4JOqi', '4wjOoQHFSAqePnJMpNKEqg',
          '11gcuXew6vue7doHKlCE81', 'Gwn1B6VKTaWjGzbA7u87F', '1lJJzimyx1dNdqZs52jFRm',
        ],
      }),
    ),
  },
  Content: {
    Title: addProps({ children: 'Best Sellers'}),
  },
});

const WithListerineSectionSocialWall = asSectionToken({
  Theme: {
    Wrapper: 'border-b-4 border-slate-300 py-4',
  },
  Layout: {
    Content: flowHoc(
      addClasses('block md:flex md:flex-wrap md:justify-between'),
    ),
  },
  Content: {
    Title: addProps({ children: 'Show us how you swish'}),
    Link: addProps({ children: 'Find us on Instagram'}),
  },
});

const ListerineSectionCollectionOurProducts = as(
  listerineSectionProductCollection.ProductCollection,
  WithListerineSectionCollectionOurProducts,
)(SectionClean);

const ListerineSectionBestSeller = as(
  listerineSectionProduct.Product,
  WithListerineSectionProductBestSeller,
)(SectionClean);

const ListerineSectionSocialWall = as(
  listerineSectionSocialWall.SocialWall,
  WithListerineSectionSocialWall,
)(SectionClean);

// }}} ** Listerine Sections **

const Subtitle = as(
  vitalTypography.H2,
  'pt-8',
)(H2);
const Separator = as(
  'pt-8',
)(Hr);

const Examples = () => (
  <>
    <Subtitle>Listerine Sections</Subtitle>
    <Separator />
    <ListerineSectionCollectionOurProducts />
    <ListerineSectionBestSeller />
    <ListerineSectionSocialWall />
    <Subtitle>Product Category Sections</Subtitle>
    <Separator />
    <CollectionCardSectionDefault />
    <CollectionCardSectionSelected />
    <Subtitle>Product Card Sections</Subtitle>
    <Separator />
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
