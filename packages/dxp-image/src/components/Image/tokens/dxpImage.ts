import { asElementToken } from '@bodiless/vital-elements';
import { vitalImage } from '@bodiless/vital-image';

const Plain = asElementToken({
  ...vitalImage.Plain,
  // Reset Core to get rid of Gatsby Image
  Core: {},
  // Reset Schema to be able to grab data from Stackbit content.
  Schema: {},
  Theme: {
    _: 'w-full'
  }
});

const Hero = asElementToken({
  ...vitalImage.Hero,
  // Reset Schema to be able to grab data from Stackbit content.
  Schema: {},
});

const dxpImage = {
  Plain,
  Hero,
};

export default dxpImage;
