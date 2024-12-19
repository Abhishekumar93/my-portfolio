"use client";

import { FieldError, useForm, ValidationRule } from "react-hook-form";

interface IInputField {
  fieldId: string;
  fieldType: string;
  required?: boolean;
  pattern?: ValidationRule<RegExp>;
  errorMessage?: FieldError;
}

const InputField = ({
  fieldId,
  fieldType,
  required,
  pattern,
  errorMessage,
}: IInputField) => {
  const { register } = useForm({ mode: "onChange" });
  return (
    <>
      <input
        {...register(fieldId, { required, pattern })}
        type={fieldType}
        className={`form_control h-[55px] ${errorMessage ? "text-red-900" : ""}`}
      />
      {errorMessage && <p>{errorMessage.root?.message}</p>}
    </>
  );
};

export default InputField;
