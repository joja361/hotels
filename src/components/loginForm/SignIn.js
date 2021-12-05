import { Formik } from "formik";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { login, mainAxios } from "../../store/authSlice";
import Layout from "../layout/Layout";
import InputField from "./InputField";

const SignIn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [failToLogin, setFailToLogin] = useState();

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    try {
      let res = await mainAxios.post("/auth/login", values);
      const token = res.data.token;
      const decoded = jwt_decode(token);
      const { email, role, id } = decoded;
      dispatch(login({ token, email, role, id }));
      history.push(role === "user" ? "/dashboard" : "admin/dashboard");
    } catch {
      setFailToLogin("You entered wrong credentials, please try again");
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email is invalid").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <Layout>
          <Container style={{ maxWidth: 300 }}>
            <Form style={{ marginTop: "20vh" }} onSubmit={handleSubmit}>
              <InputField label="Email" name="email" />
              <InputField label="Password" type="password" name="password" />
              {failToLogin && <div style={{ color: "red" }}>{failToLogin}</div>}
              <Link className="d-block mb-2" to="/signup">
                Sing Up
              </Link>
              <Button
                variant="primary"
                type="submit"
                className="w-100 shadow-none"
              >
                Sign in
              </Button>
            </Form>
          </Container>
        </Layout>
      )}
    </Formik>
  );
};

export default SignIn;
