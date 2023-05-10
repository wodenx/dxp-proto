import React from 'react';
import { stylable } from '@bodiless/fclasses';

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1_5)">
      <path d="M13.7194 26.3403C10.4967 26.3341 7.39122 25.1311 5.00536 22.9648C2.61949 20.7984 1.12335 17.823 0.807143 14.6159C0.490937 11.4088 1.37722 8.19854 3.29407 5.60793C5.21092 3.01732 8.02167 1.23103 11.1811 0.595588C14.3405 -0.0398555 17.6233 0.520854 20.3926 2.16894C23.162 3.81702 25.2205 6.43498 26.1688 9.51496C27.1171 12.5949 26.8876 15.9174 25.5248 18.8377C24.1621 21.7581 21.7631 24.0681 18.7935 25.3198C17.1874 25.9959 15.462 26.3429 13.7194 26.3403ZM13.7194 8.52375C11.9027 8.50281 10.0865 8.60158 8.28283 8.81942C7.98433 8.90402 7.71342 9.06585 7.49741 9.28857C7.28139 9.51128 7.12793 9.78701 7.05248 10.088C6.67097 12.3611 6.67097 14.682 7.05248 16.9551C7.12761 17.2552 7.28113 17.5299 7.49732 17.7511C7.71351 17.9723 7.98459 18.1321 8.28283 18.2141C11.8965 18.6084 15.5423 18.6084 19.1559 18.2141C19.4543 18.1335 19.7261 17.9755 19.9438 17.7561C20.1616 17.5367 20.3175 17.2637 20.3958 16.9647C20.7773 14.6915 20.7773 12.3707 20.3958 10.0975C20.3204 9.79653 20.1669 9.5208 19.9509 9.29808C19.7349 9.07537 19.4639 8.91357 19.1654 8.82897C17.3651 8.60797 15.5522 8.50601 13.7384 8.52375H13.7194Z" fill="white" />
      <path d="M12.9233 15.8703V11.3103L16.5304 13.5903L12.9233 15.8703Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_1_5">
        <rect width="27" height="27" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const TwitterIcon = stylable(Twitter);

export default TwitterIcon;