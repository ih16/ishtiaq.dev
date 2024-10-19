import * as React from "react";
import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 30 30"
    {...props}
  >
    <g clipPath="url(#clip0_102_1302)">
      <g fill="currentColor" clipPath="url(#clip1_102_1302)">
        <path d="m12.246 2.339 10.04 6.5v12.336l-7.56 4.71V13.55L4.674 7.058l7.572-4.72Z" />
        <path d="M11.476 25.202v-9.627L3.9 20.294l7.576 4.908Z" />
      </g>
    </g>
  </svg>
);
export default SvgComponent;
