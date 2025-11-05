import { createContext, useContext, useState } from 'react';
interface CountContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}
export const CountContext = createContext<CountContextType | undefined>(undefined)

export const CountProvider = ({children}) => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(prevCount => prevCount + 1)
    const decrement = () => setCount(prevCount => prevCount - 1)

    const contextValue = {
        count,
        increment,
        decrement
    }

    return (
      <CountContext.Provider value={contextValue}>
        {children}
      </CountContext.Provider>
    );
}

export const useCount = () => {
  return useContext(CountContext);
};