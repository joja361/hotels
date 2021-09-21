import Like from "../UI/Like";
import Rating from "../UI/Rating";
import { Link, useRouteMatch } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const Header = ({ name, city, rating, like, id, detailPage }) => {
  const match = useRouteMatch();

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
        {detailPage ? (
          link
        ) : (
          <Card.Title className="display-6">{name}</Card.Title>
        )}
        <p className="text-muted mb-0">{city}</p>
      </div>
      <Like like={like} />
      <Rating rating={rating} hotelId={id} />
    </Container>
  );
};

export default Header;
