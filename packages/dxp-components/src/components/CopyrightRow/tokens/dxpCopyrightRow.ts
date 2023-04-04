import { vitalCopyrightRow, asCopyrightRowToken } from '@bodiless/vital-layout';
import { EditorPlainClean } from '@bodiless/vital-editors';
import { on } from '@bodiless/fclasses';
import { dxpEditorPlain } from '../../EditorPlain';
import { withSbFieldPath } from '../../../util';

const Default = asCopyrightRowToken({
  ...vitalCopyrightRow.Default,
  Editors: {
    Copyright: on(EditorPlainClean)(dxpEditorPlain.Default, withSbFieldPath()),
  },
  // Content: {
  //   Copyright: as(
  //     withSbFieldPath(),
  //     withSbContentFromParent('copyright'),
  //     vitalCopyrightRow.Default.Content.Copyright,
  //   ),
  // },
});

const dxpCopyrightRow = {
  ...vitalCopyrightRow,
  Default,
};

export default dxpCopyrightRow;
