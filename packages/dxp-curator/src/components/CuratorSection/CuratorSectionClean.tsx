import React, { FC, ComponentType, HTMLProps } from 'react';
import {
  designable,
  DesignableComponents,
  DesignableComponentsProps,
  Div,
  H2,
  Span,
  DesignableProps,
  as,
} from '@bodiless/fclasses';
import { withNode } from '@bodiless/core';
import { asVitalTokenSpec } from '@bodiless/vital-elements';
import { CuratorClean } from '@bodiless/curator';

/**
 * @category Component
 */
export interface CuratorSectionComponents extends DesignableComponents {
  Wrapper: ComponentType<any>,
  Title: ComponentType<any>,
  SocialLink: ComponentType<any>,
  TitleWrapper: ComponentType<any>,
  FeedWrapper: ComponentType<any>,
  Feed: ComponentType<any>,
}

const CuratorSectionComponent: CuratorSectionComponents = {
  Wrapper: Div,
  TitleWrapper: Div,
  Title: H2,
  SocialLink: Span,
  FeedWrapper: Div,
  Feed: CuratorClean,
};

export type SectionProps = DesignableProps<CuratorSectionComponents> & HTMLProps<HTMLElement>;
type CuratorSectionBaseProps = DesignableComponentsProps<CuratorSectionComponents> &
HTMLProps<HTMLElement>;

const CuratorSectionBase: FC<CuratorSectionBaseProps> = ({ components, ...rest }) => {
  const {
    Wrapper,
    TitleWrapper,
    Title,
    SocialLink,
    FeedWrapper,
    Feed,
  } = components;

  return (
    <Wrapper {...rest}>
      <TitleWrapper>
        <Title />
        <SocialLink />
      </TitleWrapper>
      <FeedWrapper>
        <Feed />
      </FeedWrapper>
    </Wrapper>
  );
};

const CuratorSectionClean = as(
  designable(CuratorSectionComponent, 'Curator Section'),
  withNode,
)(CuratorSectionBase);

/**
 * A token modifier that respects the Section Components.
 *
 * @category Token Collection
 */
const asCuratorSectionToken = asVitalTokenSpec<CuratorSectionComponents>();
const curatorSectionToken = asCuratorSectionToken();
type CuratorSectionToken = typeof curatorSectionToken;

export default CuratorSectionClean;
export { asCuratorSectionToken };
export type { CuratorSectionToken };
