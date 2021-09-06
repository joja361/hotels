import Like from "../UI/Like";
import Rating from "../UI/Rating";
import classes from "./Header.module.css";
import { Link, useRouteMatch } from "react-router-dom";

const Header = ({ name, city, rating, like, id }) => {
  const match = useRouteMatch();

  return (
    <div className={classes.header_container}>
      <div className={classes.header_title}>
        <Link className={classes.hotel_name} to={`${match.url}/${id}`}>
          {name}
        </Link>
        <p>{city}</p>
      </div>
      <Like liek={like} />
      <Rating rating={rating} />
    </div>
  );
};

export default Header;
