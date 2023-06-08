import { useNode } from '@bodiless/core';
import { vitalGenericTemplate, asGenericTemplateToken } from '@bodiless/vital-templates';
import { asElementToken, vitalTypography } from '@bodiless/vital-elements';

import { on, flowIf } from '@bodiless/fclasses';
import { dxpImage } from '@kenvue/dxp-image';

import { CuratorSectionClean, asCuratorSectionToken, dxpCuratorSection } from '@kenvue/dxp-curator';
import { withSbContent, withSbContentFromParent } from '../../../util';
import { dxpLayout } from '../../Layout';

// @todo To avoid the circular dependency we extend the
// `dxpImage.Hero` token with `withSbContent` here.
// Once Stackbit helpers are in it's own package, we should move this
// token into the `@kenvue/dxp-image` package.
export const Hero = asElementToken(dxpImage.Plain, {
  Content: {
    _: withSbContent(),
  },
});

//
export const Curator = asCuratorSectionToken(dxpCuratorSection.Default, {
  Content: {
    Feed:
      withSbContent(),
  },
});

export const Default = asGenericTemplateToken({
  ...vitalGenericTemplate.Default,
  Components: {
    ...vitalGenericTemplate.Default.Components,
    PageWrapper: dxpLayout.Default,
    // TopContent: on(Img)(Hero),
    BottomContent: flowIf(() => useNode().node.pagePath === '/')(
      on(CuratorSectionClean)(Curator),
    ),
  },
  Theme: {
    // @todo remove this
    ContentWrapper: vitalTypography.H2,
  },
  Content: {
    // Content domain is "inside" Schema domain, so these are invoked after
    // The node-keys have been defined.  This way we avoid having to
    // specify the node key in more thn one place. Note that the node key
    // must be the same as the stackbit field name.
    // TopContent: withSbContentFromParent(),
    Content: withSbContentFromParent(),
    BottomContent: withSbContentFromParent(),
  },
});

const dxpGenericTemplate = {
  ...vitalGenericTemplate,
  Default,
};

export default dxpGenericTemplate;
