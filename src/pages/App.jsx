import "../css/App.css";
import About from "./About";
import Home from "./Home";
import Unity from "./Unity";
import Navig from "../components/Navig";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FactMachine from "./FactMachine";

function App() {
  return (
    <div className="App">
      <div className="cursor"></div>
      <Router>
        <Navig />

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/unity" element={<Unity />} />
          <Route path="/fact-machine" element={<FactMachine />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
