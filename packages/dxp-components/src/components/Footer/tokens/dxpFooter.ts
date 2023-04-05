// @todo We should import base and shadow dxp components rather than vital...
import { asFooterToken, vitalFooter as vitalFooterBase } from '@bodiless/vital-layout';
import { dxpCopyrightRow } from '../../CopyrightRow';

export const Default = asFooterToken({
  ...vitalFooterBase.FooterWithRewards,
  Components: {
    ...vitalFooterBase.FooterWithRewards.Components,
    CopyrightRow: dxpCopyrightRow.Default,
  },
});

export default {
  ...vitalFooterBase,
  Default,
};
