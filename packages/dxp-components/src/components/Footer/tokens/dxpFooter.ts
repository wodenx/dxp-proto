// @todo We should import base and shadow dxp components rather than vital...
import { asFooterToken, vitalFooter as vitalFooterBase } from '@bodiless/vital-layout';
import { as } from '@bodiless/fclasses';
import { dxpCopyrightRow } from '../../CopyrightRow';
import { withSbContentFromParent } from '../../../util';

export const Default = asFooterToken({
  ...vitalFooterBase.FooterWithRewards,
  Components: {
    ...vitalFooterBase.FooterWithRewards.Components,
    CopyrightRow: dxpCopyrightRow.Default,
  },
  Content: {
    CopyrightRow: as(
      withSbContentFromParent(),
      vitalFooterBase.FooterWithRewards.Content.CopyrightRow,
    ),
  }
});

export default {
  ...vitalFooterBase,
  Default,
};
