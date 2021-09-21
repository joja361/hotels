import Layout from "../components/layout/Layout";
import HotelsList from "../components/hotels/HotelsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelData } from "../store/hotelsSlice";
import Spinner from "../components/UI/Spinner";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

const Favorites = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotel.hotels);
  const isLoading = useSelector((state) => state.hotel.loading);

  useEffect(() => {
    dispatch(fetchHotelData());
  }, [dispatch]);

  console.log(hotels);

  return (
    <Layout>
      <h1 className="display-3 text-center">Favorites</h1>
      <Container className="mt-4" style={{ maxWidth: 800 }}>
        <HotelsList hotels={hotels} />
      </Container>
    </Layout>
  );
};

export default Favorites;
