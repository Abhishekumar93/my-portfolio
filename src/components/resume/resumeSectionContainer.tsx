import { ReactNode } from "react";

interface IResumeSectionContainer {
  subTitle: string;
  title: string;
  children: ReactNode;
}

const ResumeSectionContainer = ({
  children,
  subTitle,
  title,
}: IResumeSectionContainer) => {
  return (
    <div className="dark:text-light_text text-dark w-1/2">
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
