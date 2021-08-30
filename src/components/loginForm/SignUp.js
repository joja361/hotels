import classes from "./Sign.module.css";
import InputForm from "./InputForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  emailValidator,
  passwordValidator,
  passwordConfirmationValid,
} from "../../lib/lib";

const SignUp = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleEmailChange = (newValue) => {
    setEnteredEmail(newValue);
    setIsValidEmail(false);
  };

  const handleChangePassword = (newValue) => {
    setEnteredPassword(newValue);
    setIsValidPassword(false);
  };

  const handleChangePasswordConfirm = (newValue) => {
    setEnteredConfirmPassword(newValue);
    setIsValidPassword(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailIsValid = emailValidator(enteredEmail);
    const passwordIsValid =
      passwordValidator(enteredPassword) ||
      passwordConfirmationValid(enteredPassword, enteredConfirmPassword);

    if (emailIsValid || passwordIsValid) {
      setIsValidEmail(emailIsValid);
      setIsValidPassword(passwordIsValid);
      return;
    }

    setEnteredEmail("");
    setEnteredPassword("");
    setEnteredConfirmPassword("");
    setIsValidEmail(false);
    setIsValidPassword(false);

    console.log("assign");
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <h1 className={classes.header}>Sign In</h1>
      <InputForm
        name="Email"
        id="email"
        type="text"
        onChange={handleEmailChange}
        enteredValues={enteredEmail}
        isValid={isValidEmail}
      />
      <InputForm
        name="Password"
        id="password"
        type="password"
        onChange={handleChangePassword}
        enteredValues={enteredPassword}
        isValid={isValidPassword}
      />
      <InputForm
        name="Confirm"
        id="confirm"
        type="password"
        onChange={handleChangePasswordConfirm}
        enteredValues={enteredConfirmPassword}
        isValid={isValidPassword}
      />
      <Link className={classes.link} to="/signin">
        Sing In
      </Link>
      <button className={classes.button}>Sign Up</button>
    </form>
  );
};

export default SignUp;
