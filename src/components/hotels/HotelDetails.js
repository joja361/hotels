import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { userRole } from "../../store/authSlice";
import DateField from "./DateField";
import Header from "./Header";
import HotelPrice from "./HotelPrice";

const HotelDetails = ({ hotel, onShowReview, detailPage, showComments }) => {
  const role = useSelector(userRole);

  const deleteButton = role === "admin" && (
    <Button variant="outline-danger" className="ms-2 btn-delete shadow-none">
      Delete
    </Button>
  );

  return (
    <Row className="h-100 ms-3">
      <Row className="align-content-start">
        <Header
          name={hotel.name}
          city={hotel.city}
          rating={hotel.rating}
          like={hotel.like}
          id={hotel.id}
          detailPage={detailPage}
        />
        <Row>
          <p className="card-text">{hotel.description}</p>
        </Row>
      </Row>
      <Row className="align-content-end">
        <Row>
          <HotelPrice price={hotel.price} />
        </Row>
        <Row className="align-items-center">
          <Col className="me-auto">
            <DateField date={hotel.date} />
          </Col>
          {detailPage && (
            <Col xs="auto">
              <Button className="shadow-none" onClick={onShowReview}>
                <span style={{ marginRight: "0.8rem" }}>
                  {showComments ? <FaChevronUp /> : <FaChevronDown />}
                </span>
                Show reviews
              </Button>
              {deleteButton}
            </Col>
          )}
        </Row>
      </Row>
    </Row>
  );
};

export default HotelDetails;
