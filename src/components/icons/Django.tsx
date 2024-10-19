import * as React from "react";
import type { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 256 256"
    {...props}
  >
    <rect width={256} height={256} fill="#092E20" rx={28} />
    <path
      fill="#FFFFFD"
      d="M186.377 94.198v66.226c0 22.82-1.67 33.764-6.678 43.225-4.639 9.092-10.761 14.842-23.375 21.15l-26.53-12.615c12.616-5.936 18.738-11.13 22.633-19.11 4.082-8.161 5.382-17.623 5.382-42.481V94.198h28.568Zm-45.449-44.12v132.239c-14.655 2.782-25.415 3.895-37.102 3.895-34.877 0-53.057-15.767-53.057-46.007 0-29.126 19.294-48.047 49.16-48.047 4.638 0 8.163.37 12.43 1.483V50.08h28.57Zm-38.215 65.082c-14.47 0-22.819 8.905-22.819 24.487 0 15.214 7.978 23.561 22.634 23.561 3.152 0 5.75-.185 9.831-.74v-45.825c-3.339-1.112-6.121-1.483-9.646-1.483Zm83.664-64.93v29.312h-28.568V50.231h28.568Z"
    />
  </svg>
);
export default SvgComponent;
