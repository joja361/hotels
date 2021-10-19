import Layout from "../components/layout/Layout";
import HotelsList from "../components/hotels/HotelsList";
import Spinner from "../components/UI/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotelData } from "../store/hotelsSlice";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { roleOfUser } from "../store/authSlice";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotel.hotels);
  const error = useSelector((state) => state.hotel.error);
  const isLoading = useSelector((state) => state.hotel.loading);
  const role = useSelector(roleOfUser);

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
      <Container className="mt-4" style={{ maxWidth: 800 }}>
        {isLoading && <Spinner />}
        {error ? (
          <h1 className="mt-4 text-center">{error}</h1>
        ) : (
          <HotelsList hotels={hotels} />
        )}
        {addButton}
      </Container>
    </Layout>
  );
};

export default DashBoard;
