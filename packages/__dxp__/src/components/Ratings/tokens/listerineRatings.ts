import { withNodeKey } from '@bodiless/core';
import { addProps } from '@bodiless/fclasses';
import { vitalImage } from '@bodiless/vital-image';
import { asRatingsToken } from '../RatingsClean';

const Default = asRatingsToken({
  Layout: {
    Image: 'max-w-100',
  },
  Components: {
    Image: vitalImage.Plain,
  },
  Schema: {
    Image: withNodeKey('image'),
  },
  Content: {
    Image: addProps({
      src: 'https://i.ibb.co/QHNZGn6/reviews.png',
      alt: 'Stars with 4.1 rating, out of 5 max.',
      title: 'Rating stars',
    }),
  },
});

export default {
  Default,
};
