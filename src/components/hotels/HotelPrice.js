import classes from "./HotelPrice.module.css";

const HotelPrice = ({ price }) => {
  return <h3 className={classes.price}>{`${price} EUR`}</h3>;
};

export default HotelPrice;
