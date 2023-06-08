import { asListToken } from '@bodiless/vital-list';
import { dxpProductListBase as dxpProductList } from '@kenvue/dxp-product';
import { on } from '@bodiless/fclasses';
import { CardClean } from '@bodiless/vital-card';
import { lactaidCard } from '../../Card';

const ProductCards = asListToken({
  ...dxpProductList.ProductCards,
  Components: {
    ...dxpProductList.ProductCards.Components,
    Title: on(CardClean)(lactaidCard.Product),
  },
  Layout: {
    Item: 'w-full',
  },
});

export default {
  ProductCards,
};
