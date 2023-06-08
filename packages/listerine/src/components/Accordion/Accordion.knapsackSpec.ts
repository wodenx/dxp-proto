import type { KnapsackBodilessSpec } from '@bodiless/knapsack-renderer';

import { AccordionClean as AccordionCleanBase, AccordionComponents } from '@bodiless/vital-accordion';
import listerineAccordion from './tokens';

export const knapsackAccordionSpec: KnapsackBodilessSpec<AccordionComponents> = {
  tokens: listerineAccordion,
  tokensExportName: 'listerineAccordion',
  component: AccordionCleanBase,
  componentExportName: 'AccordionClean',
  slots: {},
};

// @TODO: How to specify different path for the Clean components.
// For example:  we need `knapsackAccordionSpec` imported from `@kenvue/listerine`,
// but `AccordionClean` has to be imported from `@bodiless/vital-accordion`.
export const AccordionClean = AccordionCleanBase;
