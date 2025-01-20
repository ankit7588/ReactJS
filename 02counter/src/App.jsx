import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 0

  const addValue = () => {
    // counter = counter + 1
    // setCounter(counter +1)
    // value will not go above 20
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      setCounter(20);
    }
  };

  const removeValue = () => {
    // counter = counter - 1
    // setCounter(counter - 1)
    // value will not go below 0
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2> Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
