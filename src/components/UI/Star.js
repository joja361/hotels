import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import classes from "./Star.module.css";

const Star = ({ full = false, id, onRating, hotelId, disabled }) => {
  const handleClick = () => {
    onRating(id, hotelId);
  };

  const enableOrDisable = disabled ? "disabled" : "star";

  const star = full ? (
    <AiFillStar className={classes[enableOrDisable]} onClick={handleClick} />
  ) : (
    <AiOutlineStar className={classes[enableOrDisable]} onClick={handleClick} />
  );
  return star;
};

export default Star;
