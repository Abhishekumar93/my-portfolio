interface IFieldLabel {
  label: string;
  labelFor: string;
}

const FieldLabel = ({ label, labelFor }: IFieldLabel) => {
  return (
    <label htmlFor={labelFor} className="field_label">
      {label}
    </label>
  );
};

export default FieldLabel;
