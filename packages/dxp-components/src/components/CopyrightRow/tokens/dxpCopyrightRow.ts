import { vitalCopyrightRow, asCopyrightRowToken } from '@bodiless/vital-layout';
import { EditorPlainClean } from '@bodiless/vital-editors';
import { as, on } from '@bodiless/fclasses';
import { dxpEditorPlain } from '../../EditorPlain';
import { withSbContentFromParent } from '../../../util';

const Default = asCopyrightRowToken({
  ...vitalCopyrightRow.Default,
  Editors: {
    Copyright: on(EditorPlainClean)(dxpEditorPlain.Default),
  },
  Content: {
    Copyright: as(
      withSbContentFromParent('copyright'),
      vitalCopyrightRow.Default.Content.Copyright,
      // addProps({ 'data-foo': 'bar' }),
    ),
  },
});

const dxpCopyrightRow = {
  ...vitalCopyrightRow,
  Default,
};

export default dxpCopyrightRow;
