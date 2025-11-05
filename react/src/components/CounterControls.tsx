// src/components/CounterControls.js
import React from 'react';
import { useCount } from '../context/counterContext';

function CounterControls() {
  // Destructure the required functions from the custom hook
  const { increment, decrement } = useCount();

  return (
    <div style={{ border: '2px solid green', padding: '15px' }}>
      <h2>Controls</h2>
      <button onClick={increment}>Increment (+)</button>
      <button onClick={decrement} style={{ marginLeft: '10px' }}>
        Decrement (-)
      </button>
    </div>
  );
}

export default CounterControls;
