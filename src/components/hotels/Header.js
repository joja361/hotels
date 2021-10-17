import Like from "../UI/Like";
import Rating from "../UI/Rating";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { changeRating, changeLike } from "../../store/hotelsSlice";
import { baseUrl, roleOfUser } from "../../store/authSlice";
import { Link, useRouteMatch, useHistory } from "react-router-dom";

const Header = ({ name, city, rating, like, id, detailPage }) => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();

  const role = useSelector(roleOfUser);

  const handleRating = async (rate, hotelId) => {
    if (role) {
      try {
        await baseUrl.post(`/hotel/${hotelId}/rating`, {
          rating: rate,
        });
        dispatch(changeRating({ hotelId, rate }));
      } catch (err) {
        console.log("Something went wrong");
      }
    } else {
      history.push("/");
    }
  };

  const handleLike = async () => {
    if (role) {
      try {
        await baseUrl.post(`/hotel/${id}/favorite`);
        dispatch(changeLike({ hotelId: id, like: !like }));
      } catch (err) {
        console.log("Something went wrong");
      }
    } else {
      history.push("/");
    }
  };

  const link = (
    <Link
      className="display-6"
      style={{ color: "black", textDecoration: "none" }}
      to={`${match.url}/${id}`}
      target="_blank"
    >
      {name}
    </Link>
  );

  return (
    <Container className="d-flex justify-content-between align-items-center mb-2 p-0">
      <div>
        {detailPage && role ? (
          link
        ) : (
          <Card.Title className="display-6">{name}</Card.Title>
        )}
        <p className="text-muted mb-0">{city}</p>
      </div>
      <Like like={like} hotelId={id} onLike={handleLike} />
      <Rating rating={rating} hotelId={id} onRating={handleRating} />
    </Container>
  );
};

export default Header;
