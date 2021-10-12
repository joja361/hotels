import Star from "./Star";

const Rating = ({ rating = null, onRating, hotelId }) => {
  let stars = [];

  for (let i = 1; i < 6; i++) {
    i <= rating ? stars.push(true) : stars.push(false);
  }

  const ratingStars = stars.map((star, i) => (
    <Star
      key={i}
      full={star}
      onRating={onRating}
      id={i + 1}
      hotelId={hotelId}
    />
  ));

  return ratingStars;
};

export default Rating;
