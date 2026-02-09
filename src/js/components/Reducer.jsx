import React, { useReducer, useState } from "react";
import { counterReducer } from "./counterReducer";


const Reducer = () => {
  const [count, setCount] = useState(10);

  const [ state , dispatch ] = useReducer(counterReducer, {count: 2, message: "Tu no has cambiado ini" })


  return (
    <>
      <h1>Counter</h1>
      <div>
        <p> {count} </p>
        <button onClick={() => setCount(count + 1)}>Sumar</button>
        <p>El valor del state es : {state.count}</p>
        <h1>{state.message}</h1>
        <button onClick={()=>dispatch({ type: "increment"})}>Agregar</button>

         <button onClick={()=>dispatch({ type: "decrement"})}>Agregar</button>
      </div>

     
    </>
  );
};

export default Reducer;
