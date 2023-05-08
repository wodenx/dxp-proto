import { asCardToken, vitalCardBase } from '@bodiless/vital-card';

import { listerineCard } from '../../../components/Card';

const Hero = asCardToken(listerineCard.HeroRightCard);

export default {
  ...vitalCardBase,
  Hero,
};
