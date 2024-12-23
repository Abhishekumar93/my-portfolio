"use client";

import { IContactForm } from "@/interface/contact/contactForm";
import { FieldError, UseFormRegister } from "react-hook-form";

interface ITextAreaField {
  fieldId: string;
  rowSpan?: number;
  errorMessage?: FieldError;
  register: UseFormRegister<IContactForm>;
}

const TextAreaField = ({
  fieldId,
  rowSpan = 5,
  errorMessage,
  register,
}: ITextAreaField) => {
  return (
    <>
      <textarea
        {...register(fieldId as keyof IContactForm)}
        data-testid={fieldId}
        rows={rowSpan}
        className={`form_control ${errorMessage ? "border-red-600 dark:border-red-600" : ""}`}
      />
      {errorMessage && (
        <p className="text-red-600 text-sm -mt-[6px]">{errorMessage.message}</p>
      )}
    </>
  );
};

export default TextAreaField;
