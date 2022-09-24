import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./app.css";
// load the images
import angry from "./assets/angry.png";
import beer from "./assets/beer.png";
import confused from "./assets/confused.png";
import crazy from "./assets/crazy.png";
import cry from "./assets/cry.png";
import embarrassed from "./assets/embarrassed.png";
import facepalm from "./assets/facepalm.png";
import guilty from "./assets/guilty.png";
import idea from "./assets/idea.png";
import phone from "./assets/phone.png";
import pray from "./assets/pray.png";
import sad from "./assets/sad.png";
import shh from "./assets/shh.png";
import silly from "./assets/silly.png";
import surprised from "./assets/surprised.png";
import thumbs from "./assets/thumbs.png";
import wink from "./assets/wink.png";

const App = () => {
  let cardsStart = [
    { image: angry, id: 1 },
    { image: beer, id: 2 },
    { image: confused, id: 3 },
    { image: crazy, id: 4 },
    { image: cry, id: 5 },
    { image: embarrassed, id: 6 },
    { image: facepalm, id: 8 },
    { image: guilty, id: 9 },
    { image: idea, id: 10 },
    { image: phone, id: 11 },
    { image: pray, id: 12 },
    { image: sad, id: 13 },
    { image: shh, id: 14 },
    { image: silly, id: 15 },
    { image: surprised, id: 16 },
    { image: thumbs, id: 17 },
    { image: wink, id: 18 },
  ];

  const [picked, setPicked] = useState([]);
  const [cards, setCards] = useState(cardsStart);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // method to check if repeated
  const shuffleCards = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const onCardClick = (event) => {
    console.log(event.target);
    let id = parseInt(event.target.getAttribute("data"));
    if (!picked.includes(id)) {
      setPicked(picked.concat([id]));
      setScore(score + 1);
    } else {
      setPicked([]);
      setScore(0);
    }
    //setCards(shuffleCards(cards));
    console.log(picked);
    console.log(cards);
  };

  useEffect(() => {
    setCards(shuffleCards(cards));
    if (score > bestScore) {
      setBestScore(score);
    }
  });

  return (
    <div className="app">
      <Header current={score} best={bestScore} />
      <Board cards={cards} onCardClick={onCardClick} />
      <Footer />
    </div>
  );
};

export default App;

/* Structure needed:
src
  -assets
    <> Pictures/images for the cards
  -components 
    <> CSS files for each component if needed for individuals
    -- CARD
    -- GAMEBOARD (show all of the cards)
    -- SCORE
    -- HEADER
    -- FOOTER

*/
