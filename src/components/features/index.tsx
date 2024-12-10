// import WebDevelopment from "@/icons/WebDevelopment";
// import Image from "next/image";

import { WebDevelopment } from "@/icons";

const Features = () => {
  return (
    <div
      id="features"
      className="section_separator py-20 xl:py-[6.25rem] xl:px-[1.875rem] px-4"
    >
      <p className="text-subtitle_red_primary tracking-[2px] leading-[14px] font-medium font-montserrat">
        FEATURES
      </p>
      <h2 className="mt-4 text-[2.5rem] xl:text-6xl font-bold leading-tight">
        What I Do
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-3 mt-[1.875rem] xl:mt-[3.125rem]">
        <div className="dark:dark_gradient_bg light_gradient_bg py-[30px] px-[50px] dark:shadow-s_dark shadow-s_light before:content-[] before:absolute before:w-full h-full rounded-[0.625rem] before:top-0 before:left-0 before:opacity-0 before:-z-[1] dark:before:inner_dark_bg hover:inner_red_bg duration-[0.5s] ease-in-out text-left z-[1] relative  group-hover:fill-white hover:fill-light_text dark:hover:fill-red_primary">
          <div className="mb-2.5 md:mb-[29px] w-[50px] h-[50px] dark:fill-light_text fill-red_primary">
            {/* <Image
              src="/webDevelopment.svg"
              alt="webDevelopment"
              width={50}
              height={50}
            /> */}
            <WebDevelopment />
          </div>
          <h3 className="font-medium text-2xl leading-8 mb-4 md:mb-5">
            Software Engineer
          </h3>
          <p>
            I specialize in front-end development, creating efficient web
            applications with optimized performance and seamless user
            experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
