import { GitHub, LinkedIn, StackOverflow } from "@/icons";
import dynamic from "next/dynamic";

const SocialMediaIcon = dynamic(() => import("../socialMediaIcon"));

const FindWithMe = () => {
  return (
    <>
      <p className="font-montserrat font-medium text-base xl:text-sm tracking-[3px] mb-5">
        FIND ME
      </p>
      <div className="flex_items_center">
        <SocialMediaIcon
          redirectUrl="https://www.linkedin.com/in/abhishekr1993/"
          margin="mr-3"
        >
          <LinkedIn />
        </SocialMediaIcon>
        <SocialMediaIcon redirectUrl="https://github.com/Abhishekumar93">
          <GitHub />
        </SocialMediaIcon>
        <SocialMediaIcon redirectUrl="https://stackoverflow.com/users/9317532/abhishek-kumar">
          <StackOverflow />
        </SocialMediaIcon>
      </div>
    </>
  );
};

export default FindWithMe;
