import classes from "./Image.module.css";

const Image = ({ image }) => {
  return (
    <div className={classes.img_container}>
      <img className={classes.img} src={image} alt="hotel" />
    </div>
  );
};

export default Image;
