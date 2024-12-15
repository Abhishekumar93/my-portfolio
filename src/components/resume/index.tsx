"use client";

import { MouseEvent, useState } from "react";
import SectionContainer from "../sectionContainer";

interface ITabs {
  key: string;
  value: string;
}

const Resume = () => {
  const tabsList: ITabs[] = [
    { key: "education", value: "Education" },
    { key: "professional_skills", value: "Professional Skills" },
    { key: "experience", value: "Experience" },
    { key: "resume", value: "Resume" },
  ];

  const [selectedTab, setSelectedTab] = useState<ITabs>(tabsList[0]);

  const handleTabSelect = (e: MouseEvent<HTMLUListElement>) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    const selectedTabData = tabsList.find(
      (tab: ITabs) => tab.key === target?.id,
    );
    if (selectedTabData) setSelectedTab(selectedTabData);
  };
  return (
    <SectionContainer
      sectionId="resume"
      title="6+ YEARS OF EXPERIENCE"
      subTitle="My Resume"
    >
      <div className="mt-[1.875rem] xl:mt-[3.125rem]">
        <ul
          aria-hidden="true"
          className="dark:shadow-s_dark shadow-s_light rounded-[0.625rem] flex items-center justify-around dark:dark_gradient_bg light_gradient_bg"
          onClick={handleTabSelect}
        >
          {tabsList.map((tab: ITabs) => {
            return (
              <li
                key={tab.key}
                id={tab.key}
                className={`text-center basis-1/4 py-[1.875rem] cursor-pointer hover:text-red_primary ${selectedTab.key === tab.key ? "text-red_primary" : ""}`}
              >
                {tab.value}
              </li>
            );
          })}
        </ul>
      </div>
    </SectionContainer>
  );
};

export default Resume;
