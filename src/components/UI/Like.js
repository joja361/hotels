import classes from "./Like.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = ({ like, onLike, disabled }) => {
  const enableOrDisable = disabled ? "disabled" : "heart";
  const showLike = like ? (
    <AiFillHeart className={classes[enableOrDisable]} onClick={onLike} />
  ) : (
    <AiOutlineHeart className={classes[enableOrDisable]} onClick={onLike} />
  );

  return <div className={classes.child}>{showLike}</div>;
};

export default Like;
