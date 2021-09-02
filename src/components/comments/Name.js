import classes from "./Name.module.css";

const Name = ({ firstName, lastName }) => {
  const name = `${firstName} ${lastName}`;
  return <div className={classes.name}>{name}</div>;
};

export default Name;
