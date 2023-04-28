import React from 'react';
import { asSectionToken, SectionClean } from '@kenvue/dxp-section';
import {
  flowHoc, addClasses, addProps, as, removeClasses
} from '@bodiless/fclasses';
import { useNode } from '@bodiless/core';
import { listerineSectionProductCollection, listerineSectionProduct } from '..';

const WithListerineSectionCollectionOurProducts = asSectionToken({
  Theme: {
    Wrapper: 'border-b border-slate-300 py-10',
    Link: removeClasses('text-interactive-primary'),
  },
  Layout: {
    Wrapper: 'overflow-x-auto',
    Content: flowHoc(
      addClasses('block md:flex md:flex-wrap md:justify-start'),
      addProps({
        'product-collections': [
          'concentrate', 'toothpaste', 'mouthwash', 'on-the-go'
          // 'antiseptic',
          // 'on-the-go',
          // 'product-collection-31z1z2fz',
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
    Wrapper: 'border-b border-slate-300 py-10',
  },
  Layout: {
    Content: flowHoc(
      addClasses('block md:flex md:flex-wrap md:justify-start'),
      addProps({
        products: [
          '5JLJSAJn9wuHnoWLyP3Lg5', '6fAXdpJM6ibblpTiO4JOqi', '4wjOoQHFSAqePnJMpNKEqg', '11gcuXew6vue7doHKlCE81',
          // 'Gwn1B6VKTaWjGzbA7u87F', '1lJJzimyx1dNdqZs52jFRm',
        ],
      }),
    ),
  },
  Content: {
    Title: addProps({ children: 'Best Sellers'}),
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

const useIsHomePage = () => (
  useNode().node.pagePath === '/'
  //  || useNode().node.pagePath === `/${useLanguageContext().getCurrentLanguage().name}/`
);

export default () => (
  useIsHomePage() ? (
    <>
      <ListerineSectionCollectionOurProducts />
      <ListerineSectionBestSeller />
    </>
  )
    : (
      <>Main Content</>
    )
);
