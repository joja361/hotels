import { Field, ErrorMessage } from "formik";
import { Col, InputGroup, Row, Form } from "react-bootstrap";

const InputField = ({ label, name, type, inline, ...rest }) => {
  const inputGroup = (
    <InputGroup hasValidation>
      <Field name={name}>
        {({ field, meta }) => {
          return (
            <Form.Control
              type={type}
              isInvalid={meta.error && meta.touched}
              {...field}
              {...rest}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name}>
        {(errMsg) => {
          return (
            <Form.Control.Feedback type="invalid">
              {errMsg}
            </Form.Control.Feedback>
          );
        }}
      </ErrorMessage>
    </InputGroup>
  );

  return (
    <Form.Group as={inline ? Row : Col} className="mb-4">
      <Form.Label htmlFor={name} column={inline}>
        {label}
      </Form.Label>
      {inline ? <Col sm={10}>{inputGroup}</Col> : inputGroup}
    </Form.Group>
  );
};

export default InputField;
