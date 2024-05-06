import "bootstrap/dist/css/bootstrap.min.css";
import ProgrammingLangSkill from "../SkillComponents/programmingLangComponent/programmingLangComponent/programmingLangComponent";
import ToolSkill from "../SkillComponents/toolsComponent/toolsComponent";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2 className="margin-bottom-3 sc-navy text-center">
        {t("skills.title")}
      </h2>

      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4 mt-4">
          <ProgrammingLangSkill />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4 mt-4">
          <ToolSkill />
        </div>
      </div>
    </div>
  );
};

export default Skills;
