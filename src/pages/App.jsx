import "../css/App.css";
import About from "./About";
import Home from "./Home";
import Game from "./Game";
import Navig from "../components/Navig";
import Leaderboard from "./Leaderboard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FactMachine from "./FactMachine";
import Trivia from "./Trivia";

function App() {
  return (
    <div className="App">
      <div className="cursor"></div>
      <Router>
        <Navig />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/game" element={<Game />} />
          <Route path="/fact-machine" element={<FactMachine />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/trivia" element={<Trivia />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
