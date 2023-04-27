import React from 'react';
import { asSectionToken, SectionClean } from '@kenvue/dxp-section';
import {
  flowHoc, addClasses, addProps, as
} from '@bodiless/fclasses';
import { listerineSectionProductCollection, listerineSectionProduct } from '..';

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
    Wrapper: 'border-b-4 border-slate-300 py-4',
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

export default () => (
  <>
    <ListerineSectionBestSeller />
    <ListerineSectionCollectionOurProducts />
  </>
);
