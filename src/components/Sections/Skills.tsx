import Options from "./options";
import Tabs from "../Tabs/Tabs";
import { logs, skills } from "../../data";

const Skills = () => {
  return (
    <div>
      <Tabs title="LANGUAGES" items={skills.language} />
      <Tabs
        title="FRAMEWORK & LIBRARIES"
        items={[...skills.framework, ...skills.library]}
      />
      <Tabs title="RUNTIME" items={skills.runtime} />
      <Tabs title="DATABASE" items={skills.database} />
      <Tabs title="SERVER" items={skills.server} />
      <Tabs title="BUNDLER" items={skills.bundler} />
      <Tabs title="PREPROCESSOR" items={skills.preprocessor} />
      <Tabs title="CONTAINER" items={skills.container} />
      <Tabs title="CMS" items={skills.cms} />
    </div>
  );
};

export default Skills;
