import Image from "next/image";
import AnimatedText from "./animatedText";

import AbhishekImage from "../../../public/abhishek.png";

export default function HomeComponent() {
  return (
    <div className="grid grid-cols-12 items-center">
      <div className="col-span-12 xl:col-span-7 order-2 xl:order-1 xl:px-[1.875rem]">
        <p className="font-montserrat font-medium text-sm tracking-[3px] mb-5">
          WELCOME TO MY WORLD
        </p>
        <h1 className="font-montserrat text-dark dark:text-white font-bold text-6xl leading-[75px] mb-[1.375rem]">
          Hi, I&apos;m <span className="text-red_primary">Abhishek Kumar</span>
          <br />
          <span className="font-semibold text-red_primary text-5xl">
            a{" "}
            <span className="text-dark dark:text-white whitespace-nowrap relative overflow-hidden">
              <AnimatedText />
            </span>
          </span>
        </h1>
      </div>
      <div className="col-span-12 xl:col-span-5 order-1: xl:order-2 xl:px-[1.875rem]">
        <div className="relative before:absolute before:-z-[1] before:w-full before:h-[calc(100%-130px)] before:content-[''] before:left-2/4 before:bottom-0 before:-translate-x-1/2 dark:before:bg-gradient_dark before:bg-gradient_light dark:before:shadow-s_dark before:shadow-s_light rounded-md">
          <div className="max-w-[99%] mx-auto h-auto">
            <Image src={AbhishekImage} alt="abhishek" />
          </div>
        </div>
      </div>
    </div>
  );
}
