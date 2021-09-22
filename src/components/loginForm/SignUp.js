import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import {
  isConfirmPasswordValid,
  isEmailValid,
  isPasswordValid,
} from "../../lib/lib";
import axios from "axios";

const SignUp = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [isEnteredEmailInvalid, setIsEnteredEmailInvalid] = useState({
    isInvalid: null,
    errorMessage: "",
  });
  const [isEnteredPasswordInvalid, setIsEnteredPasswordInvalid] = useState({
    isInvalid: null,
    errorMessage: "",
  });
  const [isEnteredConfirmPasswordInvalid, setIsEnteredConfirmPasswordInvalid] =
    useState({
      isInvalid: null,
      errorMessage: "",
    });

  const history = useHistory();

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

    const emailIsValid = isEmailValid(enteredEmail);
    const passwordIsValid = isPasswordValid(enteredPassword);
    const confirmPasswordIsValid = isConfirmPasswordValid(
      enteredPassword,
      enteredConfirmPassword
    );

    const validEnteredValues =
      emailIsValid && passwordIsValid && confirmPasswordIsValid;

    if (!validEnteredValues) {
      setIsEnteredEmailInvalid({
        isInvalid: !emailIsValid,
        errorMessage: "Entered e-mail can't be empty and must include @",
      });
      setIsEnteredPasswordInvalid({
        isInvalid: !passwordIsValid,
        errorMessage: "Entered password must contain at least 6 characters",
      });
      setIsEnteredConfirmPasswordInvalid({
        isInvalid: !confirmPasswordIsValid,
        errorMessage: "Passwords must be equal",
      });
      return;
    }

    axios
      .post("http://localhost:8080/api/user", {
        email: enteredEmail,
        password: enteredPassword,
      })
      .then((res) => {
        setIsEnteredEmailInvalid({
          isInvalid: false,
          errorMessage: "",
        });
        setIsEnteredPasswordInvalid({
          isInvalid: false,
          errorMessage: "",
        });
        setIsEnteredConfirmPasswordInvalid({
          isInvalid: false,
          errorMessage: "",
        });
        history.replace("/signin");
      });
  };

  return (
    <Form
      className="mx-auto"
      onSubmit={handleSubmit}
      style={{ maxWidth: 400, marginTop: `10rem` }}
      noValidate
    >
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="email"
            placeholder="Email"
            value={enteredEmail}
            onChange={handleEmailChange}
            isInvalid={isEnteredEmailInvalid.isInvalid}
          />
          <Form.Control.Feedback type="invalid">
            {isEnteredEmailInvalid.errorMessage}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="password"
            placeholder="Password"
            value={enteredPassword}
            onChange={handleChangePassword}
            isInvalid={isEnteredPasswordInvalid.isInvalid}
          />
          <Form.Control.Feedback type="invalid">
            {isEnteredPasswordInvalid.errorMessage}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formConfirm">
        <Form.Label>Confirm</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="password"
            placeholder="Confirm password"
            value={enteredConfirmPassword}
            onChange={handleChangePasswordConfirm}
            isInvalid={isEnteredConfirmPasswordInvalid.isInvalid}
          />
          <Form.Control.Feedback type="invalid">
            {isEnteredConfirmPasswordInvalid.errorMessage}
          </Form.Control.Feedback>
        </InputGroup>
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
