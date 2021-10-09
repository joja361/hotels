import Image from "../UI/Image";
import HotelDetails from "./HotelDetails";
import CommentList from "../comments/CommentList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";

const HotelItem = ({ hotel, detailPage = true }) => {
  const [showComments, setShowComments] = useState(false);

  const handleShowReview = () => {
    setShowComments(!showComments);
  };

  const commentList = <CommentList id={hotel.id} comments={hotel.comments} />;

  return (
    <>
      <Card className="mb-3 border-0">
        <Row style={{ minHeight: "17rem" }}>
          <Col md={5}>
            <Image image={hotel.img} />
          </Col>
          <Col md={7} className="d-flex flex-grow-1">
            <HotelDetails
              hotel={hotel}
              onShowReview={handleShowReview}
              detailPage={detailPage}
              showComments={showComments}
            />
          </Col>
        </Row>
      </Card>
      {(detailPage && showComments && commentList) ||
        (!detailPage && commentList)}
    </>
  );
};

export default HotelItem;
