import { memo, ReactNode } from "react";

interface ISocialMediaIcon {
  children: ReactNode;
  redirectUrl: string;
}

const SocialMediaIcon = ({ children, redirectUrl }: ISocialMediaIcon) => {
  return (
    <div className="my-[10px] mx-3 w-[3.75rem] h-[3.75rem] flex_center dark:dark_gradient_bg dark:shadow-s_dark shadow-s_light cursor-pointer light_gradient_bg hover:-translate-y-[3px] dark:hover:inner_dark_bg hover:inner_red_bg rounded-[0.375rem] group duration-[0.4s] ease-in-out">
      <a
        href={redirectUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="dark:fill-light_text fill-dark_text w-6 h-6 group-hover:fill-white"
      >
        {children}
      </a>
    </div>
  );
};

export default memo(SocialMediaIcon);
