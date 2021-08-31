import classes from "./SubCard.module.css";

const SubCard = ({ children }) => {
  return <div className={classes.subcard}>{children}</div>;
};

export default SubCard;
