"use client";

import { MouseEvent, useEffect, useState } from "react";
import SectionContainer from "../sectionContainer";
import JourneyDetails from "./journeyDetails";
import { IJourneyDetails } from "@/interface/resume/journeyDetail";
import {
  EDUCATION_JOURNEY,
  EXPERIENCE_JOURNEY,
} from "@/constant/resume/journeyDetail";
import ProfessionalSkills from "./professionalSkills";
import { PROFESSIONAL_SKILLS } from "@/constant/resume/professionalSkills";

interface ITabs {
  key: string;
  value: string;
}

const Resume = () => {
  const tabsList: ITabs[] = [
    { key: "experience", value: "Experience" },
    { key: "professional_skills", value: "Professional Skills" },
    { key: "education", value: "Education" },
    { key: "resume", value: "Resume" },
  ];

  const [selectedTab, setSelectedTab] = useState<ITabs>(tabsList[0]);
  const [selectedJourneyDetail, setSelectedJourneyDetail] =
    useState<IJourneyDetails>(EXPERIENCE_JOURNEY);

  useEffect(() => {
    if (selectedTab.key === "experience" || selectedTab.key === "education")
      setSelectedJourneyDetail(
        selectedTab.key === "experience"
          ? EXPERIENCE_JOURNEY
          : EDUCATION_JOURNEY,
      );
  }, [selectedTab]);

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
                className={`resume_tab ${selectedTab.key === tab.key ? "selected_resume_tab" : ""}`}
              >
                {tab.value}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-10">
        {(selectedTab.key === "experience" ||
          selectedTab.key === "education") && (
          <JourneyDetails journeyDetail={selectedJourneyDetail} />
        )}
        {selectedTab.key === "professional_skills" && (
          <ProfessionalSkills
            subTitle="Features"
            title="Development Skill"
            skillList={PROFESSIONAL_SKILLS}
          />
        )}
      </div>
    </SectionContainer>
  );
};

export default Resume;
