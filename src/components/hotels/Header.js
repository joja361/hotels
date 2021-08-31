import Like from "./Like";
import Rating from "./Rating";

const Header = () => {
  return (
    <div>
      <div>
        <h1>Hotel name</h1>
        <h3>City</h3>
      </div>
      <Like />
      <Rating />
    </div>
  );
};

export default Header;
