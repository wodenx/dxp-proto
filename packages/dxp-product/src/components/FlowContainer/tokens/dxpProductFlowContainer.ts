import { asFluidToken } from '@bodiless/vital-elements';
import { on } from '@bodiless/fclasses';
import { dxpProductSection } from 'src/components/ProductSection';
import { SectionClean } from '@kenvue/dxp-section';

const WithProductSectionVariations = asFluidToken({
  Components: {
    ProductCardSection: on(SectionClean)(dxpProductSection.ProductCards),
    ProductCollectionCardSection: on(SectionClean)(dxpProductSection.ProductCollectionCards),
  }
});

export default {
  WithProductSectionVariations,
};
