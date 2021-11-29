import { Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CommentDetails from "./CommentDetails";

const CommentItem = ({ comment }) => {
  return (
    <>
      <Row className="mb-2 justify-content-center">
        <Col xs={2} md={1} className="ps-3 ps-sm-4 ps-md-2">
          <Image
            src={comment.avatar}
            alt="person"
            roundedCircle
            className="comment-img"
          />
        </Col>
        <Col xs={10} md={11}>
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
