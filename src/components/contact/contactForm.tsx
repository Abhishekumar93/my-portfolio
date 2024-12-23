/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { ShortRightArrow } from "@/icons";
import { FieldWithLabel, InputField, TextAreaField } from "../formFields";
import { useForm } from "react-hook-form";
import { IContactForm } from "@/interface/contact/contactForm";
import { contactFormSchema } from "@/validations/contactForm";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IContactForm>({
    mode: "onChange",
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone_number: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [isEmailSent, setIsEmailSent] = useState(false);

  const displayToastMessage = (message: string, type: "success" | "error") => {
    return toast[type](message, {
      position: "top-right",
      className: `${type === "success" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"} w-fit right-0`,
      duration: 5000,
    });
  };

  const handleOnSubmit = (data: any) => {
    setIsEmailSent(true);
    const emailjs_service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const emailjs_template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const emailjs_public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!emailjs_service_id || !emailjs_template_id || !emailjs_public_key)
      return;
    emailjs
      .send(emailjs_service_id, emailjs_template_id, data, {
        publicKey: emailjs_public_key,
      })
      .then(
        (response) => {
          displayToastMessage("Email sent successfully", "success");
        },
        (err) => {
          displayToastMessage("Failed to send email", "error");
        },
      )
      .finally(() => setIsEmailSent(false));
  };

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
            errorMessage={errors.name}
            register={register}
          />
        </FieldWithLabel>
      </div>
      <div className="col-span-6">
        <FieldWithLabel label="Phone Number" labelFor="phone_number">
          <InputField
            fieldId="phone_number"
            fieldType="tel"
            errorMessage={errors.phone_number}
            register={register}
          />
        </FieldWithLabel>
      </div>
      <div className="col-span-12">
        <FieldWithLabel label="Email" labelFor="email">
          <InputField
            fieldId="email"
            fieldType="email"
            errorMessage={errors.email}
            register={register}
          />
        </FieldWithLabel>
      </div>
      <div className="col-span-12">
        <FieldWithLabel label="Subject" labelFor="subject">
          <InputField
            fieldId="subject"
            fieldType="text"
            errorMessage={errors.subject}
            register={register}
          />
        </FieldWithLabel>
      </div>
      <div className="col-span-12">
        <FieldWithLabel label="Your Message" labelFor="message">
          <TextAreaField
            fieldId="message"
            rowSpan={10}
            errorMessage={errors.message}
            register={register}
          />
        </FieldWithLabel>
      </div>
      <div className="col-span-12 px-[15px]">
        <button
          type="submit"
          className={`text-red_primary hover:text-white dark:hover:text-red_primary w-full py-[15px] border-none rounded-md dark:dark_gradient_bg light_gradient_bg dark:shadow-s_dark shadow-s_light dark:hover:inner_dark_bg hover:inner_red_bg hover:-translate-y-[5px] duration-[0.4s] ease-in-out group flex items-center justify-center ${isEmailSent ? "cursor-not-allowed opacity-50" : "opacity-100"}`}
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
