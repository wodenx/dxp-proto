import { vitalGenericTemplateBase, asGenericTemplateToken } from '@bodiless/vital-templates';

const Default = asGenericTemplateToken(vitalGenericTemplateBase.Base, {
});

export default {
  ...vitalGenericTemplateBase,
  Default,
};
