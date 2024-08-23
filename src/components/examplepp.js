import React, { useState, useMemo } from 'react';

function SquareCalculator() {
  const [number, setNumber] = useState(0);

  const square = useMemo(() => {
    console.log('Calculating square...');
    return number * number;
  }, [number]);

  return (
    <div>
      <h1>Square Calculator</h1>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setNumber(Number(e.target.value))} 
      />
      <p>
        The square of {number} is {square}.
      </p>
    </div>
  );
}

export default SquareCalculator;