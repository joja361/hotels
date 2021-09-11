import LikeHand from "../UI/LikeHand";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CommentHeader = ({ firstName, lastName, like }) => {
  const name = `${firstName} ${lastName}`;

  return (
    <Row>
      <Col md={4}>
        <h5>{name}</h5>
      </Col>
      <Col md={8}>
        <LikeHand like={like} />
      </Col>
    </Row>
  );
};

export default CommentHeader;
