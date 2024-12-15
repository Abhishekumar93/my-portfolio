"use client";

import { memo, useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import $ from "jquery";

const NavMenu = dynamic(() => import("../nav"), { ssr: false });

const HeaderComponent = () => {
  const [isMobileDevice, setIsMobileDevice] = useState<boolean | null>(null);
  const [profileImgSize, setProfileImgSize] = useState(65);
  const [showNavMenu, setShowNavMenu] = useState<boolean | null>(null);
  const [showNavDrawer, setShowNavDrawer] = useState(false);

  useEffect(() => {
    $(window).on("scroll", function () {
      const scrollLocation = $(window).scrollTop();
      const screenWidth = $(window).innerWidth();

      if (screenWidth && scrollLocation) {
        const isMobile = screenWidth < 768;
        if (scrollLocation > 50) {
          $("header").removeClass("h-[5rem] md:h-[7.625rem]");
          $("header").addClass(
            "h-[4.375rem] xl:h-[5.625rem] shadow-bottom dark:shadow-s_dark",
          );
          $("#profile_img").removeClass("h-[3.375rem] md:h-[70px]");
          $("#profile_img").addClass("h-[3rem] md:h-[4rem]");
          setProfileImgSize(isMobile ? 48 : 63);
        } else {
          $("header").removeClass(
            "h-[4.375rem] xl :h-[5.625rem] shadow-bottom dark:shadow-s_dark",
          );
          $("header").addClass("h-[5rem] md:h-[7.625rem]");
          $("#profile_img").addClass("h-[3.375rem] md:h-[70px]");
          $("#profile_img").removeClass("h-[3rem] md:h-[4rem]");
          setProfileImgSize(isMobile ? 54 : 65);
        }
      }
    });
  }, []);
  useEffect(() => {
    setIsMobileDevice(window.innerWidth < 768);
  }, []);
  useEffect(() => {
    $(window).on("resize", function () {
      const screenWidth = $(window).innerWidth();
      if (screenWidth) setIsMobileDevice(screenWidth < 768);
    });
  }, []);
  useEffect(() => {
    setProfileImgSize(isMobileDevice ? 54 : 65);
    setShowNavMenu(!isMobileDevice);
  }, [isMobileDevice]);

  return (
    <>
      <div className=" px-4 md:px-8 xl:px-16 flex_space_between h-full">
        <div
          id="profile_img"
          className="h-[3.375rem] md:h-[70px] flex_items_center"
        >
          <Image
            src={"/profile_img.png"}
            alt="profile_icon"
            width={profileImgSize}
            height={profileImgSize}
          />
        </div>
        {isMobileDevice === null
          ? null
          : isMobileDevice && (
              <Image
                src={"/hamburger.svg"}
                alt="hamburger"
                width={36}
                height={41}
                onClick={() => setShowNavDrawer(!showNavDrawer)}
              />
            )}
        {showNavMenu === null
          ? null
          : showNavMenu && (
              <NavMenu handleShowNavDrawer={() => setShowNavDrawer(false)} />
            )}
      </div>
      <div
        className={`fixed left-0 ease-in-out duration-300 w-full z-[100] bg-black/[0.8] top-0 h-screen ${showNavDrawer ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="w-3/4 light_gradient_bg dark:dark_bg shadow-[0_0_10px_0_rgba(0,0,0,0.7)] h-full px-10 py-6">
          <div className="flex_space_between">
            <Image
              src={"/profile_img.png"}
              alt="profile_icon"
              width={65}
              height={65}
            />
            <div className="p-[0.75rem] rounded-[50%] light_gradient_bg dark:dark_gradient_bg">
              <Image
                src={"/close.svg"}
                alt="close"
                width={30}
                height={30}
                onClick={() => setShowNavDrawer(!showNavDrawer)}
              />
            </div>
          </div>
          <NavMenu handleShowNavDrawer={(value) => setShowNavDrawer(value)} />
        </div>
      </div>
    </>
  );
};

export default memo(HeaderComponent);
