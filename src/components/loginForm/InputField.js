import { Field, ErrorMessage } from "formik";

const InputField = ({ label, name, ...rest }) => {
  return (
    <div className="form-group w-50 mb-2">
      <label>{label}</label>
      <Field name={name} className="form-control" {...rest} />
      <ErrorMessage name={name} />
    </div>
  );
};

export default InputField;
