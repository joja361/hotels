import Image from "../UI/Image";
import HotelDetails from "./HotelDetails";
import CommentList from "../comments/CommentList";
import classes from "./HotelItem.module.css";
import { useState } from "react";

const HotelItem = ({ hotel, showButton = true }) => {
  const [showComments, setShowComments] = useState(false);

  const handleShowReview = () => {
    setShowComments(!showComments);
  };

  const commentList = <CommentList id={hotel.id} comments={hotel.comments} />;

  return (
    <div className={classes.container}>
      <div className={classes.item_container}>
        <Image image={hotel.img} />
        <HotelDetails
          hotel={hotel}
          onShowReview={handleShowReview}
          showButton={showButton}
        />
      </div>
      {(showButton && showComments && commentList) ||
        (!showButton && commentList)}
    </div>
  );
};

export default HotelItem;
