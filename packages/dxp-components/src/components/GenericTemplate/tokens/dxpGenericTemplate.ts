import { vitalGenericTemplateBase, asGenericTemplateToken } from '@bodiless/vital-templates';
import { asElementToken, vitalTypography } from '@bodiless/vital-elements';
import { EditorPlainClean } from '@bodiless/vital-editors';
import { Img, on } from '@bodiless/fclasses';
import { dxpImage } from '@kenvue/dxp-image';

import { CuratorSectionClean, asCuratorSectionToken, dxpCuratorSection } from '@kenvue/dxp-curator';
import { withSbContent, withSbContentFromParent } from '../../../util';
import { dxpEditorPlain } from '../../EditorPlain';
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
    Feed: withSbContent(),
  },
});

export const Generic = asGenericTemplateToken({
  ...vitalGenericTemplateBase.Generic,
  Components: {
    ...vitalGenericTemplateBase.Generic.Components,
    PageWrapper: dxpLayout.Default,
    // @todo Replace with HeroCard
    TopContent: on(Img)(Hero),
    // @todo replace with section container
    Content: on(EditorPlainClean)(dxpEditorPlain.Default),
    BottomContent: on(CuratorSectionClean)(Curator),
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
    TopContent: withSbContentFromParent(),
    Content: withSbContentFromParent(),
    BottomContent: withSbContentFromParent(),
  },
});

const dxpGenericTemplate = {
  ...vitalGenericTemplateBase,
  Generic,
};

export default dxpGenericTemplate;
