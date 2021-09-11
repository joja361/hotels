import classes from "./Image.module.css";

const Image = ({ image }) => {
  return <img className={classes.img} src={image} alt="hotel" />;
};

export default Image;
