import classes from "./CircleImage.module.css";

const CircleImage = ({ image }) => {
  return (
    <div className={classes.img_container}>
      <img src={image} alt="person" className={classes.img} />
    </div>
  );
};

export default CircleImage;
