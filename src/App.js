import "./App.css";
import { useState } from "react";
import Chatbox from "./components/Chatbox";
import Display from "./components/Display";

function App() {
  const [hour, setHour] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div className="Container">
          <Display hour={hour} />
          <Chatbox setHour={setHour} />
        </div>
      </header>
    </div>
  );
}

export default App;
