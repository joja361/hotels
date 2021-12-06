import { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HotelsList from "../components/hotels/HotelsList";
import Layout from "../components/layout/Layout";
import { userRole } from "../store/authSlice";
import { fetchHotelData } from "../store/hotelsSlice";

const DashBoard = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotel.hotels);
  const error = useSelector((state) => state.hotel.error);
  const isLoading = useSelector((state) => state.hotel.loading);
  const role = useSelector(userRole);

  const addButton = role === "admin" && (
    <Link
      className="btn btn-outline-primary w-25 d-block mx-auto"
      to="/admin/addhotel"
    >
      Add New Hotel
    </Link>
  );

  useEffect(() => {
    dispatch(fetchHotelData());
  }, [dispatch]);

  return (
    <Layout>
      <Container className="hotels-container">
        {isLoading && (
          <Spinner
            animation="border"
            variant="info"
            size="lg"
            className="d-block mx-auto p-4 spinner"
          />
        )}
        {error ? (
          <h1 className="text-center">{error}</h1>
        ) : (
          <HotelsList hotels={hotels} />
        )}
        {addButton}
      </Container>
    </Layout>
  );
};

export default DashBoard;
