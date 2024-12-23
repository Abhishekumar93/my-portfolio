"use client";

import { IContactForm } from "@/interface/contact/contactForm";
import { FieldError, UseFormRegister } from "react-hook-form";

interface IInputField {
  fieldId: string;
  fieldType: string;
  errorMessage?: FieldError;
  register: UseFormRegister<IContactForm>;
}

const InputField = ({
  fieldId,
  fieldType,
  errorMessage,
  register,
}: IInputField) => {
  return (
    <>
      <input
        {...register(fieldId as keyof IContactForm)}
        data-testid={fieldId}
        type={fieldType}
        className={`form_control h-[55px] ${errorMessage ? "border-red-600 dark:border-red-600" : ""}`}
      />
      {errorMessage && (
        <p className="text-red-600 text-sm">{errorMessage.message}</p>
      )}
    </>
  );
};

export default InputField;
