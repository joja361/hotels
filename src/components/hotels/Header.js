import Like from "../UI/Like";
import Rating from "../UI/Rating";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header_container}>
      <div className={classes.header_title}>
        <h3>Hotel name</h3>
        <p>City</p>
      </div>
      <Like />
      <Rating />
    </div>
  );
};

export default Header;
