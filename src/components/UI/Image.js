const Image = ({ image }) => {
  return (
    <div className="position-relative w-100 h-100 card-img">
      <div className="card-img-overlay"></div>
      <img className="img" src={image} alt="hotel" />
    </div>
  );
};

export default Image;
