import { Fragment } from 'react';
import { replaceWith } from '@bodiless/fclasses';
import { asFluidToken } from '@bodiless/vital-elements';
import {
  asGenericTemplateToken,
  GenericTemplateClean,
  vitalGenericTemplate,
  vitalPage,
} from '@bodiless/vital-templates';
import { NodeViewer } from '@bodiless/components';
import { withNodeKey } from '@bodiless/core';

// @todo place this renderJSON token in its own component directory when PDP template is built
const renderJSON = asGenericTemplateToken(vitalGenericTemplate.Base, {
  Components: {
    TopContent: replaceWith(Fragment),
    TopWrapper: replaceWith(Fragment),
    Content: replaceWith(NodeViewer),
    BottomContent: replaceWith(Fragment),
    BottomWrapper: replaceWith(Fragment),
  },
  Schema: {
    Content: withNodeKey('content'),
  },
});

const Default = asFluidToken({
  ...vitalPage.Default,
  Core: {
    _: replaceWith(GenericTemplateClean),
  },
  Components: {
    _: renderJSON,
  },
});

export default {
  Default,
};
