import { ReactNode } from "react";
import FieldLabel from "../fieldLabel";

interface IFieldWithLabel {
  label: string;
  labelFor: string;
  children: ReactNode;
}
const FieldWithLabel = ({ children, label, labelFor }: IFieldWithLabel) => {
  return (
    <div className="mb-5 px-[15px]">
      <FieldLabel label={label} labelFor={labelFor} />
      {children}
    </div>
  );
};

export default FieldWithLabel;
