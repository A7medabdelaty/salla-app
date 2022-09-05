import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import Button from "react-bootstrap/esm/Button";

export default function Counter() {
  let counterData = useContext(CounterContext);
  let { counter, increment, decrement } = counterData;
  return (
    <>
      <h3 className="text-center">Counter</h3>
      <div className="d-flex ms-aut justify-content-center">
        <Button className="m-3" onClick={decrement}>
          -
        </Button>
        <h3 className="m-3">{counter}</h3>
        <Button className="m-3" onClick={increment}>
          +
        </Button>
      </div>
    </>
  );
}
