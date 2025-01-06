import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-center section_seperator main_footer_container flex_items_center flex-col footer_padding">
      <Image
        src={"/profile_img.png"}
        alt="profile_icon"
        width={65}
        height={65}
      />
      <p className="mt-[1.875rem]">
        &copy; 2025. All Rights Reserved By Abhishek Kumar.
      </p>
    </footer>
  );
}
