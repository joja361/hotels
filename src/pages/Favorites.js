import Layout from "../components/layout/Layout";
import HotelsList from "../components/hotels/HotelsList";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";

const Favorites = () => {
  const hotels = useSelector((state) => state.hotel.hotels);

  const favoriteHotels = hotels.filter((hotel) => hotel.like);

  return (
    <Layout>
      <h1 className="display-3 text-center">Favorites</h1>
      <Container className="mt-4" style={{ maxWidth: 800 }}>
        <HotelsList hotels={favoriteHotels} />
      </Container>
    </Layout>
  );
};

export default Favorites;
