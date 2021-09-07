import classes from "./Like.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

const Like = ({ like }) => {
  const [likeHeart, setLikeHeart] = useState(like);

  const handleLike = () => {
    setLikeHeart(!likeHeart);
  };

  const showLike = likeHeart ? (
    <AiFillHeart className={classes.heart} />
  ) : (
    <AiOutlineHeart className={classes.heart} />
  );

  return (
    <div onClick={handleLike} className={classes.child}>
      {showLike}
    </div>
  );
};

export default Like;
