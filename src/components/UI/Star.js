import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import classes from "./Star.module.css";

const Star = ({ full = false }) => {
  const star = full ? (
    <AiFillStar className={classes.star} />
  ) : (
    <AiOutlineStar className={classes.star} />
  );
  return star;
};

export default Star;
