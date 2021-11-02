import React, { useState, useEffect } from "react";
import "./Numbers.css";

const IncreaseingNumbers = () => {
  const [number, setNumber] = useState(
    parseInt(localStorage.getItem("number"))
  );

  useEffect(() => {
    localStorage.setItem("number", number);
  }, [number]);

  const IncreaseNumber = () => {
    setNumber(number + GenerateRandomNumber());
  };

  const GenerateRandomNumber = () => {
    const min = 2;
    const max = 10;
    return Math.floor(Math.random() * (max - min) + min);
  };

  const Reset = () => {
    setNumber(0);
  };

  return (
    <div>
      <div className="Buttons">
        <button onClick={IncreaseNumber}>Increase number</button>
        <button onClick={Reset}>Reset to 0</button>
      </div>
      <p>{number}</p>
    </div>
  );
};

export default IncreaseingNumbers;
