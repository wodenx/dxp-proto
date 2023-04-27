import { as, on, removeClasses } from '@bodiless/fclasses';
import { vitalTextDecoration } from '@bodiless/vital-elements';
import { asListToken } from '@bodiless/vital-list';
import { CardClean } from '@bodiless/vital-card';
import { asSectionToken, dxpSectionBase } from '@kenvue/dxp-section';
// @todo we should be creating our own listerineProductSection and
// importing dxpProductSectionBase, not dxpSectionBase.
import { dxpProductSection } from '@kenvue/dxp-product';
import { listerineTypography } from '../../Typography';
import { listerineCardProduct } from '../../Card';

// @todo should not be named with `With` - and we should be creating our
// own listerineProductList and extend dxpProductListBase.
const WithListerineCardProduct = asListToken({
  ...dxpProductSection.WithProductCardList,
  Components: {
    // @todo be sure to include the components you don't want to override
    Title: on(CardClean)(listerineCardProduct.Product),
  },
  Layout: {
    Item: 'w-full md:w-1/4',
  },
});

const Product = asSectionToken({
  // @todo this is already included in dxpProductSection.ProductCards
  ...dxpSectionBase.Default,
  ...dxpProductSection.ProductCards,
  Layout: {
    // @todo extend dxpProductSection not dxpSectionBase
    ...dxpSectionBase.Default.Layout,
    Wrapper: 'block',
  },
  Theme: {
    ...dxpSectionBase.Default.Theme,
    Title: as(
      vitalTextDecoration.Uppercase,
      listerineTypography.H2,
      vitalTextDecoration.Medium,
      // @todo why are we removing this class?
      removeClasses('font-bold'),
    ),
  },
  Spacing: {
    ...dxpSectionBase.Default.Spacing,
    TitleWrapper: 'mb-4',
  },
  Content: {
    ...dxpSectionBase.Default.Content,
    Content: WithListerineCardProduct,
  },
});

export default {
  // @todo should include both product section and collexction section in the
  // same token collection dxpProduct
  Product,
};
