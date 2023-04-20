// @todo We should import base and shadow dxp components rather than vital...
import { asFooterToken, vitalFooter as vitalFooterBase } from '@bodiless/vital-layout';
import { on } from '@bodiless/fclasses';
import { MenuClean } from '@bodiless/vital-navigation';
import { dxpCopyrightRow } from '../../CopyrightRow';
import { withSbContentFromParent } from '../../../util';
import dxpMenu from '../../Menu/tokens/dxpMenu';
import CopyrightRowClean from '../../CopyrightRow/CopyrightRowClean';

export const Default = asFooterToken(
  {
    ...vitalFooterBase.Default,
    Components: {
      ...vitalFooterBase.Default.Components,
      CopyrightRow: on(CopyrightRowClean)(dxpCopyrightRow.Default),
      FooterMenu: on(MenuClean)(dxpMenu.Footer),
    },
    Content: {
      FooterMenu: withSbContentFromParent(),
    },
  },
);

export default {
  ...vitalFooterBase,
  Default,
};
