import React from 'react';
import { Div } from '@bodiless/fclasses';
import type { KnapsackBodilessSpec } from '@bodiless/knapsack-renderer';

import listerineTypography, { ListerineTypographyComponents } from './tokens';

export const KnapsackDemoTextComponent = (props: any) => (
  <Div {...props}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua!
  </Div>
);

export const knapsackTypographySpec: KnapsackBodilessSpec<ListerineTypographyComponents> = {
  tokens: listerineTypography,
  tokensExportName: 'listerineTypography',
  component: KnapsackDemoTextComponent,
  componentExportName: 'KnapsackDemoTextComponent',
  slots: {},
};
