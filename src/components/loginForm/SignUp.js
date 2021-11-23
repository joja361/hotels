import Button from "react-bootstrap/Button";
import InputField from "./InputField";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import RadioButtons from "./RadioButtons";
import Layout from "../layout/Layout";
import * as Yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { Formik } from "formik";
import TextField from "./TextField";
import { mainAxios } from "../../store/authSlice";

const SignUp = () => {
  const history = useHistory();

  const gender = ["Male", "Female"];

  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    gender: "",
    description: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    email: Yup.string().email("Entered invalid e-mail").required("Required"),
    password: Yup.string().required("Required").min(8, "Password is too short"),
    passwordConfirmation: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });

  const onSubmit = async (values) => {
    try {
      await mainAxios.post("/user", values);
      history.replace("./signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <Layout>
          <Container style={{ maxWidth: 400 }}>
            <Form onSubmit={handleSubmit} style={{ marginTop: "8vh" }}>
              <Row className="mb-2">
                <InputField label="First Name" name="firstName" />
                <InputField label="Last Name" name="lastName" />
              </Row>
              <InputField label="Address" name="address" className="mb-2" />
              <Row className="my-3">
                <RadioButtons label="Gender" name="gender" options={gender} />
              </Row>
              <TextField
                label="Description"
                name="description"
                type="textarea"
                className="mb-2"
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                className="mb-2"
              />
              <Row className="mb-2">
                <InputField label="Password" type="password" name="password" />
                <InputField
                  label="Confirm Password"
                  type="password"
                  name="passwordConfirmation"
                />
              </Row>
              <Link className="d-block mb-2 w-50" to="/signin">
                Sign in
              </Link>
              <Button variant="primary" type="submit" className="w-100">
                Sign up
              </Button>
            </Form>
          </Container>
        </Layout>
      )}
    </Formik>
  );
};

export default SignUp;
