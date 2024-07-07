import HeaderComponent from "@/components/header";

export default function Header() {
  return (
    <header className="h-[5rem] md:h-[7.625rem] sticky top-0 z-[999] body_bg_light dark:body_bg_dark">
      <HeaderComponent />
    </header>
  );
}
