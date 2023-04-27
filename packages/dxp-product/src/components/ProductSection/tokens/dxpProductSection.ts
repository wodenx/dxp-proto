import {
  flowHoc,
  replaceWith,
  on,
  as,
} from '@bodiless/fclasses';
import {
  useNode,
  withNode,
  withDefaultContent,
} from '@bodiless/core';
import { withPlaceholder } from '@bodiless/components';
import { ListClean, asListToken, vitalList } from '@bodiless/vital-list';
import { asSectionToken, dxpSection } from '@kenvue/dxp-section';
import { vitalEditorPlain } from '@bodiless/vital-editors';
import { CardStatic, vitalCardStatic } from '@bodiless/vital-card';
import type { DxpProductCardData, DxpProductCollectionCardData } from '../types';

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
        cta: {
          text: 'where to buy',
        }
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

const useProductCollectionCardContent = (props: any) => {
  const { node } = useNode();
  // @todo: get rid of hardcoded node path and replace with page or site collection.
  const { data: allCollections } = node.peer<DxpProductCollectionCardData[]>('Products$allCollections');
  const { 'product-collections': productCollectionIds } = props;
  const cardData = allCollections.reduce((
    acc: { [key: string]: any },
    item: DxpProductCollectionCardData,
  ) => {
    const { src, title, alt } = item.image;
    const content = {
      title: item.title,
      image: { src, title, alt },
      cta: {
        text: `all ${item.title.text} products`,
      },
    };
    if (!productCollectionIds || productCollectionIds.includes(item.id)) {
      acc[item.id] = content;
    }
    return acc;
  }, {});
  let listData = {};
  if (!productCollectionIds) {
    const cardKeys = Object.keys(cardData);
    listData = {
      items: cardKeys.filter(
        //  dup check for collection card data.
        (id: string, index: number) => (cardKeys.indexOf(id) === index),
      )
    };
  } else {
    listData = {
      items: productCollectionIds.filter(
        (id: string, index: number) => (
          // existence and dup check for collection card data.
          !!cardData[id] && (productCollectionIds.indexOf(id) === index)
        ),
      )
    };
  }
  return {
    '': listData,
    ...cardData,
  };
};

const withProductCardContent = flowHoc(
  withDefaultContent(useProductCardContent),
  withNode,
);

const withProductCollectionCardContent = flowHoc(
  withDefaultContent(useProductCollectionCardContent),
  withNode,
);

// @todo should not be named with `With...` 
const WithProductCardList = asListToken({
  ...vitalList.Default,
  Components: {
    ...vitalList.Default.Components,
    Title: on(CardStatic)(
      vitalCardStatic.Product,
    ),
  },
  // @todo remove this domain
  Schema: {
    ...vitalList.Default.Schema,
  },
  Content: {
    _: withProductCardContent,
    // @todo no need for as
    Title: as(
      withCardData,
    ),
  }
});

// @todo should not be named with `With...`
const WithProductCollectionList = asListToken({
  ...vitalList.Default,
  Components: {
    ...vitalList.Default.Components,
    Title: on(CardStatic)(
      vitalCardStatic.Product,
    ),
  },
  // @todo no need for this domain
  Schema: {
    ...vitalList.Default.Schema,
  },
  Content: {
    _: withProductCollectionCardContent,
    Title: as(
      withCardData,
    ),
  }
});

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
    Content: replaceWith(ListClean),
  },
  Schema: {
    ...Default.Schema,
  },
  Content: {
    ...Default.Content,
    Content: WithProductCardList,
  },
  Meta: flowHoc.meta.term('Token')('ProductCardSection'),
});

const ProductCollectionCards = asSectionToken({
  ...Default,
  Components: {
    ...Default.Components,
    Content: replaceWith(ListClean),
  },
  Schema: {
    ...Default.Schema,
  },
  Content: {
    ...Default.Content,
    Content: WithProductCollectionList,
  },
  Meta: flowHoc.meta.term('Token')('ProductCardSection'),
});

export default {
  Default,
  ProductCards,
  ProductCollectionCards,
  // @todo move these to a separate `List` or `ProductList` component.
  WithProductCardList,
  WithProductCollectionList,
};
