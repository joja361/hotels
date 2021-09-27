import classes from "./Like.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { changeLike } from "../../store/hotelsSlice";

const Like = ({ like, hotelId }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(changeLike({ hotelId, like: !like }));
  };

  const showLike = like ? (
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
