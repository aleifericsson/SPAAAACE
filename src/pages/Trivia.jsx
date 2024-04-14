import React, { useState } from "react";
import Option from "../components/Option";
import "../css/Trivia.css";
import { useGame } from "../hooks/useGame";
import Button from 'react-bootstrap/Button';

function Trivia() {
  const { total_score, questions, answer_question, current_question, increment_q } = useGame();
  
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [score, set_score] = useState(0);

  const handleAnswer = (correct, answer, planet) => {
    set_score(answer_question(correct, planet));
    if (!answerSelected) {
      setSelectedAnswer(answer);
      setIsCorrect(correct);
      setAnswerSelected(true); // Disable further selection
      console.log(correct ? "Correct" : "Incorrect");
    }
  }

  

const renderQuestion = (ques, index) => {
  if (current_question >= 0 && current_question <= 9){
    
  return (
    <div className="question" key={index}>
    <p>Question {index+1} of 10</p>
    <h2>{ques.question}</h2>
    <p>{ques.planet}</p>
    <div className="choices">
      {ques.answers.map((ans, index) => (
        <Option
          key={index}
          answer={ans.text}
          onClick={() => handleAnswer(ans.correct === "true" ? true : false, ans.text, ques.planet)}
          isSelected={ans.text === selectedAnswer}
          isCorrect={isCorrect}
          disabled={ques.answered}
        />
      ))}
    </div>
  <p>Time left: {ques.timer}</p>
  </div>
  )
  
}
}

const next_q = () =>{
  increment_q();
  setIsCorrect(null);
  setAnswerSelected(false);
  setSelectedAnswer(null);
}

  const renderNextQuestion = () => {
    if (current_question >= 0 && current_question <= 9){
      if (questions[current_question].answered){
      return (
        <Button variant="light" className="next-question" onClick={next_q}>Next Question</Button>
      )
      }
    }
    else{
      if (current_question === -1){
      return (
        <Button variant="light" className="next-question" onClick={next_q}>Next Question</Button>
      )
      }
    }
  }

  return (
    <div className="trivia-app">
    <div className="container trivia">
      <div className="question-box">
        <h2 className="score">Your score: {total_score}</h2>
        {renderQuestion(questions[current_question],current_question)}

        <div className="stupid">
          {renderNextQuestion()}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Trivia;
