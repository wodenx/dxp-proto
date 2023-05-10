import React, { useState, useRef } from 'react';
import {
  Button, ComponentOrTag,
  designable,
  Div,
  Video,
  DesignableComponentsProps,
  Span,
} from '@bodiless/fclasses';
import { asVitalTokenSpec } from '@bodiless/vital-elements';
// import { useVideoAutoPlayback } from './helpers/AutoPlayback';

export type VideoComponents = {
  Wrapper: ComponentOrTag<any>,
  Video: ComponentOrTag<any>,
  VideoButton: ComponentOrTag<any>,
  Play: ComponentOrTag<any>,
  Pause: ComponentOrTag<any>,
};

const videoComponents:VideoComponents = {
  Wrapper: Div,
  Video,
  VideoButton: Button,
  Play: Span,
  Pause: Span,
};

type Props = DesignableComponentsProps<VideoComponents> & { };

// TODO Offer a video clean that doesn't play until its scroll to
// Don't need for lactaid as its above fold.

// const VideoBase = (props: Props) => {
//   const { components: C } = props;

//   const [containerRef, videoRef] = useVideoAutoPlayback({
//     root: null,
//     rootMargin: '0px',
//     threshold: 1,
//   });

//   return (
//     // Both `Wrapper` and `Video` are `stylable` elements which accept a `forwardRef`
//     // prop and pass it as a ref to the underlying html element.
//     // @see https://github.com/johnsonandjohnson/Bodiless-JS/blob/main/packages/fclasses/src/addClasses.tsx
//     <C.Wrapper forwardRef={containerRef}>
//       <C.Video forwardRef={videoRef} muted="muted">
//         Sorry, your browser does not support videos
//       </C.Video>
//     </C.Wrapper>
//   );
// };

const VideoBase = (props: Props) => {
  const { components: C } = props;

  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <C.Wrapper>
      <C.Video muted="muted" forwardRef={videoRef} playsinline>
        Sorry, your browser does not support videos
      </C.Video>
      <C.VideoButton onClick={togglePlay}>
        {isPlaying ? <C.Pause /> : <C.Play />}
      </C.VideoButton>
    </C.Wrapper>
  );
};

const VideoClean = designable(videoComponents, 'Video')(VideoBase);

export const asVideoToken = asVitalTokenSpec<VideoComponents>();

export default VideoClean;
