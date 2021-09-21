import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import classes from "./Star.module.css";

const Star = ({ full = false, id, onRating }) => {
  const handleClick = () => {
    onRating(id);
  };

  const star = full ? (
    <AiFillStar className={classes.star} onClick={handleClick} />
  ) : (
    <AiOutlineStar className={classes.star} onClick={handleClick} />
  );
  return star;
};

export default Star;
