import { useSelector } from "react-redux";
import SubCard from "../UI/SubCard";
import HotelItem from "./HotelItem";

const HotelsList = () => {
  const hotels = useSelector((store) => store.hotels);

  const HotelList = hotels.map((hotel) => (
    <HotelItem key={hotel.id} hotel={hotel} />
  ));
  
  return <SubCard>{HotelList}</SubCard>;
};

export default HotelsList;
