import React from "react";
import { useState, createContext } from "react";

export let CounterContext = createContext();

export function CounterContextProvider(props) {
  let [counter, setCounter] = useState(0);

  let increment = () => {
    setCounter(counter + 1);
  };

  let decrement = () => {
    setCounter(counter - 1);
  };

  let contextValue = { counter, increment, decrement };

  return (
    <CounterContext.Provider value={contextValue}>
      {props.children}
    </CounterContext.Provider>
  );
}
