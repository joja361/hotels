import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CommentDetails from "./CommentDetails";
import Avatar from "../UI/Avatar";

const CommentItem = ({ comment }) => {
  return (
    <>
      <Row className="mb-2 justify-content-center">
        <Col
          xs={1}
          className="d-flex justify-content-end align-items-start pe-2"
        >
          <Avatar avatar={comment.avatar} />
        </Col>
        <Col xs={10}>
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
