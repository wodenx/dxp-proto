import { asLayoutToken, vitalLayoutBase } from '@bodiless/vital-layout';
import { as } from '@bodiless/fclasses';
import { dxpFooter } from '../../Footer';
import { withSbContentFromParent, withSbFieldPath, withSbObjectId } from '../../../util';
import model from '../model';

export const Default = asLayoutToken({
  ...vitalLayoutBase.Default,
  Editors: {
    Footer: as(
      withSbFieldPath(),
      withSbObjectId(model),
      withSbContentFromParent(undefined, 'layout'),
    ),
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
