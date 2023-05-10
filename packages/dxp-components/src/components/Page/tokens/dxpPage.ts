import { replaceWith } from '@bodiless/fclasses';
import { asFluidToken } from '@bodiless/vital-elements';
import {
  GenericTemplateClean,
  vitalPage,
} from '@bodiless/vital-templates';
import { dxpGenericTemplate } from '../../GenericTemplate';

const Default = asFluidToken({
  ...vitalPage.Default,
  Core: {
    _: replaceWith(GenericTemplateClean),
  },
  Components: {
    _: dxpGenericTemplate.Default,
  },
});

export default {
  Default,
};
