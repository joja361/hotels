import Form from "react-bootstrap/Form";
import { Field, ErrorMessage } from "formik";
import { Col, InputGroup } from "react-bootstrap";

const TextField = ({ label, name, type, ...rest }) => {
  return (
    <Form.Group as={Col}>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <InputGroup hasValidation>
        <Field name={name}>
          {({ field, meta }) => {
            return (
              <Form.Control
                as="textarea"
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
    </Form.Group>
  );
};

export default TextField;
