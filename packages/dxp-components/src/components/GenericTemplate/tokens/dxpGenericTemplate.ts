import { vitalGenericTemplateBase, asGenericTemplateToken } from '@bodiless/vital-templates';
import { vitalTypography } from '@bodiless/vital-elements';
import { EditorPlainClean } from '@bodiless/vital-editors';
// import EditorPlainClean from '../../../util/NodeTreePrinter';
import { on, replaceWith, addProps, Div } from '@bodiless/fclasses';
import { withSbContentFromParent } from '../../../util';
import { dxpEditorPlain } from '../../EditorPlain';

export const Generic = asGenericTemplateToken({
  ...vitalGenericTemplateBase.Generic,
  Components: {
    ...vitalGenericTemplateBase.Generic.Components,
    TopContent: replaceWith(() => null),
    Content: on(EditorPlainClean)(dxpEditorPlain.Default),
    // Content: on(NodeTreePrinter)(dxpEditorPlain.Default),
    BottomContent: replaceWith(() => null),
    // BottomContent: on(EditorPlainClean)(dxpEditorPlain.StackbitContainerItem),
  },
  Theme: {
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
