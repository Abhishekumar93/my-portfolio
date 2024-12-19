"use client";

import { ShortRightArrow } from "@/icons";
import { FieldWithLabel, InputField, TextAreaField } from "../formFields";
import { useForm } from "react-hook-form";

interface IContactForm {
  name: string;
  phone_number: string;
  email: string;
  subject: string;
  messagge: string;
}
const ContactForm = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<IContactForm>({ mode: "onChange" });

  const handleOnSubmit = (data: IContactForm) => {
    console.log(data, "formdata");
  };
  console.log(errors, "formdata error");

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="grid grid-cols-12 -mx-[15px]"
    >
      <div className="col-span-6">
        <FieldWithLabel label="Your Name" labelFor="name">
          <InputField
            fieldId="name"
            fieldType="text"
            required={true}
            errorMessage={errors.name}
          />
        </FieldWithLabel>
      </div>
      <div className="col-span-6">
        <FieldWithLabel label="Phone Number" labelFor="phone_number">
          <InputField
            fieldId="phone_number"
            fieldType="tel"
            required={true}
            pattern={/[0-9()+\- ]*/}
            errorMessage={errors.phone_number}
          />
        </FieldWithLabel>
      </div>
      <div className="col-span-12">
        <FieldWithLabel label="Email" labelFor="email">
          <InputField
            fieldId="email"
            fieldType="email"
            required={true}
            errorMessage={errors.email}
          />
        </FieldWithLabel>
      </div>
      <div className="col-span-12">
        <FieldWithLabel label="Subject" labelFor="subject">
          <InputField
            fieldId="subject"
            fieldType="text"
            required={true}
            errorMessage={errors.subject}
          />
        </FieldWithLabel>
      </div>
      <div className="col-span-12">
        <FieldWithLabel label="Your Message" labelFor="message">
          <TextAreaField
            fieldId="message"
            required={true}
            rowSpan={10}
            errorMessage={errors.messagge}
          />
        </FieldWithLabel>
      </div>
      <div className="col-span-12 px-[15px]">
        <button
          type="submit"
          className="text-red_primary hover:text-white dark:hover:text-red_primary w-full py-[15px] border-none rounded-md dark:dark_gradient_bg light_gradient_bg dark:shadow-s_dark shadow-s_light dark:hover:inner_dark_bg hover:inner_red_bg hover:-translate-y-[5px] duration-[0.4s] ease-in-out group flex items-center justify-center "
        >
          <span>SEND MESSAGE</span>
          <div className="w-6 h-6 fill-red_primary dark:group-hover:fill-red_primary group-hover:fill-white">
            <ShortRightArrow />
          </div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
