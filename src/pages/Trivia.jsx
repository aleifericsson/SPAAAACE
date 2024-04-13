import React, { useState } from "react";
import Option from "../components/Option";
import "../css/Trivia.css";

function Trivia() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [options, setOptions] = useState([
    "93 million miles",
    "92 million miles",
    "94 million miles",
    "95 million miles",
  ]);

  return (
    <div className="container">
      <div className="question-box">
        <div className="question-number">Question {questionNumber} of 10</div>
        <div className="question">
          <h2>How far is the Earth from the Sun?</h2>
        </div>

        <div className="options">
          {options.map((option, index) => (
            <Option key={index} opt={option} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trivia;
