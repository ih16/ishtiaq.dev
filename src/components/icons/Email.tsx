import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 2c5.43 0 9.848 4.327 9.996 9.72L22 12v1c0 2.173-1.523 4-3.5 4-1.173 0-2.186-.643-2.816-1.62a5 5 0 1 1 1.311-3.597L17 12v1c0 1.14.716 2 1.5 2 .745 0 1.428-.775 1.495-1.831L20 13v-1a8 8 0 1 0-4.677 7.28 1 1 0 1 1 .831 1.819A9.966 9.966 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2Zm0 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
    />
  </svg>
);
export default SvgComponent;
