import { MouseEvent } from "react";
import $ from "jquery";
import urlHashChecker from "@/utils/urlHashChecker";

interface INavMenuItem {
  key: string;
  value: string;
}

interface INavMenu {
  // eslint-disable-next-line no-unused-vars
  handleShowNavDrawer: (val: boolean) => void;
}

const NavMenu = ({ handleShowNavDrawer }: INavMenu) => {
  const NAV_MENU: INavMenuItem[] = [
    { key: "home", value: "Home" },
    { key: "features", value: "Features" },
    { key: "portfolio", value: "Portfolio" },
    { key: "resume", value: "Resume" },
    { key: "contact", value: "Contact" },
  ];

  const handleDivClick = (e: MouseEvent<HTMLDivElement>, hash: string) => {
    const hashDivElement = $(`#${hash}`);

    if (Object.values(hashDivElement).length > 0) {
      location.hash = `#${hash}`;
      handleShowNavDrawer(false);
      const hashDiv = hashDivElement[0];
      hashDiv.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const displayNavMenuItem = () => {
    return NAV_MENU.map((navItem) => (
      <div
        key={navItem.key}
        className={`cursor-pointer my-2 md:my-[0.625rem] md:mx-[0.875rem] ${`#${navItem.key}` === urlHashChecker() ? "opacity-100" : "opacity-[0.7]"} hover:opacity-100`}
        onClick={(e) => handleDivClick(e, navItem.key)}
      >
        {navItem.value}
      </div>
    ));
  };
  return (
    <div className={`flex flex-col md:flex-row`}>{displayNavMenuItem()}</div>
  );
};

export default NavMenu;
