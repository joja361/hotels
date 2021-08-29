import classes from "./Sign.module.css";
import InputForm from "./InputForm";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Sign In</h1>
      <InputForm name="Email" id="email" type="email" />
      <InputForm name="Password" id="password" type="password" />
      <InputForm name="Confirm" id="password_confirm" type="password" />
      <Link className={classes.link} to="/signin">
        Sing In
      </Link>
      <button className={classes.button}>Sign Up</button>
    </div>
  );
};

export default SignUp;
