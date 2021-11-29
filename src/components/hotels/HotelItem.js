import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useParams } from "react-router";
import CommentList from "../comments/CommentList";
import Image from "../UI/Image";
import HotelDetails from "./HotelDetails";

const HotelItem = ({ hotel }) => {
  const [showComments, setShowComments] = useState(false);
  const params = useParams();
  const detailPage = !Boolean(params.id);

  const handleShowReview = () => {
    setShowComments(!showComments);
  };

  const commentList = <CommentList id={hotel.id} comments={hotel.comments} />;

  return (
    <>
      <Row className="mb-4 card-item overflow-hidden">
        <Col md={5}>
          <Image image={hotel.img} />
        </Col>
        <Col md={7}>
          <HotelDetails
            hotel={hotel}
            onShowReview={handleShowReview}
            detailPage={detailPage}
            showComments={showComments}
          />
        </Col>
      </Row>
      {(detailPage && showComments && commentList) ||
        (!detailPage && commentList)}
      {detailPage && <hr className="mb-4 mx-n5" />}
    </>
  );
};

export default HotelItem;
