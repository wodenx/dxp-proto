import { useNode } from '@bodiless/core';
import { flowIf, replaceWith, Fragment } from '@bodiless/fclasses';
import { useLanguageContext } from '@bodiless/i18n';
import { vitalGenericTemplateBase, asGenericTemplateToken } from '@bodiless/vital-templates';

const isHomePage = () => (
  useNode().node.pagePath === '/'
  || useNode().node.pagePath === `/${useLanguageContext().getCurrentLanguage().name}/`
);

const WithNoBreadcrumbsOnHomePage = asGenericTemplateToken({
  Flow: flowIf(isHomePage),
  Components: {
    BreadcrumbWrapper: replaceWith(Fragment),
    Breadcrumb: replaceWith(Fragment),
  },
});

const Default = asGenericTemplateToken(vitalGenericTemplateBase.Default, {
  Compose: {
    WithNoBreadcrumbsOnHomePage,
  }
});

export default {
  ...vitalGenericTemplateBase,
  Default,
};
