import { TokenCollection } from '@bodiless/fclasses';
import { CardComponents } from '@bodiless/vital-card';

import * as listerineBaseCard from './listerineBaseCard';
import * as listerineHeroCard from './listerineHeroCard';
import * as listerineProductCard from './listerineProductCard';

export interface ListerineCards extends TokenCollection<CardComponents, {}> {}
export default {
  ...listerineBaseCard,
  ...listerineHeroCard,
  ...listerineProductCard,
};
