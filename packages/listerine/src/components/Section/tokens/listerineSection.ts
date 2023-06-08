import listerineSectionBase from './base';
import listerineSectionProduct from './product';
import listerineSectionProductCollection from './productCollection';
import listerineSectionSocialWall from './socialWall';

export default {
  ...listerineSectionBase,
  ...listerineSectionProduct,
  ...listerineSectionProductCollection,
  ...listerineSectionSocialWall,
};
