import classes from "./Like.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = ({ like, onLike }) => {
  const showLike = like ? (
    <AiFillHeart className={classes.heart} />
  ) : (
    <AiOutlineHeart className={classes.heart} />
  );

  return (
    <div onClick={onLike} className={classes.child}>
      {showLike}
    </div>
  );
};

export default Like;
