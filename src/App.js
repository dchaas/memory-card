import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./app.css";

const App = () => {
  /*
  const [color, setColor] = useState("black");

  useEffect(() => {
    const changeColorOnClick = () => {
      if (color === "black") {
        setColor("red");
      } else {
        setColor("black");
      }
    };

    document.addEventListener("click", changeColorOnClick);

    return () => {
      document.removeEventListener("click", changeColorOnClick);
    };
  }, [color]);
*/

  const cards = [{ image: "../assets/thumbs.png", cardText: "Thumbs Up!" }];

  return (
    <div className="app">
      <Header current={2} best={2} />
      <Board cards={cards} />
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
