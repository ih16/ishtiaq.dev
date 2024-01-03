import Options from "./options";
import Tabs from "../Tabs/Tabs";
import { logs, skills } from "../../data";

const Skills = () => {
  const skillsByCategory = Object.entries(skills)?.reduce(
    (acc, [key, value]) => {
      acc[value] = [...(acc?.[value] ?? []), key];
      return acc;
    },
    {} as { [key: string]: string[] }
  );

  const getLogsByCategory = (category: string) =>
    logs?.filter((log) =>
      log?.skills?.some((skill) =>
        skillsByCategory?.[category]?.includes(skill)
      )
    );

  const lanugagesLog = getLogsByCategory("language");
  const cmsLog = getLogsByCategory("cms");
  console.log(cmsLog);

  return (
    <div>
      <Tabs title="LANGUAGES" items={Options.language} />
      <Tabs title="FRAMEWORK & LIBRARIES" items={Options.frameworks} />
    </div>
  );
};

export default Skills;
