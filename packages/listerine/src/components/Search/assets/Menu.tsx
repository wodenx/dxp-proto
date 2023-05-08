import React from 'react';
import { stylable } from '@bodiless/fclasses';

const Menu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="15"
    viewBox="0 0 20 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.98462 2H17.9846"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M1.98462 7.68994H17.9846"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M1.98462 13.3799H17.9846"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const MenuIcon = stylable(Menu);

export default MenuIcon;
