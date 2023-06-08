import { as, removeClasses } from '@bodiless/fclasses';
import { vitalTextDecoration } from '@bodiless/vital-elements';
import { asSectionToken } from '@kenvue/dxp-section';
import { dxpProductSectionBase as dxpProductSection } from '@kenvue/dxp-product';
import { listerineTypography } from '../../Typography';

const ProductCards = asSectionToken({
  ...dxpProductSection.ProductCards,
  Layout: {
    ...dxpProductSection.ProductCards.Layout,
    Wrapper: 'block',
  },
  Theme: {
    ...dxpProductSection.ProductCards.Theme,
    Title: as(
      vitalTextDecoration.Uppercase,
      listerineTypography.H2,
      vitalTextDecoration.Medium,
      // @todo why are we removing this class?
      removeClasses('font-bold'),
    ),
  },
  Spacing: {
    ...dxpProductSection.ProductCards.Spacing,
    TitleWrapper: 'mb-4',
  },
  Components: {
    ...dxpProductSection.ProductCards.Components,
    // Content: on(ListClean)(listerineProductList.ProductCards),
  },
});

export default {
  ProductCards,
};
