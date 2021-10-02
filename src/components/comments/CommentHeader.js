import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";

const CommentHeader = ({ firstName, lastName, like }) => {
  const name = `${firstName} ${lastName}`;

  return (
    <Row>
      <Col md={4}>
        <h5>{name}</h5>
      </Col>
      <Col md={8}>
        {like ? (
          <AiOutlineLike
            style={{ color: "green", width: "auto", height: "100%" }}
          />
        ) : (
          <AiOutlineDislike
            style={{ color: "red", width: "auto", height: "100%" }}
          />
        )}
      </Col>
    </Row>
  );
};

export default CommentHeader;
