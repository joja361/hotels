import Image from "../UI/Image";
import HotelDetails from "./HotelDetails";
import CommentList from "../comments/CommentList";
import classes from "./HotelItem.module.css";
import { useState } from "react";

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
      {showComments && <CommentList id={hotel.id} comments={hotel.comments} />}
    </div>
  );
};

export default HotelItem;
