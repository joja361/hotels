import HotelItem from "./HotelItem";

const HotelsList = ({ hotels }) => {
  const HotelList = hotels.map((hotel) => (
    <HotelItem key={hotel.id} hotel={hotel} />
  ));

  return <>{HotelList}</>;
};

export default HotelsList;
