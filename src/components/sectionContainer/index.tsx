import { ReactNode } from "react";

interface ISectionContainer {
  sectionId: string;
  title: string;
  subTitle: string;
  children: ReactNode;
}
const SectionContainer = ({
  children,
  subTitle,
  title,
  sectionId,
}: ISectionContainer) => {
  return (
    <div id={sectionId} className="section_container">
      <div className="text-center">
        <p className="text-subtitle_red_primary tracking-[2px] leading-[14px] font-medium font-montserrat">
          {title}
        </p>
        <h2 className="mt-4 text-[2.5rem] xl:text-6xl font-bold leading-tight">
          {subTitle}
        </h2>
      </div>
      {children}
    </div>
  );
};

export default SectionContainer;
