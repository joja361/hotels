import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import classes from "./Star.module.css";

const Star = ({ full = false, id, onRating, hotelId }) => {
  const handleClick = () => {
    onRating(id, hotelId);
  };

  const star = full ? (
    <AiFillStar className={classes.star} onClick={handleClick} />
  ) : (
    <AiOutlineStar className={classes.star} onClick={handleClick} />
  );
  return star;
};

export default Star;
