import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { mainAxios, userRole } from "../../store/authSlice";
import { changeLike, changeRating } from "../../store/hotelsSlice";
import Like from "../UI/Like";
import Rating from "../UI/Rating";

const Header = ({ name, city, rating, like, id, detailPage }) => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const history = useHistory();

  const role = useSelector(userRole);

  const IsUserAdmin = role === "admin";

  const handleRating = async (rate, hotelId) => {
    if (role === "user") {
      try {
        await mainAxios.post(`/hotel/${hotelId}/rating`, {
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
    if (role === "user") {
      try {
        await mainAxios.post(`/hotel/${id}/favorite`);
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
      className="display-6 ovo"
      style={{ color: "black", textDecoration: "none" }}
      to={`${match.url}/${id}`}
      target="_blank"
    >
      {name}
    </Link>
  );

  return (
    <>
      <Row className="align-items-center">
        <Col xs="auto">
          {detailPage && role ? (
            link
          ) : (
            <h1 className="display-6 ovo">{name}</h1>
          )}
        </Col>
        <Col xs="auto" className="ms-auto me-4">
          <Like
            like={like}
            hotelId={id}
            onLike={handleLike}
            disabled={IsUserAdmin}
          />
        </Col>
        <Col xs="auto">
          <Rating
            rating={rating}
            hotelId={id}
            onRating={handleRating}
            disabled={IsUserAdmin}
          />
        </Col>
      </Row>
      <Row>
        <p className="text-muted mb-0 trirong">{city}</p>
      </Row>
    </>
  );
};

export default Header;
