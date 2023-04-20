import React, { ComponentType } from 'react';
import { ProductDataTransformer } from '@kenvue/dxp-product';
import type { ProductQueryData, DxpProductCardData, DxpProductCollectionCardData } from '@kenvue/dxp-product';
import type { PageProps } from '@bodiless/gatsby-theme-bodiless';
import { useProductData } from './hooks';

const productDataMap = (data: ProductQueryData) => {
  const { edges } = data;
  const allProducts = edges.reduce((acc: DxpProductCardData[], cur) => {
    const { node } = cur;
    const product = ProductDataTransformer.transformProductCard(node);
    acc.push(product);
    return acc;
  }, []);
  const allCollections = edges.reduce((acc: DxpProductCollectionCardData[], cur) => {
    const { node } = cur;
    const collection = ProductDataTransformer.transformProductCategory(node);
    acc.push(collection);
    return acc;
  }, []);
  return {
    edges: [
      {
        node:
          {
            name: 'allCollections',
            content: JSON.stringify(allCollections),
          },
      },
      {
        node:
          {
            name: 'allProducts',
            content: JSON.stringify(allProducts),
          },
      }
    ],
  };
};

export const withProductData = (Component: ComponentType<PageProps>) => {
  const WithProductData = (props: PageProps) => {
    const { data, ...rest } = props;
    const pdata = useProductData();
    if (!pdata.edges) {
      return <Component {...props} />;
    }
    const data$ = {
      ...data,
      Products: productDataMap(pdata),
    };
    return <Component {...rest} data={data$} />;
  };
  return WithProductData;
};
