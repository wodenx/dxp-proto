import { asCardToken, vitalCardBase } from '@bodiless/vital-card';

import { listerineCardHero } from '../../../components/Card';

const Hero = asCardToken(listerineCardHero.HeroRightCard);

export default {
  ...vitalCardBase,
  Hero,
  // @todo vital-card 'Hero' should be the default.
  HeroLeftImageContentCentered: Hero,
};
