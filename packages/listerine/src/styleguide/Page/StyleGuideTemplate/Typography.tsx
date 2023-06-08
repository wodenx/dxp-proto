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
  H6,
  P,
  A,
  addProps,
} from '@bodiless/fclasses';
import { asFluidToken } from '@bodiless/vital-elements';
import { asStyleGuideTemplateToken, vitalStyleGuideTemplate } from '@bodiless/vital-templates';
import { listerineTypography } from '../../../components';
import { StyleGuideExamplesClean, vitalStyleGuideExamples } from '../../Examples';

const vitalTypographyFlowContainer = asFluidToken({
  Components: {
    H1: on(H1)(listerineTypography.H1, addProps({ children: 'An example of H1 title'})),
    H2: on(H2)(listerineTypography.H2, addProps({ children: 'An example of H2 title'})),
    H3: on(H3)(listerineTypography.H3, addProps({ children: 'An example of H3 title'})),
    H4: on(H4)(listerineTypography.H4, addProps({ children: 'An example of H4 title'})),
    H5: on(H5)(listerineTypography.H5, addProps({ children: 'An example of H5 title'})),
    H6: on(H6)(listerineTypography.H6, addProps({ children: 'An example of H6 title'})),
    Body: on(P)(listerineTypography.Body, addProps({ children: 'An example of the body'})),
    Eyebrow: on(P)(listerineTypography.Eyebrow, addProps({ children: 'An example of the eyebrow'})),
    CrumbsReview: on(P)(listerineTypography.CrumbsReviews, addProps({ children: 'An example of the crumb reviews'})),
    Link: on(A)(listerineTypography.Link, addProps({ children: 'An example of the link', href: 'https://example.com'})),
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
