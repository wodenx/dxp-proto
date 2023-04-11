import React from 'react';
import { stylable } from '@bodiless/fclasses';

const Search = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="23"
    height="24"
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_64_1526)">
      <path
        d="M9.94 18.96C14.6013 18.96 18.38 15.1634 18.38 10.48C18.38 5.79662 14.6013 2 9.94 2C5.27872 2 1.5 5.79662 1.5 10.48C1.5 15.1634 5.27872 18.96 9.94 18.96Z"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0601 16.78L21.5001 22"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_64_1526">
        <rect
          width="23"
          height="23"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

const SearchIcon = stylable(Search);

export default SearchIcon;
