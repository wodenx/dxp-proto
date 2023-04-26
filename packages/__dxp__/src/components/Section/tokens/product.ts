import { as, on, removeClasses } from '@bodiless/fclasses';
import { vitalTextDecoration } from '@bodiless/vital-elements';
import { asListToken } from '@bodiless/vital-list';
import { CardClean } from '@bodiless/vital-card';
import { asSectionToken, dxpSectionBase } from '@kenvue/dxp-section';
import { dxpProductSection } from '@kenvue/dxp-product';
import { listerineTypography } from '../../Typography';
import { listerineCardProduct } from '../../Card';

const WithListerineCardProduct = asListToken({
  ...dxpProductSection.WithProductCardList,
  Components: {
    Title: on(CardClean)(listerineCardProduct.Product),
  },
  Layout: {
    Item: 'w-full md:w-1/4',
  },
});

const Product = asSectionToken({
  ...dxpSectionBase.Default,
  ...dxpProductSection.ProductCards,
  Layout: {
    ...dxpSectionBase.Default.Layout,
    Wrapper: 'block',
  },
  Theme: {
    ...dxpSectionBase.Default.Theme,
    Title: as(
      vitalTextDecoration.Uppercase,
      listerineTypography.H2,
      vitalTextDecoration.Medium,
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
  Product,
};
