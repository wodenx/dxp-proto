import { asHeaderToken, vitalHeaderBase } from '@bodiless/vital-layout';
import listerineHeader from '../../../components/Layout/Header/tokens';

const Default = asHeaderToken(listerineHeader.Default);

export default {
  ...vitalHeaderBase,
  Default,
};
