import { replaceWith } from '@bodiless/fclasses';
import { asFluidToken } from '@bodiless/vital-elements';
import {
  GenericTemplateClean,
  vitalPage,
  vitalGenericTemplate,
} from '@bodiless/vital-templates';
import { asBodilessPage } from '../helpers/asBodilessPage';

const Default = asFluidToken({
  ...vitalPage.Default,
  Core: {
    _: replaceWith(GenericTemplateClean),
  },
  Components: {
    _: vitalGenericTemplate.Generic,
  },
  Schema: {
    _: asBodilessPage,
  }
});

export default {
  Default,
};
