import { asFooterToken, vitalFooter } from '@bodiless/vital-layout';
import { dxpCopyrightRow } from 'src/components/CopyrightRow';

const Default = asFooterToken({
  ...vitalFooter.Default,
  Components: {
    ...vitalFooter.Default.Components,
    CopyrightRow: dxpCopyrightRow.Default,
  },
});

export default {
  ...vitalFooter,
  Default,
};
