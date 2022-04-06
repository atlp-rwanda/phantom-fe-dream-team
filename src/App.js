import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import {
    decrement,
    increment,
    reset,
  } from "./redux/actions/index";

  
  
  function App() {
    const counter = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center'}}>
          <h1>
            Phantom 1<br /> Counter App using Redux!!!
          </h1>
          <h2>Counter</h2>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
        </div>
      );
  }
  
  
  export default App;