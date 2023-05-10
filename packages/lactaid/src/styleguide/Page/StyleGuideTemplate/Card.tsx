import { flowHoc, replaceWith, on } from '@bodiless/fclasses';
import {
  asStyleGuideTemplateToken,
  vitalStyleGuideTemplate,
} from '@bodiless/vital-templates';
import { asFluidToken } from '@bodiless/vital-elements';
import { CardClean } from '@bodiless/vital-card';
import {
  lactaidProductCard,
  lactaidTypography,
} from '../../../components';
import {
  StyleGuideExamplesClean,
  vitalStyleGuideExamples,
} from '../../Examples';

const lactaidCardFlowContainer = asFluidToken(vitalStyleGuideExamples.Card, {
  Components: {
    Products: on(StyleGuideExamplesClean)(
      asFluidToken(
        vitalStyleGuideExamples.WithFourColumnGrid,
        vitalStyleGuideExamples.WithMargin,
        {
          Components: {
            Product: on(CardClean)(lactaidProductCard.Product),
            Product2: on(CardClean)(lactaidProductCard.Product),
            Product3: on(CardClean)(lactaidProductCard.Product),
            Product4: on(CardClean)(lactaidProductCard.Product),
          },
          Theme: {
            ItemTitle: lactaidTypography.H5,
          },
        },
      ),
    ),
  },
});

export const Card = asStyleGuideTemplateToken({
  ...vitalStyleGuideTemplate.Default,
  Meta: flowHoc.meta.term('Token')('Card'),
  Content: {
    ...vitalStyleGuideTemplate.Default.Content,
    Title: replaceWith(() => null),
    Description: replaceWith(() => null),
    Examples: on(StyleGuideExamplesClean)(lactaidCardFlowContainer),
  },
  Theme: {
    ...vitalStyleGuideTemplate.Default.Theme,
    Container: 'mx-0',
  },
});
