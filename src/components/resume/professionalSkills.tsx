import { IProfessionalSkills } from "@/interface/resume/professionalSkills";
import ProgressBar from "../progressBar";
import ResumeSectionContainer from "./resumeSectionContainer";

const ProfessionalSkills = ({
  subTitle,
  title,
  skillList,
}: IProfessionalSkills) => {
  return (
    <ResumeSectionContainer subTitle={subTitle} title={title}>
      {skillList.length > 0 &&
        skillList.map((skill) => {
          return (
            <ProgressBar
              key={skill.title.toLowerCase().split(" ").join("-")}
              progressData={skill}
            />
          );
        })}
    </ResumeSectionContainer>
  );
};

export default ProfessionalSkills;
