import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = ({ like, onLike, disabled }) => {
  const enableOrDisable = disabled ? "disabled" : "heart";
  const showLike = like ? (
    <AiFillHeart className={enableOrDisable} onClick={onLike} />
  ) : (
    <AiOutlineHeart className={enableOrDisable} onClick={onLike} />
  );

  return showLike;
};

export default Like;
