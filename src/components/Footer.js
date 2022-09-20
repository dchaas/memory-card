//import React, { useState, useEffect } from "react";

function Footer() {
  const date = new Date();

  return <div className="footer">Copyright {date.getFullYear()} by dchaas</div>;
}

export default Footer;
