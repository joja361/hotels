import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import HotelItem from "../components/hotels/HotelItem";
import Layout from "../components/layout/Layout";
import { fetchHotelDetail } from "../store/hotelsSlice";

const HotelDetail = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  const hotel = useSelector((store) => store.hotel.hotelDetail);

  useEffect(() => {
    dispatch(fetchHotelDetail(id));
  }, [dispatch, id]);

  return (
    <Layout>
      <Container className="hotels-container">
        <h1 className="display-5 mt-n4 mb-4 text-center title trirong">
          User view
        </h1>
        <HotelItem hotel={hotel} detailPage={false} />
      </Container>
    </Layout>
  );
};

export default HotelDetail;
