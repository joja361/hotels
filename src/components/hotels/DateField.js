const DateField = ({ date }) => {
  const dateParts = date.split("/");

  const [year, month, day] = [
    dateParts[2],
    "" + (dateParts[1] - 1),
    dateParts[0],
  ];

  const newDate = new Date(year, month, day);

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  };

  const dateFormated = newDate.toLocaleDateString("en-GB", options);

  return <p>{dateFormated}</p>;
};

export default DateField;
