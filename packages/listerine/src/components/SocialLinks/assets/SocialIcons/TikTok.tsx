import React from 'react';
import { stylable } from '@bodiless/fclasses';

const TikTok = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M13.1 26.59a13 13 0 1 1 .014-26 13 13 0 0 1-.014 26Zm-1.998-15.13a4.374 4.374 0 0 0-2.51 7.96 4.375 4.375 0 0 0 6.181.247 4.429 4.429 0 0 0 1.408-3.224v-4.84a5.621 5.621 0 0 0 3.3 1.065V10.29a2.851 2.851 0 0 1-.695-.076v-.532a3.262 3.262 0 0 1-1.797-.533 3.252 3.252 0 0 1-.818-2.168h-.637a3.229 3.229 0 0 1-.057-.609H13.1v9.51a1.997 1.997 0 0 1-2.073 1.902 1.902 1.902 0 0 1-.856-.228 1.997 1.997 0 0 1 1.616-3.167c.2.008.398.04.59.095v-2.406a4.029 4.029 0 0 0-.59 0h-.104v-.57a4.01 4.01 0 0 0-.58-.048Z"
    />
  </svg>
);

const TikTokIcon = stylable(TikTok);

export default TikTokIcon;
