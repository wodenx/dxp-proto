import {
  flowHoc,
  replaceWith,
  on,
} from '@bodiless/fclasses';
import {
  useNode,
  withNode,
  withDefaultContent,
  // withNodeKey,
} from '@bodiless/core';
import { withPlaceholder } from '@bodiless/components';
import { ListClean, asListToken, vitalList } from '@bodiless/vital-list';
import { asSectionToken, dxpSection } from '@kenvue/dxp-section';
import { vitalEditorPlain } from '@bodiless/vital-editors';
import { CardStatic, vitalCardStatic } from '@bodiless/vital-card';
import type { DxpProductCardData } from '../types';

const useCardData = () => {
  const { node } = useNode();
  return node.data;
};
const withCardData = withDefaultContent(useCardData);

const useProductCardContent = (props: any) => {
  const { node } = useNode();
  // @todo: get rid of hardcoded node path and replace with page or site collection.
  const { data: allProducts } = node.peer<DxpProductCardData[]>('Products$allProducts');
  const { products: productIds } = props;
  const listData = {
    items: productIds,
  };
  const cardData = allProducts.reduce((
    acc: { [key: string]: any },
    item: DxpProductCardData,
  ) => {
    if (productIds.includes(item.id)) {
      const { src, title, alt } = item.image;
      const content = {
        title: item.title,
        image: { src, title, alt },
      };
      acc[item.id] = content;
    }
    return acc;
  }, {});

  return {
    '': listData,
    ...cardData,
  };
};

const withProductCardContent = flowHoc(
  withDefaultContent(useProductCardContent),
  withNode,
);

const ProductCardList = asListToken({
  ...vitalList.Default,
  Components: {
    ...vitalList.Default.Components,
    Title: on(CardStatic)(
      vitalCardStatic.Product,
      withCardData,
    ),
  },
  Schema: {
    ...vitalList.Default.Schema,
  },
  Content: {
    _: withProductCardContent,
  }
});

const Default = asSectionToken(dxpSection.Default, {
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
    Content: on(ListClean)(ProductCardList)
  },
  Schema: {
    ...Default.Schema,
    // Content: withNodeKey(''),
  },
  Meta: flowHoc.meta.term('Token')('ProductCardSection'),
});

export default {
  Default,
  ProductCards,
};
