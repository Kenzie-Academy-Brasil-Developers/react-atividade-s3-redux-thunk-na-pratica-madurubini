import "./App.css";
import Chatbox from "./components/Chatbox";
import Display from "./components/Display";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Display />
        <Chatbox />
      </header>
    </div>
  );
}

export default App;
