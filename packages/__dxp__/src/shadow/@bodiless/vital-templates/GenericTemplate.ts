import { vitalGenericTemplateBase, asGenericTemplateToken } from '@bodiless/vital-templates';

const Default = asGenericTemplateToken(vitalGenericTemplateBase.Default, {
});

export default {
  ...vitalGenericTemplateBase,
  Default,
};
