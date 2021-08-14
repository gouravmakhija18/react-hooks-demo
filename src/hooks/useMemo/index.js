/**
 * useMemo Hook - This hook is used to optimize the performance by caching the function in memory which value doesn't change often.
 * example: function power(x) => x*x; always give same result for same input.
 * 
 * syntax: useMemo(function, [dependency list])
 * useCase: 
 *  1) Caching function which value doesn't change often.
 *  2) Caching object reference
 * Important: Be careful with Memory and performance overhead if you are using useMemo hook
 */

import React, { useState, useMemo } from 'react';

function slowDoubleFunction(number) {
  // ==== Blocking Start ======
  setTimeout(() => {
    return 2 * number;
  }, 500 );
  
  let startTime = new Date().getTime();
  let endTime = startTime;
  
  while(endTime < startTime + 500) {
    endTime = new Date().getTime();
  }
  // ===== Blocking End =====
  
  // return double number
  return parseInt(2 * number);
}

function Demo1() {
  const [number, setNumber] = useState(0);
  const [dark, setColor] = useState(true);
  
  // Caching function callback in memory
  const doubleNumber = useMemo(() => {
    return slowDoubleFunction(number);
  }, [number]);

  // Caching theme object reference in memory
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black' 
    }
  }, [dark]);

  return (
    <div>
      <h2>useMemo Hook</h2>
      <input 
        type="number"
        value={number}
        onChange={event => setNumber(parseInt(event.target.value))}
      />
      <button
        onClick={() => setColor(previousDark => !previousDark)}
      >
        Change Color
      </button>
      <div style={themeStyle}>
        {doubleNumber}
      </div>
    </div>
  )
}

export  { Demo1 }