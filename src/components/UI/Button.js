import classes from "./Button.module.css";

const Button = ({ title = "Button", onClick }) => {
  return (
    <button className={classes.btn} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
