import React from 'react';
import { stylable } from '@bodiless/fclasses';

const Bottle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="19"
    height="35"
    viewBox="0 0 19 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.4653 7.34656V1.30981H6.27258V7.34656H11.4653Z"
      fill="#105367"
      stroke="#105367"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.4103 14.4017V11.1081C17.4099 10.9102 17.369 10.7146 17.2901 10.5331C17.2112 10.3517 17.096 10.1883 16.9516 10.0531C14.8886 8.12697 12.1684 7.06056 9.346 7.07137H8.6304C5.8043 7.06441 3.0816 8.13379 1.01566 10.0622C0.870622 10.195 0.754894 10.3566 0.675905 10.5367C0.596915 10.7168 0.556403 10.9114 0.556941 11.1081V14.3742C0.558138 14.4706 0.578302 14.5658 0.616297 14.6544C0.654292 14.743 0.70937 14.8232 0.778377 14.8905C0.847385 14.9578 0.928977 15.0108 1.01849 15.0466C1.108 15.0824 1.20368 15.1002 1.30007 15.099H1.5019C1.59829 15.0965 1.69422 15.1131 1.78421 15.1477C1.87419 15.1824 1.95644 15.2344 2.02631 15.3009C2.09617 15.3673 2.15225 15.4469 2.19135 15.5351C2.23046 15.6232 2.2518 15.7182 2.25418 15.8146V25.9064C2.24705 26.1011 2.16467 26.2855 2.02435 26.4207C1.88403 26.5558 1.69675 26.6313 1.5019 26.6312H1.29088C1.19449 26.6288 1.09856 26.6453 1.00858 26.68C0.918595 26.7146 0.836314 26.7667 0.76645 26.8331C0.696587 26.8996 0.640502 26.9791 0.601402 27.0673C0.562301 27.1554 0.540954 27.2504 0.538574 27.3468V33.934C0.540954 34.0304 0.562301 34.1254 0.601402 34.2135C0.640502 34.3017 0.696587 34.3812 0.76645 34.4477C0.836314 34.5142 0.918595 34.5662 1.00858 34.6008C1.09856 34.6355 1.19449 34.6521 1.29088 34.6496H16.6763C16.7727 34.6521 16.8687 34.6355 16.9586 34.6008C17.0486 34.5662 17.1309 34.5142 17.2008 34.4477C17.2706 34.3812 17.3267 34.3017 17.3658 34.2135C17.4049 34.1254 17.4263 34.0304 17.4286 33.934V27.3468C17.4263 27.2504 17.4049 27.1554 17.3658 27.0673C17.3267 26.9791 17.2706 26.8996 17.2008 26.8331C17.1309 26.7667 17.0486 26.7146 16.9586 26.68C16.8687 26.6453 16.7727 26.6288 16.6763 26.6312H16.4653C16.369 26.6336 16.273 26.617 16.183 26.5824C16.0931 26.5478 16.0108 26.4957 15.9409 26.4293C15.8711 26.3628 15.815 26.2832 15.7759 26.1951C15.7368 26.107 15.7154 26.012 15.713 25.9156V15.8238C15.7154 15.7274 15.7368 15.6324 15.7759 15.5442C15.815 15.4561 15.8711 15.3765 15.9409 15.3101C16.0108 15.2436 16.0931 15.1916 16.183 15.1569C16.273 15.1223 16.369 15.1057 16.4653 15.1081H16.6672C16.7636 15.1106 16.8595 15.094 16.9495 15.0594C17.0395 15.0247 17.1217 14.9727 17.1916 14.9062C17.2615 14.8397 17.3175 14.7602 17.3566 14.6721C17.3957 14.5839 17.4171 14.4889 17.4195 14.3925L17.4103 14.4017Z"
      fill="white"
    />
    <path d="M16.1167 15.0898H2.3551V26.0991H16.1167V15.0898Z" fill="#105367" />
    <path
      d="M17.025 15.1267H1.15332"
      stroke="#00AEC7"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M17.025 26.6404H1.15332"
      stroke="#00AEC7"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const BottleIcon = stylable(Bottle);

export default BottleIcon;
