/*
 * Copy of Styleguide Examples from https://github.com/johnsonandjohnson/Bodiless-JS/tree/main/packages/vital-test/src/styleguide/Examples
 * will render All items in flowcontainer with their ids.
 */

import React, { useMemo } from 'react';
import identity from 'lodash/identity';
import type { FC } from 'react';
import { withNode, withDefaultContent, withNodeKey } from '@bodiless/core';

import {
  designable, flowHoc, DesignableComponentsProps,
  ComponentOrTag, Div, H3, DesignableComponents, addClassesIf,
} from '@bodiless/fclasses';
import { asFluidToken, vitalTypography } from '@bodiless/vital-elements';

export type StyleGuideExamplesComponents = {
  Wrapper: ComponentOrTag<any>,
  ItemWrapper: ComponentOrTag<any>,
  ItemTitle: ComponentOrTag<any>,
  ItemContent: ComponentOrTag<any>,
};

export const styleGuideExamplesComponents: StyleGuideExamplesComponents = {
  Wrapper: Div,
  ItemWrapper: Div,
  ItemTitle: H3,
  ItemContent: Div,
};

export type StyleGuideExamplesBaseProps = DesignableComponentsProps & { content?: any };

const StyleGuideExamplesBase: FC<StyleGuideExamplesBaseProps> = props => {
  const { components, content } = props;
  const {
    Wrapper, ItemWrapper, ItemTitle, ItemContent, ...restComponents
  } = components;

  const finalComponents: DesignableComponents = useMemo(() => Object.entries(restComponents).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: flowHoc(
        content ? withDefaultContent(content) : identity,
        // Remove next 2 lines if we want shared content.
        withNode,
        withNodeKey(key)
      )(value),
    }),
    {},
  ), [components, content]);

  const items = Object.entries(finalComponents).map(([name, C]) => (
    <ItemWrapper key={name} id={name}>
      <ItemTitle>{name}</ItemTitle>
      <ItemContent>
        <C />
      </ItemContent>
    </ItemWrapper>
  ));
  return (
    <Wrapper>
      {items}
    </Wrapper>
  );
};

const StyleGuideExamplesClean = designable(
  styleGuideExamplesComponents, 'StyleGuideExamples'
)(StyleGuideExamplesBase);

const Default = asFluidToken({
  Layout: {
    Wrapper: 'flex flex-wrap',
    ItemWrapper: 'w-full',
  },
  Spacing: {
    ItemWrapper: 'mb-4',
    ItemTitle: 'mb-4',
  },
  Theme: {
    ItemTitle: vitalTypography.H4,
  },
  Schema: {
    _: withNode,
  }
});

const Card = asFluidToken({
  ...Default,
  Layout: {
    ...Default.Layout,
    Wrapper: 'grid lg:grid-cols-4 gap-4',
    ItemWrapper: 'flex flex-col-reverse'
  },
  Spacing: {
    ItemTitle: 'mt-1'
  },
  Behavior: {
    ItemWrapper: addClassesIf(({ id }: any) => id.startsWith('Hero'))('lg:col-span-4'),
  }
});

const vitalStyleGuideExamples = { Default, Card };

export { StyleGuideExamplesClean, vitalStyleGuideExamples };
