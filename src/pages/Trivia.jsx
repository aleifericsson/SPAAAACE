import React, { useState } from "react";
import Option from "../components/Option";
import "../css/Trivia.css";
import { useGame } from "../hooks/useGame";

function Trivia() {
  const [questionNumber, setQuestionNumber] = useState(1);
  //   const [options, setOptions] = useState([
  //     "93 million miles",
  //     "92 million miles",
  //     "94 million miles",
  //     "95 million miles",
  //   ]);

  const { questions, answer_question } = useGame();

  const handleAnswer = (userAnsStatus) => {
    answer_question(userAnsStatus);
    if (userAnsStatus) {
      console.log("Correct");
    } else {
      console.log("Incorrect");
    }
    setQuestionNumber((prev) => prev + 1);
  };

  return (
    <div className="container">
      <div className="question-box">
        <div className="question-number">Question {questionNumber} of 10</div>

        {questions.map((ques, index) => {
          return (
            <div className="question" key={index}>
              <h2>{ques.question}</h2>
              <p>{ques.planet}</p>

              <div className="choices">
                {ques.answers.map((ans, index) => {
                  return (
                    <div key={index} className="choice">
                      <Option
                        key={index}
                        answer={ans.text}
                        onClick={() => handleAnswer(ans.correct)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trivia;
