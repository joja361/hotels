import Form from "react-bootstrap/Form";
import { Field, ErrorMessage } from "formik";
import { Col, InputGroup, Row } from "react-bootstrap";

const TextField = ({ label, name, inline, ...rest }) => {
  const inputGroup = (
    <InputGroup hasValidation>
      <Field name={name}>
        {({ field, meta }) => {
          return (
            <Form.Control
              as="textarea"
              type="textarea"
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

export default TextField;
