import { ReactNode } from "react";

interface IResumeSectionContainer {
  subTitle: string;
  title: string;
  children: ReactNode;
  width?: string;
}

const ResumeSectionContainer = ({
  children,
  subTitle,
  title,
  width,
}: IResumeSectionContainer) => {
  return (
    <div className={`dark:text-light_text text-dark ${width ?? "w-7/12"}`}>
      <p className="text-subtitle_red_primary text-sm font-medium tracking-[2px]">
        {subTitle}
      </p>
      <h4 className="text-4xl leading-[62px] font-bold font-montserrat mb-5">
        {title}
      </h4>
      {children}
    </div>
  );
};

export default ResumeSectionContainer;
