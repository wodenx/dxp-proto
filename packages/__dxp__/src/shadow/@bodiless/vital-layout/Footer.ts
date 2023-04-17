// TODO This file should move to Listerine package and shadow

import { vitalFooterBase, asHeaderToken } from '@bodiless/vital-layout';
import listerineFooter from '../../../components/Layout/Footer/tokens';

const Default = asHeaderToken(listerineFooter.Default);

export default {
  ...vitalFooterBase,
  Default,
};
