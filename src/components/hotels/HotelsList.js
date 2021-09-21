import HotelItem from "./HotelItem";

const HotelsList = ({ hotels }) => {
  const HotelList = hotels.map((hotel) => (
    <HotelItem key={hotel.id} hotel={hotel} />
  ));

  return <div className="mt-4">{HotelList}</div>;
};

export default HotelsList;
