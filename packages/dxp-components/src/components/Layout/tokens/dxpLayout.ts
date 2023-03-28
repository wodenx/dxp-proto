import { asLayoutToken, vitalLayout } from '@bodiless/vital-layout';
import { dxpFooter } from 'src/components/Footer';

const Default = asLayoutToken({
  ...vitalLayout.Default,
  Components: {
    Footer: dxpFooter.Default,
  },
});

export default {
  ...vitalLayout,
  Default,
};
