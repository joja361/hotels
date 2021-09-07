import Image from "../UI/Image";
import HotelDetails from "./HotelDetails";
import CommentList from "../comments/CommentList";
import classes from "./HotelItem.module.css";
import { useState } from "react";

const HotelItem = ({ hotel, detailPage = true }) => {
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
          detailPage={detailPage}
        />
      </div>
      {(detailPage && showComments && commentList) ||
        (!detailPage && commentList)}
    </div>
  );
};

export default HotelItem;
