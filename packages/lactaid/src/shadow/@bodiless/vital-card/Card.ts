import { asCardToken, vitalCardBase } from '@bodiless/vital-card';

import { lactaidCardHero } from '../../../components/Card';

const Hero = asCardToken(lactaidCardHero.HeroRightCard);

export default {
  ...vitalCardBase,
  Hero,
};
