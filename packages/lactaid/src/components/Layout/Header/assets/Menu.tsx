import React from 'react';
import { stylable } from '@bodiless/fclasses';

const Menu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="27" height="26" viewBox="0 0 27 26" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 2.75C0 1.92157 0.671573 1.25 1.5 1.25H25.5C26.3284 1.25 27 1.92157 27 2.75C27 3.57843 26.3284 4.25 25.5 4.25H1.5C0.671573 4.25 0 3.57843 0 2.75Z"
      fill="#0059A3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 13.25C0 12.4216 0.671573 11.75 1.5 11.75H25.5C26.3284 11.75 27 12.4216 27 13.25C27 14.0784 26.3284 14.75 25.5 14.75H1.5C0.671573 14.75 0 14.0784 0 13.25Z"
      fill="#0059A3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 23.25C0 22.4216 0.671573 21.75 1.5 21.75H25.5C26.3284 21.75 27 22.4216 27 23.25C27 24.0784 26.3284 24.75 25.5 24.75H1.5C0.671573 24.75 0 24.0784 0 23.25Z"
      fill="#0059A3"
    />
  </svg>
);

const MenuIcon = stylable(Menu);

export default MenuIcon;
