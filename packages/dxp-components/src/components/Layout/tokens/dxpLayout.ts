import { asLayoutToken, vitalLayout } from '@bodiless/vital-layout';
import { as, extendDesign } from '@bodiless/fclasses';
import { dxpFooter } from '../../Footer';
import { withSbContentFromParent, withSbFieldPath, withSbObjectId } from '../../../util';
import model from '../model';

export const Default = asLayoutToken({
  ...vitalLayout.Default,
  Content: extendDesign(vitalLayout.Default.Content, {
    Footer: as(
      withSbFieldPath(),
      withSbObjectId(model),
      withSbContentFromParent(undefined, 'layout'),
    ),
  }),
  Components: {
    ...vitalLayout.Default.Components,
    Footer: dxpFooter.Default,
  },
});

export default {
  ...vitalLayout,
  Default,
};
