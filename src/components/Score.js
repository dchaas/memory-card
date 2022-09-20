function Score(props) {
  return (
    <div className="score">
      <div className="current">Current: {props.current}</div>
      <div className="best">Best: {props.best}</div>
    </div>
  );
}

export default Score;
