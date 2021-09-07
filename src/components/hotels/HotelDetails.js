import Header from "./Header";
import HotelDescription from "./HotelDescription";
import HotelPrice from "./HotelPrice";
import DateField from "./DateField";
import Button from "../UI/Button";
import classes from "./HotelDetails.module.css";

const HotelDetails = ({ hotel, onShowReview, detailPage }) => {
  return (
    <div className={classes.item_details}>
      <Header
        name={hotel.name}
        city={hotel.city}
        rating={hotel.rating}
        like={hotel.like}
        id={hotel.id}
        detailPage={detailPage}
      />
      <HotelDescription description={hotel.description} />
      <HotelPrice price={hotel.price} />
      <div className={classes.item_footer}>
        <DateField date={hotel.date} />
        {detailPage && <Button title={"Show reviews"} onClick={onShowReview} />}
      </div>
    </div>
  );
};

export default HotelDetails;
