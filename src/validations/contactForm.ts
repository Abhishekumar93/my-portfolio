import * as yup from "yup";

const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const contactFormSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),

  phone_number: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9()+\- ]*$/, {
      message: "Please enter a valid phone number",
      excludeEmptyString: true,
    })
    .min(5, "Please enter a valid phone number")
    .max(15, "Please enter a valid phone number"),

  email: yup.string().required("Email is required").matches(emailPattern, {
    message: "Please enter a valid email address",
    excludeEmptyString: true,
  }),

  subject: yup
    .string()
    .required("Subject is required")
    .min(3, "Subject must be at least 3 characters"),

  message: yup.string().required("Message is required"),
});

export type ContactFormSchema = yup.InferType<typeof contactFormSchema>;
