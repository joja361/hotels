import Layout from "../components/layout/Layout";
import HotelsList from "../components/hotels/HotelsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelData } from "../store/hotelsSlice";
import Spinner from "../components/UI/Spinner";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

const DashBoard = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotel.hotels);
  const error = useSelector((state) => state.hotel.error);
  const isLoading = useSelector((state) => state.hotel.loading);

  useEffect(() => {
    dispatch(fetchHotelData());
  }, [dispatch]);

  return (
    <Layout>
      <Container className="mt-4" style={{ maxWidth: 800 }}>
        {isLoading && <Spinner />}
        {error ? (
          <h1 className="mt-4 text-center">{error}</h1>
        ) : (
          <HotelsList hotels={hotels} />
        )}
      </Container>
    </Layout>
  );
};

export default DashBoard;
