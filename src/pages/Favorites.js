import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import HotelsList from "../components/hotels/HotelsList";
import Layout from "../components/layout/Layout";
import { fetchHotelData } from "../store/hotelsSlice";

const Favorites = () => {
  const hotels = useSelector((state) => state.hotel.hotels);
  const dispatch = useDispatch();

  const favoriteHotels = hotels.filter((hotel) => hotel.like);

  useEffect(() => {
    dispatch(fetchHotelData());
  }, [dispatch]);

  return (
    <Layout>
      <Container className="hotels-container">
        <h1 className="display-5 mt-n4 mb-4 text-center title trirong">
          Favorites
        </h1>
        <HotelsList hotels={favoriteHotels} />
      </Container>
    </Layout>
  );
};

export default Favorites;
