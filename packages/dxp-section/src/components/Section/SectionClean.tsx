import React, { FC, ComponentType, HTMLProps } from 'react';
import {
  designable,
  DesignableComponents,
  DesignableComponentsProps,
  Div,
  H2,
  Section,
  StylableProps,
  DesignableProps,
  Fragment,
  as,
} from '@bodiless/fclasses';
import { withNode } from '@bodiless/core';
import { asVitalTokenSpec } from '@bodiless/vital-elements';

/**
 * @category Component
 */
export interface SectionComponents extends DesignableComponents {
  Wrapper: ComponentType<StylableProps>;
  TitleWrapper: ComponentType<StylableProps>;
  Title: ComponentType<StylableProps>;
  DescriptionWrapper: ComponentType<StylableProps>;
  Description: ComponentType<StylableProps>;
  LinkWrapper: ComponentType<StylableProps>;
  Link: ComponentType<StylableProps>;
  ContentWrapper: ComponentType<StylableProps>;
  Content: ComponentType<StylableProps>;
}

const sectionComponent: SectionComponents = {
  Wrapper: Section,
  TitleWrapper: Div,
  Title: H2,
  LinkWrapper: Fragment,
  Link: Fragment,
  DescriptionWrapper: Fragment,
  Description: Fragment,
  ContentWrapper: Div,
  Content: Div,
};

export type SectionProps = DesignableProps<SectionComponents> & HTMLProps<HTMLElement>;
type SectionBaseProps = DesignableComponentsProps<SectionComponents> & HTMLProps<HTMLElement>;

const SectionBase: FC<SectionBaseProps> = ({ components, ...rest }) => {
  const {
    Wrapper,
    TitleWrapper,
    Title,
    DescriptionWrapper,
    Description,
    LinkWrapper,
    Link: SectionLink,
    ContentWrapper,
    Content,
  } = components;

  return (
    <Wrapper {...rest}>
      <TitleWrapper>
        <Title />
      </TitleWrapper>
      <DescriptionWrapper>
        <Description />
      </DescriptionWrapper>
      <LinkWrapper>
        <SectionLink />
      </LinkWrapper>
      <ContentWrapper>
        <Content />
      </ContentWrapper>
    </Wrapper>
  );
};

const SectionClean = as(
  designable(sectionComponent, 'Section'),
  withNode,
)(SectionBase);

/**
 * A token modifier that respects the Section Components.
 *
 * @category Token Collection
 */
const asSectionToken = asVitalTokenSpec<SectionComponents>();
const sectionToken = asSectionToken();
type SectionToken = typeof sectionToken;

export default SectionClean;
export { asSectionToken };
export type { SectionToken };
