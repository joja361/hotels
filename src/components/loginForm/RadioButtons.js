import Form from "react-bootstrap/Form";
import { ErrorMessage, Field } from "formik";
import { Col, InputGroup } from "react-bootstrap";

const RadioButtons = ({ label, name, options, ...rest }) => {
  return (
    <Form.Group as={Col}>
      <InputGroup hasValidation>
        <Form.Label htmlFor={name} style={{ marginRight: "1.5rem" }}>
          {label}
        </Form.Label>
        <Field name={name} {...rest}>
          {({ field, form }) => {
            return options.map((option) => {
              return (
                <Form.Check
                  inline
                  key={option}
                  type="radio"
                  id={option}
                  label={option}
                  {...field}
                  value={option}
                  checked={field.value === option}
                />
              );
            });
          }}
        </Field>
        <ErrorMessage name={name}>
          {(errMsg) => {
            return (
              <Form.Control.Feedback className="d-block" type="invalid">
                {errMsg}
              </Form.Control.Feedback>
            );
          }}
        </ErrorMessage>
      </InputGroup>
    </Form.Group>
  );
};

export default RadioButtons;
