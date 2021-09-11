import Header from "./Header";
import HotelPrice from "./HotelPrice";
import DateField from "./DateField";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const HotelDetails = ({ hotel, onShowReview, detailPage }) => {
  return (
    <Card.Body className="p-0 d-flex flex-column justify-content-between">
      <Header
        name={hotel.name}
        city={hotel.city}
        rating={hotel.rating}
        like={hotel.like}
        id={hotel.id}
        detailPage={detailPage}
      />
      <Card.Text className="d-flex flex-grow-1">{hotel.description}</Card.Text>
      <HotelPrice price={hotel.price} />
      <div className="d-flex justify-content-between align-items-center p-0">
        <DateField date={hotel.date} />
        {detailPage && <Button onClick={onShowReview}>Show reviews</Button>}
      </div>
    </Card.Body>
  );
};

export default HotelDetails;