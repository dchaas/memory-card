//import React, { useState, useEffect } from "react";
import "./header.css";
import Score from "./Score";

function Header(props) {
  return (
    <div className="header">
      <div className="title">Remember the Cards</div>
      <Score current={props.current} best={props.best} />
    </div>
  );
}

export default Header;
