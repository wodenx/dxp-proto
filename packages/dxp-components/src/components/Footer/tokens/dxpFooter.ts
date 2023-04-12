// @todo We should import base and shadow dxp components rather than vital...
import { asFooterToken, vitalFooter as vitalFooterBase } from '@bodiless/vital-layout';
import { on } from '@bodiless/fclasses';
import { MenuClean } from '@bodiless/vital-navigation';
import { dxpCopyrightRow } from '../../CopyrightRow';
import { withSbContentFromParent } from '../../../util';
import dxpMenu from '../../Menu/tokens/dxpMenu';

export const Default = asFooterToken({
  ...vitalFooterBase.FooterWithRewards,
  Components: {
    ...vitalFooterBase.FooterWithRewards.Components,
    CopyrightRow: dxpCopyrightRow.Default,
    FooterMenu: on(MenuClean)(dxpMenu.Footer),
  },
  Content: {
    FooterMenu: withSbContentFromParent(),
  }
});

export default {
  ...vitalFooterBase,
  Default,
};
