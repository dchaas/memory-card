import Card from "./Card";

function Board(props) {
  return (
    <div className="board">
      {props.cards.forEach((card) => {
        <Card image={card.image} cardText={card.cardText} />;
      })}

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Board;
