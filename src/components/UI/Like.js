import classes from "./Like.module.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { changeLike } from "../../store/hotelsSlice";
import axios from "axios";
import { token } from "../../store/authSlice";

const Like = ({ like, hotelId }) => {
  const dispatch = useDispatch();

  const handleLike = async () => {
    try {
      await axios.post(`http://localhost:8080/api/hotel/${hotelId}/favorite`, {
        headers: { Authentication: `Bearer ${token}` },
      });
      dispatch(changeLike({ hotelId, like: !like }));
    } catch (err) {
      console.log("Something went wrong");
    }
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
