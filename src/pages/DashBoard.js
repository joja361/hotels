import Layout from "../components/layout/Layout";
import Button from "../components/UI/Button";
import Card from "../components/UI/Card";

const DashBoard = () => {
  const handleClick = () => {
    console.log("test");
  };
  return (
    <Layout>
      <Card>
        <Button title="Load Hotels" onClick={handleClick} />
      </Card>
    </Layout>
  );
};

export default DashBoard;
