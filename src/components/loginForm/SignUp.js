import { Link, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Formik, Form } from "formik";
import InputField from "./InputField";
import * as Yup from "yup";
import { baseUrl } from "../../store/authSlice";

const SignUp = () => {
  const history = useHistory();

  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    email: Yup.string().email("Entered invalid e-mail").required("Required"),
    password: Yup.string().required("Required").min(8, "Password is too short"),
    passwordConfirmation: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });

  const onSubmit = async (values) => {
    console.log(values);
    await baseUrl.post("/user", values).then(history.replace("./signin"));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="container vh-100 d-flex flex-column justify-content-center align-items-center">
        <InputField label="First Name" name="firstName" />
        <InputField label="Last Name" name="lastName" />
        <InputField label="Address" name="address" />
        <InputField label="Email" type="email" name="email" />
        <InputField label="Password" type="password" name="password" />
        <InputField
          label="Confirm Password"
          type="password"
          name="passwordConfirmation"
        />
        <Link className="d-block mb-2 w-50" to="/signin">
          Sign in
        </Link>
        <Button variant="primary" type="submit" className="w-50">
          Sign in
        </Button>
      </Form>
    </Formik>
  );
};

export default SignUp;
