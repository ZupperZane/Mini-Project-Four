import React, { useEffect, useState } from "react";

const TestUseEffect = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState("even");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (count % 2 === 0) setCalculation("even");
    else setCalculation("odd");
  }, [count]);

  return (
    <div className="m-2 p-4">
      <h2 className="text-3xl">You clicked the {count} times</h2>
      <p className="text-xl">Calculation: {calculation}</p>
      <button
        className="bg-amber-400 text-black hover:bg-amber-800 hover:text-white p-2 border-2 rounded-2xl"
        onClick={() => setCount(count + 1)}
      >
        <h2 className="text-lg font-bold">Click Here!</h2>
      </button>
    </div>
  );
};

export default TestUseEffect;
