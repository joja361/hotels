import Image from "../UI/Image";
import classes from "./HotelItem.module.css";
import Header from "./Header";

const HotelItem = ({ hotel }) => {
  return (
    <div className={classes.item_container}>
      <Image image={hotel.img} />
      <div className={classes.item_details}>
        <Header />
      </div>
    </div>
  );
};

export default HotelItem;
