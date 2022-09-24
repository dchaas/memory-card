function Card(props) {
  return (
    <div className="card" onClick={props.onCardClick}>
      <img
        className="card-image"
        src={props.image}
        alt={props.cardID}
        data={props.cardID}
        id={props.cardID}
      ></img>
    </div>
  );
}

export default Card;
