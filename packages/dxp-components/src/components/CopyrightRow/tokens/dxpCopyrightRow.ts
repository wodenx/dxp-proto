import { vitalCopyrightRow, asCopyrightRowToken } from '@bodiless/vital-layout';
import { EditorPlainClean } from '@bodiless/vital-editors';
import { on, extendDesign } from '@bodiless/fclasses';
import { dxpEditorPlain } from '../../EditorPlain';
import { withSbFieldPath, withSbContentFromParent } from '../../../util';

const Default = asCopyrightRowToken({
  ...vitalCopyrightRow.Default,
  Components: {
    ...vitalCopyrightRow.Default.Components,
    Disclaimer: on(EditorPlainClean)(dxpEditorPlain.Default, withSbFieldPath()),
    Copyright: on(EditorPlainClean)(dxpEditorPlain.Default, withSbFieldPath()),
  },
  Content: extendDesign(vitalCopyrightRow.Default.Content, {
    Disclaimer: withSbContentFromParent(),
    Copyright: withSbContentFromParent(),
  }),
});

const dxpCopyrightRow = {
  ...vitalCopyrightRow,
  Default,
};

export default dxpCopyrightRow;
