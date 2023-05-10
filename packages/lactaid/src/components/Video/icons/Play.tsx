import React from 'react';
import { stylable } from '@bodiless/fclasses';

const Play = (props: React.SVGProps<SVGSVGElement>) => (

  <svg viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.9995 47.1358C36.2348 47.1358 46.1534 37.2172 46.1534 24.982C46.1534 12.7467 36.2348 2.82812 23.9995 2.82812C11.7643 2.82812 1.8457 12.7467 1.8457 24.982C1.8457 37.2172 11.7643 47.1358 23.9995 47.1358Z" stroke="white" strokeWidth="4" />
    <path d="M 23.781 16.704 Q 23.93 16.445 24.079 16.704 L 33.7 33.471 Q 33.849 33.73 33.551 33.73 L 14.309 33.73 Q 14.011 33.73 14.16 33.471 Z" stroke="white" strokeWidth="4" transform="matrix(0, 1, -1, 0, 52.082249, 1.222248)" />
  </svg>

);

const PlayIcon = stylable(Play);

export default PlayIcon;
