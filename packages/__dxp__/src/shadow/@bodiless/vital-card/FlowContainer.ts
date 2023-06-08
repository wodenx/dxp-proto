import { vitalCardFlowContainerBase } from '@bodiless/vital-card';
import { asFluidToken } from '@bodiless/vital-elements';

// Demostrating only showing Basic & Hero Card Variations in Component Picker
const WithCardVariations = asFluidToken(
  vitalCardFlowContainerBase.WithBasicVariations,
  vitalCardFlowContainerBase.WithHeroVariations,
);

export default {
  ...vitalCardFlowContainerBase,
  WithCardVariations,
};
