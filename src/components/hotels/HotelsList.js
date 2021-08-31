import SubCard from "../UI/SubCard";
import HotelItem from "./HotelItem";

const HotelsList = ({ hotels }) => {
  const HotelList = hotels.map((hotel) => (
    <HotelItem key={hotel.id} hotel={hotel} />
  ));
  return <SubCard>{HotelList}</SubCard>;
};

export default HotelsList;
