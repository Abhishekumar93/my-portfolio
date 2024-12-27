import Image from "next/image";
import dynamic from "next/dynamic";

import AbhishekImage from "../../../public/abhishek.png";
import FindWithMe from "../findMe";

const AnimatedText = dynamic(() => import("./animatedText"));

const HomeComponent = () => {
  return (
    <div id="home" className="grid grid-cols-12 items-center pb-[6.25rem]">
      <div className="col-span-12 xl:col-span-7 order-2 xl:order-1 xl:px-[1.875rem] px-4 mt-12 md:mt-0">
        <p className="font-montserrat font-medium text-base xl:text-sm tracking-[3px] mb-5">
          WELCOME TO MY WORLD
        </p>
        <h1 className="font-montserrat text-dark dark:text-white font-bold text-[2.5rem] md:text-[3rem] xl:text-[3.75rem] leading-snug mb-[1.375rem]">
          Hi, I&apos;m <span className="text-red_primary">Abhishek Kumar</span>
          <br />
          <span className="font-semibold text-red_primary text-4xl md:text-[2.5rem] xl:text-5xl">
            a{" "}
            <span className="text-dark dark:text-white whitespace-nowrap relative overflow-hidden">
              <AnimatedText />
            </span>
          </span>
        </h1>
        <p className="opacity-90 xl:pr-[16%] leading-[30px] mb-10 xl:mb-16">
          A Senior Software Engineer passionate about building scalable,
          high-performing web solutions. With expertise in React, and Next.js,
          I’ve optimized , and developed user-friendly interfaces, and
          integrated efficient APIs, driving measurable results like 70% time
          savings and 90+ SEO scores.
        </p>
        <FindWithMe />
      </div>
      <div className="col-span-12 xl:col-span-5 order-1: xl:order-2 xl:px-[1.875rem] px-4">
        <div className="relative before:absolute before:-z-[1] before:w-full before:h-[calc(100%-130px)] before:content-[''] before:left-2/4 before:bottom-0 before:-translate-x-1/2 dark:before:bg-gradient_dark before:bg-gradient_light dark:before:shadow-s_dark before:shadow-s_light rounded-md">
          <div className="max-w-[99%] mx-auto h-auto">
            <Image
              src={AbhishekImage}
              alt="abhishek"
              className="block mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
