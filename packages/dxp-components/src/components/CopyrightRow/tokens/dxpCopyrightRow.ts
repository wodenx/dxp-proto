import { vitalCopyrightRow, asCopyrightRowToken } from '@bodiless/vital-layout';
import { EditorPlainClean } from '@bodiless/vital-editors';
import { as, on } from '@bodiless/fclasses';
import { withSbContent } from '../../../util';
import { dxpEditorPlain } from '../../EditorPlain';

const Default = asCopyrightRowToken({
  ...vitalCopyrightRow.Default,
  Editors: {
    Copyright: on(EditorPlainClean)(dxpEditorPlain.Default),
  },
  Content: {
    Copyright: as(
      vitalCopyrightRow.Default.Content.Copyright,
      withSbContent(),
    ),
  },
});

const dxpCopyrightRow = {
  ...vitalCopyrightRow,
  Default,
};

export default dxpCopyrightRow;
