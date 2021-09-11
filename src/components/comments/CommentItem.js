import CircleImage from "../UI/CircleImage";
import CommentDetails from "./CommentDetails";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CommentItem = ({ comment }) => {
  return (
    <>
      <Row className="mb-3 mx-2">
        <Col md={2}>
          <CircleImage image={comment.avatar} />
        </Col>
        <Col md={10}>
          <CommentDetails
            firstName={comment.name}
            lastName={comment.lastName}
            like={comment.like}
            comment={comment.comment}
          />
        </Col>
      </Row>
    </>
  );
};

export default CommentItem;
