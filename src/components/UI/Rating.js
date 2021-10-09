import Star from "./Star";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeRating } from "../../store/hotelsSlice";
import { token } from "../../store/authSlice";

const Rating = ({ rating = null, hotelId }) => {
  const dispatch = useDispatch();

  const handleRating = async (rate) => {
    try {
      await axios.post(`http://localhost:8080/api/hotel/${hotelId}/rating`, {
        rating: rate,
      });
      dispatch(changeRating({ hotelId, rate }));
    } catch (err) {
      console.log("Something went wrong");
    }
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
