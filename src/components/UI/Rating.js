import { useDispatch } from "react-redux";
import { changeRating } from "../../store/hotelsSlice";
import Star from "./Star";
import { changeRatingWithPost } from "../../store/hotelsSlice";
import axios from "axios";

const Rating = ({ rating = null, hotelId }) => {
  const dispatch = useDispatch();

  const handleRating = (rate) => {
    axios
      .post(`http://localhost:8080/api/hotel/${hotelId}/rating`, {
        rating: 2,
      })
      .then((res) => console.log(res.data));
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
