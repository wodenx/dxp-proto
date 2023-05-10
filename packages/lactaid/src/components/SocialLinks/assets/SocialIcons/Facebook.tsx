import React from 'react';
import { stylable } from '@bodiless/fclasses';

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#0059A3"
      fillRule="evenodd"
      d="M2.16 4.771v2.752H0v3.369h2.16v10.005h4.441V10.891h2.977s.28-1.616.415-3.38H6.617V5.21c0-.346.484-.807.963-.807H10V.896H6.708C2.05.896 2.16 4.27 2.16 4.771Z"
      clipRule="evenodd"
    />
  </svg>
);

const FacebookIcon = stylable(Facebook);

export default FacebookIcon;
