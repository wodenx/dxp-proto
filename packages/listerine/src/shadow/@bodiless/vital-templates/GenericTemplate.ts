import { vitalGenericTemplateBase, asGenericTemplateToken } from '@bodiless/vital-templates';
import { replaceWith } from '@bodiless/fclasses';
import HomePageSections, { ListerineHeroTopContent } from '../../../components/HomePageSections';

const Default = asGenericTemplateToken({
  ...vitalGenericTemplateBase.Default,
  Components: {
    ...vitalGenericTemplateBase.Default.Components,
    // @ts-ignore
    Content: replaceWith(HomePageSections),
    TopContent: replaceWith(ListerineHeroTopContent),
  }
});

export default {
  ...vitalGenericTemplateBase,
  Default,
};
