import React, { useState } from "react";
import "./CookieClicker.css"; // Import the CSS file

const CookieClicker = () => {
  const [points, setPoints] = useState(0);

  const handleClick = () => {
    setPoints(points + 1);
  };

  return (
    <div className="cookie-container">
      {" "}
      {/* Centering the content */}
      <button className="cookie-button" onClick={handleClick}>
        <img src="/cookie-1.png" alt="Cookie" />
      </button>
      <p className="points">Poeng: {points}</p>
    </div>
  );
};

export default CookieClicker;
