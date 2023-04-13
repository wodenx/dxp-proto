import { vitalCardBase, asCardToken } from '@bodiless/vital-card';
import { Div, addProps, startWith, flowHoc } from '@bodiless/fclasses';
import { listerineTypography } from '../../../Typography';
import { listerineSpacing } from '../../../Spacing';
import {
  WithPrimaryButton,
  WithHorizontalRightOrientation,
  WithHalfHorizontal,
} from './Base';

const HeroBase = asCardToken({
  ...vitalCardBase.Hero,
  Layout: {},
});

const Hero = asCardToken(
  {
    ...vitalCardBase.Hero,
    Behavior: {
      ...vitalCardBase.Hero.Behavior,
      Wrapper: flowHoc(
        startWith(Div),
        addProps({ 'data-shadowed-by': '__vital__:HeroCard' }),
      ),
    },
    Spacing: {
      Wrapper: 'py-10 px-5 sm:p-13 md:py-15 md:px-25',
      DescriptionWrapper: 'mt-5 mb-7.5',
    },
    Layout: {}, // Reset Layout
    Theme: {
      ...vitalCardBase.Hero.Theme,
      TitleWrapper: listerineTypography.PageTitle1,
      DescriptionWrapper: listerineTypography.Description1,
      Image: listerineSpacing.Rounding,
    },
  },
  vitalCardBase.WithNoEyebrow,
  WithHalfHorizontal,
);

const HeroRightCard = asCardToken(
  Hero,
  vitalCardBase.WithHorizontalContentCentered,
  WithHorizontalRightOrientation,
  WithPrimaryButton,
  {
    Meta: {
      title: 'Landing Page Hero: Right',
    },
  },
);

export { Hero, HeroBase, HeroRightCard };
