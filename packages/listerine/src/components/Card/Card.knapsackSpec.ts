import type { KnapsackBodilessSpec } from '@bodiless/knapsack-renderer';
import { CardClean as CardCleanBase, CardComponents } from '@bodiless/vital-card';

import listerineCard, { ListerineCards } from './tokens';

export const knapsackCardSpec: KnapsackBodilessSpec<CardComponents> = {
  tokens: listerineCard as ListerineCards,
  tokensExportName: 'listerineCard',
  component: CardCleanBase,
  componentExportName: 'CardClean',
  slots: {},
};

// @TODO: How to specify different path for the Clean components.
// For example:  we need `knapsackCardSpec` imported from `@kenvue/listerine`,
// but `CardClean` has to be imported from `@bodiless/vital-card`.
export const CardClean = CardCleanBase;
