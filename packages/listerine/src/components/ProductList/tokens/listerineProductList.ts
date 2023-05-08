import { asListToken } from '@bodiless/vital-list';
import { dxpProductListBase as dxpProductList } from '@kenvue/dxp-product';
import { on } from '@bodiless/fclasses';
import { CardClean } from '@bodiless/vital-card';
import { listerineCard } from '../../Card';

const ProductCards = asListToken({
  ...dxpProductList.ProductCards,
  Components: {
    ...dxpProductList.ProductCards.Components,
    Title: on(CardClean)(listerineCard.Product),
  },
  Layout: {
    Item: 'w-full md:w-1/4',
  },
});

const ProductCollectionCards = asListToken({
  ...dxpProductList.ProductCollectionCards,
  Components: {
    Title: on(CardClean)(listerineCard.ProductCategory),
  },
  Layout: {
    Item: 'w-full flex flex-grow xl:w-1/4 md:w-1/2 md:px-4',
  },
  Spacing: {
    Item: 'md:mt-6',
  }
});

export default {
  ProductCards,
  ProductCollectionCards,
};
