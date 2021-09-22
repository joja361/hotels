import axios from "axios";
import Star from "./Star";

const Rating = ({ rating = null, hotelId }) => {
  const handleRating = (rate) => {
    console.log(rate)
    axios
      .post(`http://localhost:8080/api/hotel/${hotelId}/rating`, {
        rating: rate,
      })
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
