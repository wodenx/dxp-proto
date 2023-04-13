import { vitalCopyrightRow, asCopyrightRowToken } from '@bodiless/vital-layout';
import { BlockEditorPlainClean } from '@bodiless/vital-editors';
import {
  on, extendDesign, addProps
} from '@bodiless/fclasses';
import { asElementToken } from '@bodiless/vital-elements';
import { dxpEditorPlain } from '../../EditorPlain';
import { withSbContentFromParent } from '../../../util';

const dxpCopyrightRowEditorPlain = asElementToken(dxpEditorPlain.Default, {
  Compose: {
    WithDiv: addProps({ tagName: 'div' }),
  },
});

const Default = asCopyrightRowToken({
  ...vitalCopyrightRow.Default,
  Components: {
    ...vitalCopyrightRow.Default.Components,
    Disclaimer: on(BlockEditorPlainClean)(dxpCopyrightRowEditorPlain),
    Copyright: on(BlockEditorPlainClean)(dxpCopyrightRowEditorPlain),
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
