import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Star = ({ full = false, id, onRating, hotelId, disabled }) => {
  const handleClick = () => {
    onRating(id, hotelId);
  };

  const enableOrDisable = disabled ? "disabled" : "star";

  const star = full ? (
    <AiFillStar className={enableOrDisable} onClick={handleClick} />
  ) : (
    <AiOutlineStar className={enableOrDisable} onClick={handleClick} />
  );
  return star;
};

export default Star;
