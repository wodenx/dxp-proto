import React from 'react';
import { stylable } from '@bodiless/fclasses';

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.186.419-.6.225-1.144.58-1.594 1.038-.457.45-.812.993-1.038 1.593-.221.573-.374 1.228-.418 2.186C3.011 9.25 3 9.555 3 12c0 2.445.01 2.75.054 3.71.044.959.196 1.613.419 2.186.225.6.58 1.144 1.038 1.594.45.458.993.812 1.593 1.038.573.222 1.227.374 2.186.418.96.044 1.266.054 3.71.054s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.186-.419.6-.225 1.144-.58 1.594-1.038.458-.45.812-.993 1.038-1.593.222-.573.374-1.227.418-2.186.044-.96.054-1.266.054-3.71s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.186A4.413 4.413 0 0 0 19.49 4.51a4.415 4.415 0 0 0-1.593-1.038c-.573-.221-1.228-.374-2.186-.418C14.75 3.011 14.445 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.186 1.671.31.42.163.72.358 1.035.673.315.315.51.615.673 1.035.123.317.27.794.31 1.67.043.95.052 1.235.052 3.638 0 2.403-.009 2.688-.052 3.637-.04.877-.186 1.354-.31 1.671-.144.391-.374.745-.673 1.035-.29.299-.644.529-1.035.673-.317.123-.794.27-1.67.31-.95.043-1.234.052-3.638.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.186-1.671-.31a2.787 2.787 0 0 1-1.035-.673 2.789 2.789 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.67-.043-.95-.052-1.235-.052-3.638 0-2.403.009-2.688.052-3.637.04-.877.186-1.354.31-1.671.163-.42.358-.72.673-1.035.29-.299.644-.529 1.035-.673.317-.123.794-.27 1.67-.31.95-.043 1.235-.052 3.638-.052Z"
      clipRule="evenodd"
    />
    <path
      fill="#0059A3"
      fillRule="evenodd"
      d="M12 15.003a3.003 3.003 0 1 1 0-6.006 3.003 3.003 0 0 1 0 6.006Zm0-7.629a4.626 4.626 0 1 0 0 9.252 4.626 4.626 0 0 0 0-9.252Zm5.972-.084a1.093 1.093 0 1 1-2.187 0 1.093 1.093 0 0 1 2.187 0Z"
      clipRule="evenodd"
    />
  </svg>
);

const InstagramIcon = stylable(Instagram);

export default InstagramIcon;
