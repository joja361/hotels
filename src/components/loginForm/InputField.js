import { Field, ErrorMessage } from "formik";

const InputField = ({ label, name, ...rest }) => {
  return (
    <div className="form-group w-50 mb-2">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <Field name={name}>
        {({ field, meta }) => {
          return (
            <input
              className={
                meta.error && meta.touched
                  ? "form-control is-invalid"
                  : "form-control"
              }
              {...field}
              {...rest}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name}>
        {(errMsg) => {
          return <div className="invalid-feedback">{errMsg}</div>;
        }}
      </ErrorMessage>
    </div>
  );
};

export default InputField;
