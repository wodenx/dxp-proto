import {
  flowHoc,
  replaceWith,
  on,
  as,
  H2,
  TokenMeta,
} from '@bodiless/fclasses';
import {
  useNode,
  withNode,
  withDefaultContent,
  ContentNode,
  asReadOnly,
  withContextActivator,
} from '@bodiless/core';
import { withPlaceholder } from '@bodiless/components';
import { ListClean, asListToken, vitalList } from '@bodiless/vital-list';
import { asSectionToken, dxpSection } from '@kenvue/dxp-section';
import { vitalEditorPlain, EditorPlainClean } from '@bodiless/vital-editors';
import { CardStatic, vitalCardStatic, CardClean } from '@bodiless/vital-card';
import { withContentLibrary } from '@bodiless/layouts';
import { ComponentSelector } from '@bodiless/layouts-ui';
import type { DxpProductCardData, DxpProductCollectionCardData } from '../types';

const LIBRARY_NODEKEY = '_library';

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
  const cardData = allProducts.reduce((
    acc: { [key: string]: any },
    item: DxpProductCardData,
  ) => {
    if (!productIds || productIds.includes(item.id)) {
      const { src, title, alt } = item.image;
      const content = {
        title: item.title,
        image: { src, title, alt },
      };
      acc[`${LIBRARY_NODEKEY}$${item.id}`] = content;
    }
    return acc;
  }, {});
  return {
    ...cardData,
  };
};

const parentNode = (node: ContentNode<any>) => {
  const path = node.path.slice(0, -1);
  return node.peer(path);
};

export const useLibraryNode = () => {
  const { node } = useNode();
  const libraryNode = parentNode(node).child(LIBRARY_NODEKEY);
  return { node: libraryNode };
};

// We display nothing bc the title says it all
const ProductDisplay = as(
  vitalCardStatic.Product,
  withCardData,
)(CardClean);

// export const useIsLinked = (): boolean => {
//   const { node } = useNode<ArticleMetadata>();
//   return !!node.data.revisionId;
// };

export const useProductLibraryOverrides = () => ({
  name: 'product-library',
  label: 'Select',
  groupLabel: 'Product',
  groupMerge: 'none' as 'none',
  icon: 'web_stories',
  // isHidden: useIsLinked(),
  formTitle: 'Products',
  formDescription: 'This is a list of all products on the site. Choose one to use it.',
});

export const useCollectionLibraryOverrides = () => ({
  name: 'collection-library',
  label: 'Select',
  groupLabel: 'Collection',
  groupMerge: 'none' as 'none',
  icon: 'web_stories',
  // isHidden: useIsLinked(),
  formTitle: 'Product Collections',
  formDescription: 'This is a list of all products collections on the site. Choose one to use it.',
});

const useProductLibraryMeta = (node: ContentNode<any>): TokenMeta => {
  const { data } = node;
  const { title } = data;
  const { text } = title;
  return {
    title: text || 'No title',
    categories: {
      type: ['Product'],
    },
  };
};

const useCollectionLibraryMeta = (node: ContentNode<any>): TokenMeta => {
  const { data } = node;
  const { title } = data;
  const { text } = title;
  return {
    title: text || 'No title',
    categories: {
      type: ['Product'],
    },
  };
};

const productLibraryOptions = {
  DisplayComponent: ProductDisplay,
  Selector: ComponentSelector,
  useLibraryNode,
  useMeta: useProductLibraryMeta,
  useOverrides: useProductLibraryOverrides,
  // peer: true,
};

const collectionLibraryOptions = {
  DisplayComponent: ProductDisplay,
  Selector: ComponentSelector,
  useLibraryNode,
  useMeta: useCollectionLibraryMeta,
  useOverrides: useCollectionLibraryOverrides,
  // peer: true,
};

const withProductLibrary = withContentLibrary(productLibraryOptions);
const withCollectionLibrary = withContentLibrary(collectionLibraryOptions);

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
    };
    if (!productCollectionIds || productCollectionIds.includes(item.id)) {
      acc[`${LIBRARY_NODEKEY}$${item.id}`] = content;
    }
    return acc;
  }, {});
  // let listData = {};
  // if (!productCollectionIds) {
  //   const cardKeys = Object.keys(cardData);
  //   listData = {
  //     items: cardKeys.filter(
  //       //  dup check for collection card data.
  //       (id: string, index: number) => (cardKeys.indexOf(id) === index),
  //     )
  //   };
  // } else {
  //   listData = {
  //     items: productCollectionIds.filter(
  //       (id: string, index: number) => (
  //         // existence and dup check for collection card data.
  //         !!cardData[id] && (productCollectionIds.indexOf(id) === index)
  //       ),
  //     )
  //   };
  // }
  return {
    // '': listData,
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

const ProductCardList = asListToken({
  ...vitalList.Default,
  Components: {
    ...vitalList.Default.Components,
    Title: on(CardStatic)(
      vitalCardStatic.Product,
      asReadOnly,
      withContextActivator('onClick'),
      withCardData,
      withProductLibrary,
    ),
  },
  Schema: {
    ...vitalList.Default.Schema,
  },
  Content: {
    _: withProductCardContent,
  }
});

const ProductCollectionList = asListToken({
  ...vitalList.Default,
  Components: {
    ...vitalList.Default.Components,
    Title: on(CardStatic)(
      vitalCardStatic.Product,
      withCardData,
      withCollectionLibrary,
    ),
  },
  Schema: {
    ...vitalList.Default.Schema,
  },
  Content: {
    _: withProductCollectionCardContent,
  }
});

const Default = asSectionToken({
  ...dxpSection.Default,
  Components: {
    TitleWrapper: replaceWith(H2),
    Title: on(EditorPlainClean)(vitalEditorPlain.Default),
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
  },
  Meta: flowHoc.meta.term('Token')('ProductCardSection'),
});

const ProductCollectionCards = asSectionToken({
  ...Default,
  Components: {
    ...Default.Components,
    Content: on(ListClean)(ProductCollectionList)
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
