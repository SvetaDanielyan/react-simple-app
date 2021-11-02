import React, { useState } from "react";
import "./Numbers.css";

const IncreaseingNumbers = () => {
  const [number, setNumber] = useState(0);

  const IncreaseNumber = () => {
    setNumber(number + 1);
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
