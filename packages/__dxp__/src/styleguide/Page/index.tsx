import { asFluidToken } from '@bodiless/vital-elements';
import { vitalPage } from '@bodiless/vital-templates';
import { TestStyleGuideTemplate } from './StyleGuideTemplate';

const {
  Typography,
  Card,
  Home,
  Section,
} = TestStyleGuideTemplate;

const Default = asFluidToken({
  ...vitalPage.Default,
  Components: {
    Home,
    Typography,
    Card,
    Section,
  },
});

export default {
  Default,
};
