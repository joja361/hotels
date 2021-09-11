import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignIn = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const history = useHistory();

  const handleChangeEmail = (event) => {
    setEnteredEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setEnteredPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEnteredEmail("");
    setEnteredPassword("");

    history.push("/dashboard");
  };

  return (
    <Form
      className="mx-auto"
      style={{ maxWidth: 400, marginTop: `10rem` }}
      onSubmit={submitHandler}
    >
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={handleChangeEmail}
          value={enteredEmail}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handleChangePassword}
          value={enteredPassword}
        />
      </Form.Group>
      <Link className="d-block mb-2" to="/signup">
        Sing Up
      </Link>
      <div className="d-grid">
        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </div>
    </Form>
  );
};

export default SignIn;
