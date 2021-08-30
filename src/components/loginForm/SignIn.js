import classes from "./Sign.module.css";
import InputForm from "./InputForm";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { emailValidator, passwordValidator } from "../../lib/lib";

const SignIn = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const history = useHistory();

  const handleChangeEmail = (newValue) => {
    setEnteredEmail(newValue);
    setIsValidEmail(false);
  };

  const handleChangePassword = (newValue) => {
    setEnteredPassword(newValue);
    setIsValidPassword(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const emailIsValid = emailValidator(enteredEmail);
    const passwordIsValid = passwordValidator(enteredPassword);

    if (emailIsValid || passwordIsValid) {
      setIsValidEmail(emailIsValid);
      setIsValidPassword(passwordIsValid);
      return;
    }

    setEnteredEmail("");
    setEnteredPassword("");
    setIsValidEmail(false);
    setIsValidPassword(false);

    history.push("/dashboard");
  };

  return (
    <form onSubmit={submitHandler} className={classes.container}>
      <h1 className={classes.header}>Sign In</h1>
      <InputForm
        name="Email"
        id="email"
        type="text"
        onChange={handleChangeEmail}
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
      <Link className={classes.link} to="/dashboard">
        Sing Up
      </Link>
      <button className={classes.button}>Sign In</button>
    </form>
  );
};

export default SignIn;
