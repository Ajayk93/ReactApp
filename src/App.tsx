import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  let counter = useRef(0);
  
  useLayoutEffect(()=>{
    counter.current++;
  })

  const increment = () => {
    setValue(value+1);
  }

  return (
    <div className="App">
      <h2>useRef value: {counter.current}</h2>
      <h2>useState value: {value}</h2>
      <button onClick={() => increment()}>click me</button>
    </div>
  );
}

export default App;
