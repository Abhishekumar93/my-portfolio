"use client";

import { FieldError, useForm } from "react-hook-form";

interface ITextAreaField {
  fieldId: string;
  required?: boolean;
  rowSpan?: number;
  errorMessage?: FieldError;
}

const TextAreaField = ({
  fieldId,
  required,
  rowSpan = 5,
  errorMessage,
}: ITextAreaField) => {
  const { register } = useForm({ mode: "onChange" });
  return (
    <>
      <textarea
        {...register(fieldId, { required: required })}
        id={fieldId}
        rows={rowSpan}
        className={`form_control ${errorMessage ? "text-red-900" : ""}`}
      />
      {errorMessage && <p>{errorMessage.root?.message}</p>}
    </>
  );
};

export default TextAreaField;
