import Options from "./options";
import Tabs from "../Tabs/Tabs";
import { logs, skills } from "../../data";

const Skills = () => {
  // const skillsByCategory = Object.entries(skills)?.reduce(
  //   (acc, [key, value]) => {
  //     acc[value] = [...(acc?.[value] ?? []), key];
  //     return acc;
  //   },
  //   {} as { [key: string]: string[] }
  // );

  // const getLogsByCategory = (category: string) =>
  //   logs?.filter((log) =>
  //     log?.skills?.some((skill) =>
  //       skillsByCategory?.[category]?.includes(skill)
  //     )
  //   );

  // const lanugagesLog = getLogsByCategory("language");
  // const cmsLog = getLogsByCategory("cms");
  // console.log(cmsLog);

  return (
    <div>
      <Tabs title="LANGUAGES" items={skills.language} />
      <Tabs
        title="FRAMEWORK & LIBRARIES"
        items={[...skills.framework, ...skills.library]}
      />
      <Tabs title="DATABASE" items={skills.database} />
      <Tabs title="RUNTIME" items={skills.runtime} />
      <Tabs title="SERVER" items={skills.server} />
      <Tabs title="BUNDLER" items={skills.bundler} />
      <Tabs title="PREPROCESSOR" items={skills.preprocessor} />
      <Tabs title="CONTAINER" items={skills.container} />
      <Tabs title="CMS" items={skills.cms} />
    </div>
  );
};

export default Skills;
