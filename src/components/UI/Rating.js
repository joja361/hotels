import axios from "axios";
import { useDispatch } from "react-redux";
import { changeRating } from "../../store/hotelsSlice";
import Star from "./Star";

const Rating = ({ rating = null, hotelId }) => {
  const dispatch = useDispatch();
  const handleRating = (rate) => {
    dispatch(changeRating({ hotelId, rate }));
  };

  let stars = [];
  for (let i = 1; i < 6; i++) {
    i <= rating ? stars.push(true) : stars.push(false);
  }

  const ratingStars = stars.map((star, i) => (
    <Star key={i} full={star} onRating={handleRating} id={i + 1} />
  ));

  return ratingStars;
};

export default Rating;
