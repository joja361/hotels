import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CommentDetails from "./CommentDetails";
import Avatar from "../UI/Avatar";

const CommentItem = ({ comment }) => {
  return (
    <>
      <Row className="mb-2 justify-content-center">
        <Col xs={2} md={1} className="ps-3 ps-sm-4 ps-md-2">
          <Avatar avatar={comment.avatar} />
        </Col>
        <Col xs={10} md={10}>
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
