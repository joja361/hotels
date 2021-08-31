import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/layout/Layout";
import HotelsList from "../components/hotels/HotelsList";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";
import { fetchHotelData } from "../store/store";

const DashBoard = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state);

  const fetchData = () => {
    dispatch(fetchHotelData());
  };

  console.log(hotels);

  return (
    <Layout>
      <Card>
        <Button title="Load Hotels" onClick={fetchData} />
        <HotelsList hotels={hotels} />
      </Card>
    </Layout>
  );
};

export default DashBoard;
