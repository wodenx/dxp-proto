import { vitalGenericTemplateBase, asGenericTemplateToken } from '@bodiless/vital-templates';
import { replaceWith } from '@bodiless/fclasses';

const Generic = asGenericTemplateToken({
  ...vitalGenericTemplateBase.Generic,
  Components: {
    ...vitalGenericTemplateBase.Generic.Components,
    // @ts-ignore
    Content: replaceWith(() => 'Foo'),
  }
});

export default {
  ...vitalGenericTemplateBase,
  Generic,
};
