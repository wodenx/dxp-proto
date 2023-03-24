// @todo We will eventually just replace this with a component which renders the text.
import { vitalEditorPlainBase } from '@bodiless/vital-editors';
import { asElementToken } from '@bodiless/vital-elements';
import { withSbContent } from '../../../util';

// The stackbit field value is a plain string, but we expect an object.
const transformContent = (text: string) => ({ text });

export const Default = asElementToken({
  ...vitalEditorPlainBase.Default,
  // Remove the slate transltor from the core domain.
  Core: {},
  Content: {
    _: withSbContent(transformContent),
  },
});

export const StackbitContainerItem = asElementToken({
  ...vitalEditorPlainBase.Default,
  // Remove the slate transltor from the core domain.
  Core: {},
  Content: {
    // Here the stackbit EditorPlain model is already shaped like the
    // data expected by the Bodiless Editable so we don't have to transform it
    // (no trnsformer passed to withSbContent()), just pull it out of the index.
    _: withSbContent(),
  },
});

const dxpEditorPlain = {
  ...vitalEditorPlainBase,
  Default,
  StackbitContainerItem,
};

export default dxpEditorPlain;
