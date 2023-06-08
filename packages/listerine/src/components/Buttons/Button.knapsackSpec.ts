import type { KnapsackBodilessSpec } from '@bodiless/knapsack-renderer';

import { ButtonClean as ButtonCleanBase, ButtonComponent } from '@bodiless/vital-buttons';
import listerineButtons from './tokens';

export const knapsackButtonSpec: KnapsackBodilessSpec<ButtonComponent> = {
  tokens: listerineButtons,
  tokensExportName: 'listerineButtons',
  component: ButtonCleanBase,
  componentExportName: 'ButtonClean',
  slots: {},
};

// @TODO: How to specify different path for the Clean components.
// For example:  we need `knapsackButtonSpec` imported from `@kenvue/listerine`,
// but `ButtonClean` has to be imported from `@bodiless/vital-buttons`.
export const ButtonClean = ButtonCleanBase;
