// TODO This file should move to Listerine package and shadow

import { vitalFooterBase, asFooterToken } from '@bodiless/vital-layout';
import listerineFooter from '../../../components/Layout/Footer/tokens';

const Default = asFooterToken(listerineFooter.Default);

export default {
  ...vitalFooterBase,
  Default,
};
