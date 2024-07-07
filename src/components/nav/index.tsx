import urlHashChecker from "@/utils/urlHashChecker";
import Link from "next/link";

interface INavMenuItem {
  key: string;
  value: string;
  url: string;
}

export default function NavMenu() {
  const NAV_MENU: INavMenuItem[] = [
    { key: "home", value: "Home", url: "/#home" },
    { key: "features", value: "Features", url: "/#features" },
    { key: "portfolio", value: "Portfolio", url: "/#portfolio" },
    { key: "resume", value: "Resume", url: "/#resume" },
    { key: "contact", value: "Contact", url: "/#contact" },
  ];

  const displayNavMenuItem = () => {
    return NAV_MENU.map((navItem) => (
      <Link
        key={navItem.key}
        href={navItem.url}
        className={`my-2 md:my-[0.625rem] md:mx-[0.875rem] ${navItem.url === `/${urlHashChecker()}` ? "opacity-100" : "opacity-[0.5]"} hover:opacity-100`}
      >
        {navItem.value}
      </Link>
    ));
  };
  return (
    <div className={`flex flex-col md:flex-row`}>{displayNavMenuItem()}</div>
  );
}
