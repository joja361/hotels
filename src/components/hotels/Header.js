import Like from "../UI/Like";
import Rating from "../UI/Rating";
import classes from "./Header.module.css";

const Header = ({ name, city, rating, like }) => {
  return (
    <div className={classes.header_container}>
      <div className={classes.header_title}>
        <h3>{name}</h3>
        <p>{city}</p>
      </div>
      <Like liek={like} />
      <Rating rating={rating} />
    </div>
  );
};

export default Header;
