// This file is not used yet as I commented out iv VideoCLean.tsx.
// from https://esausilva.com/2021/06/14/react-hook-to-play-video-using-intersection-observer/

import { useRef, useEffect } from 'react';

// @ts-ignore:  TS7006: Parameter 'entries' implicitly has an 'any' type.
const useVideoAutoPlayback = options => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Catching the unmounted error
  if (!containerRef || !videoRef) return [null, null];

  // @ts-ignore:  TS7006: Parameter 'entries' implicitly has an 'any' type.
  const cb = entries => {
    const [entry] = entries;
    if (videoRef.current) {
      if (entry.isIntersecting) {
        // https://developer.chrome.com/blog/play-request-was-interrupted/
        const playPromise = videoRef.current!.play();
        if (playPromise !== undefined) {
          playPromise.then(_ => {
            // Automatic playback started!
            // Show playing UI.
          })
            .catch(error => {
            // Auto-play was prevented
            // Show paused UI.
            });
        }
      } else videoRef.current!.pause();
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(cb, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [containerRef, videoRef];
};

export { useVideoAutoPlayback };
