import { asFluidToken } from '@bodiless/vital-elements';
import { on } from '@bodiless/fclasses';
import { SectionClean } from '@kenvue/dxp-section';
import { dxpProductSection } from '../../ProductSection';

const WithProductSectionVariations = asFluidToken({
  Components: {
    ProductCardSection: on(SectionClean)(dxpProductSection.ProductCards),
    ProductCollectionCardSection: on(SectionClean)(dxpProductSection.ProductCollectionCards),
  }
});

export default {
  WithProductSectionVariations,
};
