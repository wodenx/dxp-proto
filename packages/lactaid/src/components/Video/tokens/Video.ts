import { withNodeKey, withChild } from '@bodiless/core';
import { addProps, flowHoc } from '@bodiless/fclasses';
import { asBodilessVideo } from '../helpers/EditableVideo';
import { asVideoToken } from '../VideoClean';
import PauseIcon from '../icons/Pause';
import PlayIcon from '../icons/Play';

const Default = asVideoToken({
  Components: {
    Pause: withChild(PauseIcon),
    Play: withChild(PlayIcon),
  },
  Layout: {
    Video: 'w-full',
    Wrapper: 'relative',
    VideoButton: 'absolute bottom-0 right-0',
  },
  Spacing: {
    Video: 'mx-auto',
    VideoButton: 'm-8',
  },
  Theme: {
    VideoButton: 'w-[22px] h-[22px] md:w-[44px] md:h-[44px]',
  },
  Meta: flowHoc.meta.term('Type')('Video'),
});

// TODO Test this token
const withEditable = asVideoToken({
  Editors: {
    Video: asBodilessVideo(),
  },
  Schema: {
    Video: withNodeKey('video'),
  },
  Meta: flowHoc.meta.term('Behavior')('Editable'),
});

const withPlaysInline = asVideoToken({
  Content: {
    Video: addProps({
      playsinline: true,
    }),
  },
  Meta: flowHoc.meta.term('Behavior')('Inline'),
});

const withAutoPlay = asVideoToken({
  Content: {
    Video: addProps({
      autoplay: 'autoplay',
    }),
  },
  Meta: flowHoc.meta.term('Behavior')('AutoPlay'),
});

const withLoop = asVideoToken({
  Content: {
    Video: addProps({
      loop: true,
    }),
  },
  Meta: flowHoc.meta.term('Behavior')('Loop'),
});

// Lactaid specific token (remove on port to vital)
const withLactaidHomeHero = asVideoToken({
  Layout: {
    Video: 'xl:-mt-90',
    Wrapper: 'xl:max-h-[600px] overflow-hidden',
  },
  Spacing: {
    Wrapper: 'xl:mx-36'
  },
  Meta: flowHoc.meta.term('Behavior')('Home'),
});

export default {
  Default,
  withAutoPlay,
  withLoop,
  withEditable,
  withPlaysInline,
  withLactaidHomeHero,
};
