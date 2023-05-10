import React from 'react';
import { stylable } from '@bodiless/fclasses';

const YouTube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#0059A3"
      fillRule="evenodd"
      d="M19.792 5.415c.86.23 1.54.911 1.771 1.771C21.988 8.752 22 12 22 12s0 3.26-.424 4.814a2.519 2.519 0 0 1-1.771 1.771c-1.553.424-7.805.424-7.805.424s-6.252 0-7.805-.424a2.519 2.519 0 0 1-1.771-1.771C2 15.248 2 12 2 12s0-3.248.41-4.801c.232-.86.912-1.54 1.772-1.771 1.554-.424 7.805-.437 7.805-.437s6.252 0 7.805.424ZM15.184 12l-5.187 3.004V8.996L15.184 12Z"
      clipRule="evenodd"
    />
  </svg>
);

const YouTubeIcon = stylable(YouTube);

export default YouTubeIcon;
