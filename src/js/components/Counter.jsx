import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(20);

  //useEffect(functino de useCallback, de que voy a estgar pedniente)
  useEffect(() => {
    console.log("Count cambio");
  }, [count]);

  useEffect(() => {
    console.log("Count 2 cambio");
  }, [count2]);

  useEffect(() => {
    console.log("Count 2 o Count cambio");
  }, [count, count2]);

  useEffect(() => {
    console.log("Cuando me voy a imprimir");
  }, []);

  return (
    <>
      <h1>Counter</h1>
      <div>
        <p> {count} </p>
        <button onClick={() => setCount(count + 1)}>Sumar</button>
      </div>

      <div>
        <p> {count2} </p>
        <button onClick={() => setCount2(count2 - 1)}>restar</button>
      </div>
    </>
  );
};

export default Counter;
