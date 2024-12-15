import { WebDevelopment } from "@/icons";
import SectionContainer from "../sectionContainer";

const Features = () => {
  return (
    <SectionContainer
      sectionId="features"
      title="FEATURES"
      subTitle="What I Do"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[1.875rem] xl:mt-[3.125rem] gap-8">
        <div className="card_container group">
          <div className="mb-2.5 md:mb-[29px] w-[50px] h-[50px] dark:fill-light_text fill-red_primary group-hover:fill-white">
            <WebDevelopment />
          </div>
          <h3 className="card_title">Software Engineer</h3>
          <p className="card_description">
            I specialize in front-end development, creating efficient web
            applications with optimized performance and seamless user
            experiences.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Features;
