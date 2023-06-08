import React from 'react';
import { stylable } from '@bodiless/fclasses';

const Pause = (props: React.SVGProps<SVGSVGElement>) => (

  <svg viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.9995 47.1358C36.2348 47.1358 46.1534 37.2172 46.1534 24.982C46.1534 12.7467 36.2348 2.82812 23.9995 2.82812C11.7643 2.82812 1.8457 12.7467 1.8457 24.982C1.8457 37.2172 11.7643 47.1358 23.9995 47.1358Z" stroke="white" strokeWidth="4" />
    <path d="M18.8359 17.7031V32.9228" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <path d="M29.1641 17.7031V32.9228" stroke="white" strokeWidth="4" strokeLinecap="round" />
  </svg>

);

const PauseIcon = stylable(Pause);

export default PauseIcon;
