import { asLayoutToken, vitalLayoutBase } from '@bodiless/vital-layout';
import { dxpFooter } from '../../Footer';
import { withSbContentFromParent } from '../../../util';

export const Default = asLayoutToken({
  ...vitalLayoutBase.Default,
  Editors: {
    Footer: withSbContentFromParent('footer', 'layout'),
  },
  Components: {
    ...vitalLayoutBase.Default.Components,
    Footer: dxpFooter.Default,
  },
});

export default {
  ...vitalLayoutBase,
  Default,
};
