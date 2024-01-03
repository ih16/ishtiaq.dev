import TypeScriptIcon from "./Typescript";
import JavascriptIcon from "./Javascript";
import ReactIcon from "./React";
import NextjsIcon from "./Nextjs";

const IconMap = {
  react: <ReactIcon />,
  javascript: <JavascriptIcon />,
  typescript: <TypeScriptIcon />,
  nextjs: <NextjsIcon />,
};

export default IconMap as { [key: string]: JSX.Element };
