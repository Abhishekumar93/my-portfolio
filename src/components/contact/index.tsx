import Image from "next/image";
import { FindWithMe, SectionContainer } from "..";
import ContactForm from "./contactForm";

const Contact = () => {
  return (
    <SectionContainer
      sectionId="contact"
      subTitle="Contact With Me"
      title="CONTACT"
    >
      <div className="grid grid-cols-12 mt-[1.875rem] xl:mt-[3.125rem] gap-12">
        <div className="col-span-5 p-[30px] shadow-s_light dark:shadow-s_dark dark:dark_gradient_bg light_gradient_bg rounded-[0.625rem] text-lg">
          <div className="rounded-[0.625rem] overflow-hidden mb-7">
            <Image
              src="/contact.png"
              width={391}
              height={245}
              layout="responsive"
              alt="contact-image"
              className="hover:scale-110 duration-300 ease-in-out"
            />
          </div>
          <h4 className="text-3xl mb-2 font-bold text-dark dark:text-white">
            Abhishek Kumar
          </h4>
          <p className="text-dark_text dark:text-light opacity-90 dark:opacity-100 mb-4">
            Senior Software Engineer
          </p>
          <p className="mb-4 dark:text-light">
            Connect with me via call or email.
          </p>
          <div className="flex flex-col mb-10">
            <div className="flex items-center dark:text-light">
              <p>Phone:&nbsp;</p>
              <a href="tel:+917010352065" className="anchor_text">
                +917010352065
              </a>
            </div>
            <div className="flex items-center dark:text-light">
              <p>Email:&nbsp;</p>
              <a href="mailto:abhishekkr1993@gmail.com" className="anchor_text">
                abhishekkr1993@gmail.com
              </a>
            </div>
          </div>
          <FindWithMe />
        </div>
        <div className="col-span-7 p-[30px] shadow-s_light dark:shadow-s_dark dark:dark_gradient_bg light_gradient_bg rounded-[0.625rem]">
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
