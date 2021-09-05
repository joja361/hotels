const Button = ({ variant, title, ...rest }) => {
  return (
    <button className="btn " {...rest}>
      {title}
    </button>
  );
};

export default Button;



