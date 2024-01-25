import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="nonzero">
      <path
        fill="#2EC7FF"
        d="M116.85 4.545 4.53 116.775a15.396 15.396 0 0 0 0 21.812L116.85 250.816c6.039 6.033 15.792 6.033 21.83 0l47.095-47.056c5.408-5.404 5.408-14.165 0-19.568-5.408-5.404-14.176-5.404-19.584 0l-35.702 35.672c-1.503 1.502-3.784 1.502-5.287 0l-89.696-89.622c-1.503-1.502-1.503-3.781 0-5.283l89.696-89.623c1.503-1.501 3.784-1.501 5.287 0l35.702 35.673c5.408 5.404 14.176 5.404 19.584 0 5.408-5.404 5.408-14.164 0-19.568l-47.09-47.05c-6.063-5.904-15.82-5.856-21.835.154Z"
      />
      <path
        fill="#148EFF"
        d="M116.85 4.545 4.53 116.775a15.396 15.396 0 0 0 0 21.812L116.85 250.816c6.039 6.033 15.792 6.033 21.83 0l47.095-47.056c5.408-5.404 5.408-14.165 0-19.568-5.408-5.404-14.176-5.404-19.584 0l-35.702 35.672c-1.503 1.502-3.784 1.502-5.287 0l-89.696-89.622c-1.503-1.502-1.503-3.781 0-5.283l89.696-89.623c3.742-3.226 9.849-9.76 18.815-11.29 6.664-1.135 13.95 1.365 21.857 7.5L138.686 4.39c-6.064-5.903-15.82-5.855-21.836.155Z"
      />
      <path
        fill="#F74A5C"
        d="M196.647 173.754c5.408 5.404 14.176 5.404 19.584 0l34.739-34.71a15.396 15.396 0 0 0 0-21.812l-35.041-34.89c-5.421-5.397-14.192-5.389-19.603.018-5.408 5.404-5.408 14.164 0 19.568l23.667 23.648c1.503 1.502 1.503 3.781 0 5.283l-23.346 23.327c-5.408 5.404-5.408 14.165 0 19.568Z"
      />
      <ellipse
        cx={128.327}
        cy={128.242}
        fill="#F51D2C"
        rx={30.327}
        ry={30.302}
      />
    </g>
  </svg>
);
export default SvgComponent;
