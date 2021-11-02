import React, { useState } from "react";

const IncreaseingNumbers = () => {
  const [number, setNumber] = useState(0);

  const IncreaseNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <button onClick={IncreaseNumber}>Increase number</button>
      <p>{number}</p>
    </div>
  );
};

export default IncreaseingNumbers;
