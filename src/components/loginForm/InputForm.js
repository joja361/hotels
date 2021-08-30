import classes from "./InputForm.module.css";

const Input = ({ name, id, type, onChange, enteredValues, isValid }) => {
  const changeHandler = (event) => {
    onChange(event.target.value);
  };

  const classValidation = !isValid ? "input_form" : "input_form_invalid";

  return (
    <div className={classes.input_container}>
      <label className={classes.input_label} htmlFor={id}>
        {name}
      </label>
      <input
        className={classes[classValidation]}
        id={id}
        type={type}
        value={enteredValues[id]}
        onChange={changeHandler}
      />
    </div>
  );
};

export default Input;
