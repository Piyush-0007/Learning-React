const Card = (props) => {
  const { name, img, rating, price, cuisine, time } = props;
  return (
    <div className="card">
      <img src={img} alt={name + " display image"} />
      <h3 className="name">{name}</h3>
      <span>{rating}</span>
      <span>{time}</span>
      <div>{price}</div>
      <div className="cuisines">{cuisine.join(", ")}</div>
    </div>
  );
};
export default Card