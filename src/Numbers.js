import React, { useState, useEffect } from "react";
import "./Numbers.css";
import helper from "./Helper";

const Numbers = () => {
  const [number, setNumber] = useState(
    parseInt(localStorage.getItem("number")) | 0
  );

  useEffect(() => {
    localStorage.setItem("number", number);
  }, [number]);

  const increaseNumber = () => {
    setNumber(number + helper.generateRandomNumber());
  };

  const reset = () => {
    setNumber(0);
  };

  return (
    <div>
      <div className="Buttons">
        <button onClick={increaseNumber}>Increase number</button>
        <button onClick={reset}>Reset to 0</button>
      </div>
      <p>{number}</p>
    </div>
  );
};

export default Numbers;
