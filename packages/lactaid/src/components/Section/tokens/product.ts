import {
  Div, as, flowHoc, on, removeClasses, replaceWith, withDesign
} from '@bodiless/fclasses';
import { vitalTextDecoration } from '@bodiless/vital-elements';
// import { asListToken } from '@bodiless/vital-list';
// import { CardClean } from '@bodiless/vital-card';
import { asSectionToken } from '@kenvue/dxp-section';
// @todo we should be creating our own lactaidProductSection and
// importing dxpProductSectionBase, not dxpSectionBase.
import { dxpProductSectionBase as dxpProductSection } from '@kenvue/dxp-product';
import { LinkClean } from '@bodiless/vital-link';
import { ListClean } from '@bodiless/vital-list';
import { lactaidProductList } from '../../ProductList';
import { lactaidTypography } from '../../Typography';
// import { lactaidCardProduct } from '../../Card';
import { lactaidTextDecoration } from '../../TextDecoration';

// // @todo should not be named with `With` - and we should be creating our
// // own lactaidProductList and extend dxpProductListBase.
// const WithLactaidCardProduct = asListToken({
//   ...dxpProductSection.ProductCards,
//   Components: {
//     // @todo be sure to include the components you don't want to override
//     Title: on(CardClean)(lactaidCardProduct.Product),
//   },
//   Layout: {
//     Wrapper: 'grid lg:grid-cols-4 gap-4',
//     Item: 'w-full',
//   },
// });

const ProductCards = asSectionToken({
  // @todo this is already included in dxpProductSection.ProductCards
  // ...dxpSectionBase.Default,
  ...dxpProductSection.ProductCards,
  Components: {
    ...dxpProductSection.ProductCards.Components,
    LinkWrapper: replaceWith(Div),
    Link: on(LinkClean)(lactaidTypography.Link),
    Content: on(ListClean)(lactaidProductList.ProductCards),
  },
  Layout: {
    // @todo extend dxpProductSection not dxpSectionBase
    ...dxpProductSection.ProductCards.Layout,
    Wrapper: 'block',
  },
  Theme: {
    ...dxpProductSection.ProductCards.Theme,
    Link: flowHoc(
      withDesign({
        Body: 'flex relative gap-2 after:content-["›"]',
      }),
      as(lactaidTextDecoration.Uppercase,
        'block'),
    ),
    Title: as(
      vitalTextDecoration.Uppercase,
      lactaidTypography.H2,
      vitalTextDecoration.Medium,
      // @todo why are we removing this class?
      removeClasses('font-bold'),
    ),
  },
  Spacing: {
    ...dxpProductSection.ProductCards.Spacing,
    TitleWrapper: 'mb-3',
    Link: 'mb-10',
  },
  // Content: {
  //   ...dxpSectionBase.Default.Content,
  //   Content: WithLactaidCardProduct,
  // },
});

export default {
  // @todo should include both product section and collexction section in the
  // same token collection dxpProduct
  ProductCards,
};
