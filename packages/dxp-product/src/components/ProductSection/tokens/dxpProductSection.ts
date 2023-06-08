import {
  flowHoc,
  replaceWith,
  on,
} from '@bodiless/fclasses';
import { withPlaceholder } from '@bodiless/components';
import { ListClean } from '@bodiless/vital-list';
import { asSectionToken, dxpSection } from '@kenvue/dxp-section';
import { vitalEditorPlain } from '@bodiless/vital-editors';
import { dxpProductList } from '../../ProductList';

const Default = asSectionToken({
  ...dxpSection.Default,
  Components: {
    Title: vitalEditorPlain.Default,
    Link: replaceWith(() => null),
    Description: replaceWith(() => null),
  },
  Content: {
    Title: withPlaceholder('Product Section Title'),
  },
  Meta: flowHoc.meta.term('Token')('ProductSection'),
});

const ProductCards = asSectionToken({
  ...Default,
  Components: {
    ...Default.Components,
    Content: on(ListClean)(dxpProductList.ProductCards),
  },
  Schema: {
    ...Default.Schema,
  },
  Meta: flowHoc.meta.term('Token')('ProductCardSection'),
});

const ProductCollectionCards = asSectionToken({
  ...Default,
  Components: {
    ...Default.Components,
    Content: on(ListClean)(dxpProductList.ProductCollectionCards),
  },
  Schema: {
    ...Default.Schema,
  },
  Meta: flowHoc.meta.term('Token')('ProductCardSection'),
});

export default {
  Default,
  ProductCards,
  ProductCollectionCards,
};
