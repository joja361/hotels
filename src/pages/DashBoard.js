import Layout from "../components/layout/Layout";
import HotelsList from "../components/hotels/HotelsList";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelData } from "../store/hotelsSlice";
import Spinner from "../components/UI/Spinner";

import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const DashBoard = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.hotel.error);
  const isLoading = useSelector((state) => state.hotel.loading);

  const fetchData = () => {
    dispatch(fetchHotelData());
  };

  return (
    <Layout>
      <Container className="mt-4" style={{ maxWidth: 800 }}>
        <Button onClick={fetchData}>Load Hotels</Button>
        {isLoading && <Spinner />}
        {error ? <h1 className="mt-4 text-center">{error}</h1> : <HotelsList />}
      </Container>
    </Layout>
  );
};

export default DashBoard;
