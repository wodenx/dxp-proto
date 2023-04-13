import React from 'react';
import {
  withDesign, addClasses, flowHoc, stylable, startWith, Pre, HOC
} from '@bodiless/fclasses';
import {
  asAccordionWrapper, asAccordionTitle, asAccordionBody, asAccordionDefaultExpanded
} from '@bodiless/accordion';
import { withChild } from '@bodiless/core';

export const tokenPanelStyles = {
  Panel: withDesign({
    Title: addClasses('text-xl'),
    Category: addClasses('mt-2 text-base'),
    CheckBox: addClasses('mr-2'),
    Label: addClasses('block'),
    CategoryWrapper: addClasses('w-64'),
    Body: addClasses('flex'),
  }),
};

export const withTokenEditorStyles = flowHoc(
  withDesign({
    Container: withDesign({
      Wrapper: flowHoc(stylable, addClasses('border-demo-primary-interactive border-solid border-2')),
    }),
    DetailsWrapper: flowHoc(
      asAccordionWrapper,
      asAccordionDefaultExpanded,
      addClasses('border-demo-primary-interactive border-2'),
    ),
    DetailsTitle: flowHoc(
      withChild(() => <>Details</>),
      asAccordionTitle,
      withDesign({
        Wrapper: flowHoc(
          addClasses('text-xl'),
          addClasses('text-white'),
          addClasses('bg-demo-primary-interactive'),
          addClasses('p-2'),
        ),
      }),
    ),
    DetailsBody: flowHoc(
      startWith(Pre),
      asAccordionBody,
      addClasses('p-2'),
    ),
  }),
);

export const withCategory = <P extends object>(category?: string) => (...hocs: HOC[]) => (
  flowHoc(
    {}, // see https://github.com/microsoft/TypeScript/issues/28010
    ...hocs,
    category ? flowHoc.meta.term('Category')(category) : undefined,
  )
);
