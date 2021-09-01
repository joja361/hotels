import Header from "./Header";
import HotelDescription from "./HotelDescription";
import HotelPrice from "./HotelPrice";
import Date from "./Date";
import Button from "../UI/Button";
import classes from "./HotelDetails.module.css";

const HotelDetails = ({ hotel, onShowReview }) => {
  return (
    <div className={classes.item_details}>
      <Header />
      <HotelDescription description={hotel.description} />
      <HotelPrice price={hotel.price} />
      <div className={classes.item_footer}>
        <Date date={hotel.date} />
        <Button title={"Show reviews"} onClick={onShowReview} />
      </div>
    </div>
  );
};

export default HotelDetails;
