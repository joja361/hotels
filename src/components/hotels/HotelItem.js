import Image from "../UI/Image";
import classes from "./HotelItem.module.css";

import { useState } from "react";
import HotelDetails from "./HotelDetails";

const HotelItem = ({ hotel }) => {
  const [showComments, setShowComments] = useState(false);

  const handleShowReview = () => {
    setShowComments(!showComments);
    
  };

  return (
    <div className={classes.container}>
      <div className={classes.item_container}>
        <Image image={hotel.img} />
        <HotelDetails hotel={hotel} onShowReview={handleShowReview} />
      </div>
      {showComments && <p>Test</p>}
    </div>
  );
};

export default HotelItem;
