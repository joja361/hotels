import classes from "./Sign.module.css";
import InputForm from "./InputForm";
import { Link } from "react-router-dom";
import { useState } from "react";

const initialState = {
  email: "",
  emailIsValid: false,
  password: "",
  passwordIsValid: false,
};

const SignIn = () => {
  const [enteredValues, setEnteredValues] = useState(initialState);

  const handleChange = (newValue) => {
    setEnteredValues(newValue);
    setEnteredValues((prev) => ({
      ...prev,
      emailIsValid: false,
      passwordIsValid: false,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const emailIsValid =
      enteredValues.email === "" || !enteredValues.email.includes("@");

    const passwordIsValid =
      enteredValues.password === "" || enteredValues.password.length < 6;

    if (emailIsValid || passwordIsValid) {
      setEnteredValues((prev) => ({
        ...prev,
        emailIsValid,
        passwordIsValid,
      }));
      return;
    }

    setEnteredValues(initialState);

    console.log("asign");
  };

  return (
    <form onSubmit={submitHandler} className={classes.container}>
      <h1 className={classes.header}>Sign In</h1>
      <InputForm
        name="Email"
        id="email"
        type="text"
        onChange={handleChange}
        enteredValues={enteredValues}
        isValid={enteredValues.emailIsValid}
      />
      <InputForm
        name="Password"
        id="password"
        type="password"
        onChange={handleChange}
        enteredValues={enteredValues}
        isValid={enteredValues.passwordIsValid}
      />
      <Link className={classes.link} to="/signup">
        Sing Up
      </Link>
      <button className={classes.button}>Sign In</button>
    </form>
  );
};

export default SignIn;
