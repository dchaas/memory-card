import Card from "./Card";

function Board(props) {
  return (
    <div className="board">
      {props.cards.map((card, index) => (
        <Card key={card.id} image={card.image} cardID={card.id} />
      ))}
    </div>
  );
}

export default Board;
