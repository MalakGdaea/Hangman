import logo from "./logo.svg";
import "./App.css";
import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";

function App() {
  return (
    <div>
      <Score />
      <Solution />
      <Letters />
    </div>
  );
}

export default App;
