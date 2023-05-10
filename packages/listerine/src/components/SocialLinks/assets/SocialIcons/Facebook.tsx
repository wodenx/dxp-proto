import React from 'react';
import { stylable } from '@bodiless/fclasses';

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={27}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M12.975 26.34a13 13 0 1 1 .05-26 13 13 0 0 1-.05 26ZM9.618 10.765v2.547h1.42v7.239h3.015v-7.24h2.022l.257-2.546h-2.289V9.24a.725.725 0 0 1 .22-.563.706.706 0 0 1 .41-.133h1.621v-2.48h-2.232a3.243 3.243 0 0 0-1.907.534c-.433.298-.766.72-.954 1.211-.152.42-.23.862-.229 1.307v1.65H9.618Z"
    />
  </svg>
);

const FacebookIcon = stylable(Facebook);

export default FacebookIcon;
