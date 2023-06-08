import React from 'react';
import {
  flowHoc,
  replaceWith,
  on,
  H1,
  H2,
  H3,
  H4,
  H5,
  P,
  A,
  addProps,
} from '@bodiless/fclasses';
import { asFluidToken } from '@bodiless/vital-elements';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import { lactaidTypography } from '../../../components';
import { StyleGuideExamplesClean, vitalStyleGuideExamples } from '../../Examples';

const vitalTypographyFlowContainer = asFluidToken({
  Components: {
    H1: on(H1)(lactaidTypography.H1, addProps({ children: 'An example of H1 title'})),
    H2: on(H2)(lactaidTypography.H2, addProps({ children: 'An example of H2 title'})),
    H3: on(H3)(lactaidTypography.H3, addProps({ children: 'An example of H3 title'})),
    H4: on(H4)(lactaidTypography.H4, addProps({ children: 'An example of H4 title'})),
    H5: on(H5)(lactaidTypography.H5, addProps({ children: 'An example of H5 title'})),
    Body: on(P)(lactaidTypography.Body, addProps({ children: 'An example of the body'})),
    CrumbsReview: on(P)(lactaidTypography.CrumbsReviews, addProps({ children: 'An example of the crumb reviews'})),
    LegalCopy: on(P)(lactaidTypography.LegalCopy, addProps({ children: 'An example of the legal text'})),
    Link: on(A)(lactaidTypography.Link, addProps({ children: 'An example of the link', href: 'https://example.com'})),
  },
});

export const Typography = asStyleGuideTemplateToken(vitalStyleGuideTemplate.Default, {
  Meta: flowHoc.meta.term('Token')('Typography'),
  Content: {
    Title: replaceWith(() => <>Typography</>),
    Description: replaceWith(() => null),
    Examples: on(StyleGuideExamplesClean)(
      vitalStyleGuideExamples.Default,
      vitalTypographyFlowContainer,
    ),
  },
});
