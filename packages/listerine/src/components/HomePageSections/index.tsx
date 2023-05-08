import React from 'react';
import { asSectionToken, SectionClean } from '@kenvue/dxp-section';
import {
  flowHoc, addClasses, addProps, as, removeClasses
} from '@bodiless/fclasses';
import { dxpProductSection } from '@kenvue/dxp-product';
import { useNode } from '@bodiless/core';

const WithListerineSectionCollectionOurProducts = asSectionToken({
  Layout: {
    Wrapper: 'overflow-x-auto',
    Content: flowHoc(
      addClasses('block w-full flex flex-col sm:flex sm:flex-row sm:flex-wrap sm:justify-start'),
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
  Spacing: {
    Wrapper: 'py-10 mx-5 sm:mx-0',
  },
  Theme: {
    Wrapper: 'border-b border-primary-divider',
    Link: removeClasses('text-interactive-primary'),
  },
  Content: {
    Title: addProps({ children: 'Our Products'}),
    Description: addProps({ children: 'Experience the feeling of a million germs* zapped in seconds with LISTERINE®'}),
    Link: addProps({ children: 'All Products'}),
  },
});

const WithListerineSectionProductBestSeller = asSectionToken({
  Layout: {
    Content: flowHoc(
      addClasses('block w-full flex flex-col md:flex md:flex-row md:flex-wrap md:justify-start gap-y-5'),
      addProps({
        products: [
          '5JLJSAJn9wuHnoWLyP3Lg5', '6fAXdpJM6ibblpTiO4JOqi', '4wjOoQHFSAqePnJMpNKEqg', '11gcuXew6vue7doHKlCE81',
          // 'Gwn1B6VKTaWjGzbA7u87F', '1lJJzimyx1dNdqZs52jFRm',
        ],
      }),
    ),
  },
  Spacing: {
    Wrapper: 'py-10 mx-5 sm:mx-0',
  },
  Theme: {
    Wrapper: 'border-b border-primary-divider',
  },
  Content: {
    Title: addProps({ children: 'Best Sellers'}),
  },
});

const ListerineSectionCollectionOurProducts = as(
  dxpProductSection.ProductCollectionCards,
  WithListerineSectionCollectionOurProducts,
)(SectionClean);

const ListerineSectionBestSeller = as(
  dxpProductSection.ProductCards,
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
