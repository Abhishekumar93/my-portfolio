import { IProfessionalSkills } from "@/interface/resume/professionalSkills";
import ProgressBar from "../progressBar";
import ResumeSectionContainer from "./resumeSectionContainer";

const ProfessionalSkills = ({
  subTitle,
  title,
  skillList,
}: IProfessionalSkills) => {
  return (
    <ResumeSectionContainer subTitle={subTitle} title={title} width="w-full">
      <div className="grid grid-cols-2 gap-x-20">
        {skillList.length > 0 &&
          skillList.map((skill) => {
            return (
              <div
                key={skill.title.toLowerCase().split(" ").join("-")}
                className="col-span-1"
              >
                <ProgressBar progressData={skill} />
              </div>
            );
          })}
      </div>
    </ResumeSectionContainer>
  );
};

export default ProfessionalSkills;
