import { asFluidToken } from '@bodiless/vital-elements';
import { vitalPage } from '@bodiless/vital-templates';
import { TestStyleGuideTemplate } from './StyleGuideTemplate';

const {
  Typography,
  Home,
  Section,
} = TestStyleGuideTemplate;

const Default = asFluidToken({
  ...vitalPage.Default,
  Components: {
    Home,
    Typography,
    Section,
  },
});

export default {
  Default,
};
