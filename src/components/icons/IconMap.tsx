import TypeScriptIcon from "./Typescript";
import JavascriptIcon from "./Javascript";
import ReactIcon from "./React";
import NextjsIcon from "./Nextjs";
import PhpIcon from "./Php";
import PhalconIcon from "./Phalcon";
import AstroIcon from "./Astro";
import PythonIcon from "./Python";
import CIcon from "./C";
import CPPIcon from "./CPP";
import DockerIcon from "./Docker";
import TanstackQueryIcon from "./TanstackQuery";
import ExpressIcon from "./Express";
import CodeigniterIcon from "./Codeigniter";
import LarvelIcon from "./Laravel";
import StrapiIcon from "./Strapi";
import ElysiajsIcon from "./Elysiajs";
import LessIcon from "./Less";
import SvelteIcon from "./Svelte";
import NodeIcon from "./Nodejs";
import JqueryIcon from "./Jquery";
import ReduxIcon from "./Redux";

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
  cpp: <CPPIcon />,
  docker: <DockerIcon />,
  tanstackquery: <TanstackQueryIcon />,
  express: <ExpressIcon />,
  codeigniter: <CodeigniterIcon />,
  laravel: <LarvelIcon />,
  strapi: <StrapiIcon />,
  elysiajs: <ElysiajsIcon />,
  less: <LessIcon />,
  svelte: <SvelteIcon />,
  nodejs: <NodeIcon />,
  jquery: <JqueryIcon />,
  redux: <ReduxIcon />,
};

export default IconMap as { [key: string]: JSX.Element };
