function Card(props) {
  return (
    <div className="card">
      <img className="card-image" src={props.image} alt="image"></img>
      <div className="card-text">{props.cardText}</div>
    </div>
  );
}

export default Card;
