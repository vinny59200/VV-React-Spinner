import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);

  const toggleSpinner = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div className="App">
      <button type="button" name="toggle" onClick={toggleSpinner}>
        Toggle
      </button>
      <br></br>
      <div>
        <LoadingSpinner toggle={toggle} />
      </div>
    </div>
  );
}

export default App;
