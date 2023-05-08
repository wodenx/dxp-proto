import pick from 'lodash/pick';
import { dxpProductSectionBase } from '@kenvue/dxp-product';
import { listerineSection } from '../../../components/Section';

// Note all different setion variations are defined in listerineSection, but
// here we are shadowing only those provided by dxpProductSection. An alternative
// acceptable pattern would be to create instead a `listerineProductSection`
// collection and export that here.
export default pick(listerineSection, Object.keys(dxpProductSectionBase));
