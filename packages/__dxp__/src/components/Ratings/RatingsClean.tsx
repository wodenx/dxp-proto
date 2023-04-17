import React from 'react';
import {
  ComponentOrTag,
  designable,
  DesignableComponentsProps,
  Div,
  Img,
} from '@bodiless/fclasses';
import { asVitalTokenSpec } from '@bodiless/vital-elements';

type RatingsComponents = {
  Wrapper: ComponentOrTag<any>;
  Image: ComponentOrTag<any>;
};

type BaseRatingsProps = DesignableComponentsProps<RatingsComponents>;

const ratingsComponents: RatingsComponents = {
  Wrapper: Div,
  Image: Img,
};

const RatingsBase = (props: BaseRatingsProps) => {
  const { components: C, ...rest } = props;
  return (
    <C.Wrapper {...rest}>
      <C.Image />
    </C.Wrapper>
  );
};

const RatingsClean = designable(ratingsComponents, 'Rating')(RatingsBase);

const asRatingsToken = asVitalTokenSpec<RatingsComponents>();

export { asRatingsToken };

export default RatingsClean;
