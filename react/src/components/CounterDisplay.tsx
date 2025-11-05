import React from 'react'
import { useCount } from '../context/counterContext'

const CounterDisplay = () => {

  const {count} = useCount()

  return (
    <div>
      <h1>CounterDisplay</h1>
      <p>{count}</p>
    </div>
  );
}

export default CounterDisplay