import { vitalGenericTemplateBase, asGenericTemplateToken } from '@bodiless/vital-templates';
import { replaceWith } from '@bodiless/fclasses';
import HomePageSections from '../../../components/HomePageSections';

const Generic = asGenericTemplateToken({
  ...vitalGenericTemplateBase.Generic,
  Components: {
    ...vitalGenericTemplateBase.Generic.Components,
    // @ts-ignore
    Content: replaceWith(HomePageSections),
  }
});

export default {
  ...vitalGenericTemplateBase,
  Generic,
};
