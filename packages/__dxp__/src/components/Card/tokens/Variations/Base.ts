import { vitalCardBase, asCardToken } from '@bodiless/vital-card';
import { addProps, flowHoc, as } from '@bodiless/fclasses';
import { listerineButton } from '../../../Button';

const Default = asCardToken(vitalCardBase.Default, {
  Behavior: {
    Wrapper: addProps({ 'data-shadowed-by': '__vital__:Card' }),
  },
});

// Rewrite this to have card on horizontal on desktop and remove spacing
const WithHorizontalOrientationBase = asCardToken({
  Layout: {
    Image: 'w-full',
    ImageWrapper: 'flex flex-col',
    ContentWrapper: 'flex flex-col',
    Wrapper: 'flex-col w-full flex',
  },
  Spacing: {
    Wrapper: 'space-x-10',
  },
  Meta: flowHoc.meta.term('Orientation')('Horizontal'),
});

const WithHalfHorizontal = asCardToken({
  Layout: {
    ImageWrapper: 'lg:w-1/2',
    ContentWrapper: 'lg:w-1/2',
  },
  Meta: flowHoc.meta.term('Orientation')('Half'),
});

const WithHorizontalRightOrientation = asCardToken(
  WithHorizontalOrientationBase,
  {
    Layout: {
      Wrapper: 'lg:flex-row-reverse',
    },
    Spacing: {
      Wrapper: 'space-x-reverse',
    },
    Meta: flowHoc.meta.term('Orientation')('Right Image break at Desktop'),
  },
);

const WithPrimaryButton = asCardToken({
  ...vitalCardBase.WithPrimaryButton,
  Theme: {
    CTALink: as(listerineButton.Primary),
  },
});

export {
  Default,
  WithPrimaryButton,
  WithHorizontalRightOrientation,
  WithHalfHorizontal,
};
