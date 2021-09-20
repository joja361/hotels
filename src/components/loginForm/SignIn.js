import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { isEmailValid, isPasswordValid } from "../../lib/lib";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

const SignIn = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isEnteredEmailInvalid, setIsEnteredEmailInvalid] = useState({
    isInvalid: null,
    errorMessage: "",
  });
  const [isEnteredPasswordlInvalid, setIsEnteredPasswordInvalid] = useState({
    isInvalid: null,
    errorMessage: "",
  });
  const [areEnteredCredentialValid, setAreEnteredCredentialValid] = useState({
    isInvalid: false,
    errorMessage: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChangeEmail = (event) => {
    setEnteredEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setEnteredPassword(event.target.value);
  };

  const handleFocus = () => {
    setAreEnteredCredentialValid({
      isInvalid: false,
      errorMessage: "",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const emailIsValid = isEmailValid(enteredEmail);
    const passwordIsValid = isPasswordValid(enteredPassword);

    const validEnteredValues = emailIsValid && passwordIsValid;

    if (!validEnteredValues) {
      setIsEnteredEmailInvalid({
        isInvalid: !emailIsValid,
        errorMessage: "Entered e-mail can't be empty and must include @",
      });
      setIsEnteredPasswordInvalid({
        isInvalid: !passwordIsValid,
        errorMessage: "Entered password must contain at least 6 characters",
      });
      return;
    }

    axios
      .get("http://localhost:8080/api/user")
      .then((res) => {
        const index = res.data.findIndex(
          (item) =>
            item.email === enteredEmail && item.password === enteredPassword
        );
        if (index !== -1) {
          setEnteredEmail("");
          setEnteredPassword("");
          return res.data[index];
        } else {
          setIsEnteredEmailInvalid({
            isInvalid: false,
            errorMessage: "",
          });
          setIsEnteredPasswordInvalid({
            isInvalid: false,
            errorMessage: "",
          });
          throw new Error(
            "Your e-mail or password are incorrect, please check once again!"
          );
        }
      })
      .then((data) => {
        dispatch(login({ email: data.email, id: data.id }));
        history.replace("/dashboard");
      })
      .catch((err) =>
        setAreEnteredCredentialValid({
          isInvalid: true,
          errorMessage: err.message,
        })
      );
  };

  return (
    <Form
      className="mx-auto"
      style={{ maxWidth: 400, marginTop: `10rem` }}
      onSubmit={submitHandler}
      noValidate
    >
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleChangeEmail}
            value={enteredEmail}
            isInvalid={isEnteredEmailInvalid.isInvalid}
            onFocus={handleFocus}
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
            onChange={handleChangePassword}
            value={enteredPassword}
            isInvalid={isEnteredPasswordlInvalid.isInvalid}
            onFocus={handleFocus}
          />
          <Form.Control.Feedback type="invalid">
            {isEnteredPasswordlInvalid.errorMessage}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
      {areEnteredCredentialValid.isInvalid && (
        <p style={{ color: "red" }}>{areEnteredCredentialValid.errorMessage}</p>
      )}
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
