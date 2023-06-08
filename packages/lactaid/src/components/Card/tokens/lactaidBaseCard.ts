import { vitalCardBase, asCardToken } from '@bodiless/vital-card';
import { vitalImage } from '@bodiless/vital-image';
import { addProps, flowHoc } from '@bodiless/fclasses';
import { lactaidButton } from '../../Button';
import { lactaidTypography } from '../../Typography';

const Default = asCardToken(vitalCardBase.Default, {
  Behavior: {
    Wrapper: addProps({ 'data-shadowed-by': '__vital__:Card' }),
  },
  Components: {
    Image: vitalImage.Plain,
  }
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
    CTALink: lactaidButton.Primary,
  },
});

const WithPrimaryTextLinkWithoutArrow = asCardToken({
  ...vitalCardBase.WithPrimaryTextLink,
  Theme: {
    CTALink: lactaidTypography.Link,
  },
});

export {
  Default,
  WithPrimaryButton,
  WithHalfHorizontal,
  WithPrimaryTextLinkWithoutArrow,
};
