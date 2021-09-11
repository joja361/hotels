import { Link } from "react-router-dom";
import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUp = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setEnteredPassword(event.target.value);
  };

  const handleChangePasswordConfirm = (event) => {
    setEnteredConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setEnteredEmail("");
    setEnteredPassword("");
    setEnteredConfirmPassword("");

    console.log("assign");
  };

  return (
    <Form
      className="mx-auto"
      onSubmit={handleSubmit}
      style={{ maxWidth: 400, marginTop: `10rem` }}
    >
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          value={enteredEmail}
          onChange={handleEmailChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={enteredPassword}
          onChange={handleChangePassword}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formConfirm">
        <Form.Label>Confirm</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm password"
          value={enteredConfirmPassword}
          onChange={handleChangePasswordConfirm}
        />
      </Form.Group>
      <Link className="d-block mb-2" to="/signin">
        Sign in
      </Link>
      <div className="d-grid">
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </div>
    </Form>
  );
};

export default SignUp;
