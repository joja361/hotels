import Star from "./Star";

const Rating = ({ rating = null }) => {
  let stars = [];

  for (let i = 1; i < 6; i++) {
    i <= rating ? stars.push(true) : stars.push(false);
  }

  const ratingStars = stars.map((star, i) => <Star key={i} full={star} />);

  return ratingStars;
};

export default Rating;