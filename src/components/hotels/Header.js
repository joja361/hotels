import Like from "../UI/Like";
import Rating from "../UI/Rating";
import classes from "./Header.module.css";
import { Link, useRouteMatch } from "react-router-dom";

const Header = ({ name, city, rating, like, id, detailPage }) => {
  const match = useRouteMatch();

  const link = (
    <Link
      className={classes.hotel_name}
      to={`${match.url}/${id}`}
      target="_blank"
    >
      {name}
    </Link>
  );

  return (
    <div className={classes.header_container}>
      <div className={classes.header_title}>
        {detailPage ? link : <p className={classes.hotel_name}>{name}</p>}
        <p>{city}</p>
      </div>
      <Like like={like} />
      <Rating rating={rating} />
    </div>
  );
};

export default Header;
