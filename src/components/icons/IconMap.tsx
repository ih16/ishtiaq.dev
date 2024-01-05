import TypeScriptIcon from "./Typescript";
import JavascriptIcon from "./Javascript";
import ReactIcon from "./React";
import NextjsIcon from "./Nextjs";
import PhpIcon from "./Php";
import PhalconIcon from "./Phalcon";
import AstroIcon from "./Astro";
import PythonIcon from "./Python";
import CIcon from "./C";

const IconMap = {
  react: <ReactIcon />,
  javascript: <JavascriptIcon />,
  typescript: <TypeScriptIcon />,
  nextjs: <NextjsIcon />,
  php: <PhpIcon />,
  phalcon: <PhalconIcon />,
  astro: <AstroIcon />,
  python: <PythonIcon />,
  c: <CIcon />,
};

export default IconMap as { [key: string]: JSX.Element };
