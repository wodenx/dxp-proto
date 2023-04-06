import { withDefaultContent, withNodeKey } from '@bodiless/core';
import { asFluidToken, vitalTypography } from '@bodiless/vital-elements';
import { AccordionClean, vitalAccordion } from '@bodiless/vital-accordion';
import {
  addProps, as, flowIf, on, varyDesigns
} from '@bodiless/fclasses';
import { asSectionToken } from '@kenvue/dxp-section';

import { dxpElementsList, FAQListClean, ElementsListClean } from '../../ElementsList';
import {
  useAccordionContent, useFAQContent, useHasFAQData, useHasMoreToKnowData, withHiddenIfNoData,
} from './dxpPDPContent';

const AccordionVariations = {
  Ingredients: '',
  Directions: '',
  Warnings: '',
  AdditionalInfo: ''
};

const dxpAccordionFlowContainer = asFluidToken({
  Components: {
    ...varyDesigns(
      { '': on(AccordionClean)(vitalAccordion.Default) },
      AccordionVariations,
    )
  },
});

const Default = asSectionToken({
  Components: {
    Title: vitalTypography.H2,
  },
  Theme: {
    Title: 'uppercase',
    Wrapper: 'border-t-2 border-slate-400'
  },
  Spacing: {
    Wrapper: 'mt-10 pt-8'
  }
});

const MoreToKnow = asSectionToken(Default, {
  Flow: flowIf(useHasMoreToKnowData(Object.keys(AccordionVariations))),
  Core: {
    Content: as(
      ...Object.entries(AccordionVariations).map(([key]) => withHiddenIfNoData(key)),
    )
  },
  Components: {
    Content: on(ElementsListClean)(
      dxpAccordionFlowContainer,
      dxpElementsList.Default
    ),
  },
  Schema: {
    Content: withNodeKey('section-content'),
  },
  Content: {
    Title: addProps({ children: 'More To Know' }),
    Content: withDefaultContent(useAccordionContent),
  },
});

const Faq = asSectionToken(Default, {
  Flow: flowIf(useHasFAQData),
  Components: {
    Content: on(FAQListClean)(),
  },
  Schema: {
    Content: withNodeKey('section-faq'),
  },
  Content: {
    Title: addProps({ children: 'Frequently Asked Questions' }),
    Content: addProps(useFAQContent)
  }
});

export default {
  Default,
  MoreToKnow,
  Faq,
};
