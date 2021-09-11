import { useSelector } from "react-redux";
import HotelItem from "./HotelItem";

const HotelsList = () => {
  const hotels = useSelector((store) => store.hotel.hotels);

  const HotelList = hotels.map((hotel) => (
    <HotelItem key={hotel.id} hotel={hotel} />
  ));

  return <div className="mt-4">{HotelList}</div>;
};

export default HotelsList;
