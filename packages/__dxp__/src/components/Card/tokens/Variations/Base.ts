import { vitalCardBase, asCardToken } from '@bodiless/vital-card';
import { addProps, flowHoc, as } from '@bodiless/fclasses';
import { listerineButton } from '../../../Button';
import { listerineTypography } from '../../../Typography';

const Default = asCardToken(vitalCardBase.Default, {
  Behavior: {
    Wrapper: addProps({ 'data-shadowed-by': '__vital__:Card' }),
  },
});

const WithHalfHorizontal = asCardToken({
  Layout: {
    ImageWrapper: 'lg:w-1/2',
    ContentWrapper: 'lg:w-1/2',
  },
  Meta: flowHoc.meta.term('Orientation')('Half'),
});

const WithPrimaryButton = asCardToken({
  ...vitalCardBase.WithPrimaryButton,
  Theme: {
    CTALink: as(listerineButton.Primary),
  },
});

const WithPrimaryTextLinkWithoutArrow = asCardToken({
  ...vitalCardBase.WithPrimaryTextLink,
  Theme: {
    CTALink: listerineTypography.Link,
  },
});

export {
  Default,
  WithPrimaryButton,
  WithHalfHorizontal,
  WithPrimaryTextLinkWithoutArrow,
};
