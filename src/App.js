import React, { useState, useEffect } from "react";
import Header from "./components/Header";
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
  return (
    <div>
      <Header current={2} best={2} />
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
