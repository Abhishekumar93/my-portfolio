import { ISkillsList } from "@/interface/resume/professionalSkills";

interface IProgressBar {
  progressData: ISkillsList;
  isLastData?: boolean;
}
const ProgressBar = ({ progressData, isLastData }: IProgressBar) => {
  const { percentage, title } = progressData;
  return (
    <div
      className={`text-dark dark:text-light_text font-medium uppercase opacity-90 tracking-[2px] text-xs ${!isLastData ? "mb-[1.875rem]" : "mb-0"}`}
    >
      <h6 className="mb-[15px]">{title}</h6>
      <div className="h-2 rounded-[0.625rem] dark:bg-[#212428] bg-[#dce1e4] shadow-none dark:shadow-progress_bar">
        <div
          className="animate-progressBarFadeLeft progress_bar_bg relative h-full rounded-[0.625rem]"
          style={{ width: `${percentage}%` }}
        >
          <span className="absolute -right-2 -top-[1.375rem] text-sm">{`${percentage}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
