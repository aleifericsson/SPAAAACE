import React, { useState } from "react";
import Option from "../components/Option";
import "../css/Trivia.css";
import { useGame } from "../hooks/useGame";
import Button from "react-bootstrap/Button";
import useTimer from "../hooks/useTimer";
import LForm from "./LForm";

function Trivia() {
  const {
    total_score,
    questions,
    answer_question,
    current_question,
    increment_q,
  } = useGame();

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [score, set_score] = useState(0);
  const { elapsedTime } = useTimer();

  const handleAnswer = (correct, answer, planet) => {
    set_score(answer_question(correct, planet));
    if (!answerSelected) {
      setSelectedAnswer(answer);
      setIsCorrect(correct);
      setAnswerSelected(true); // Disable further selection
      console.log(correct ? "Correct" : "Incorrect");
    }
  };

  const renderPicture = (index) => {
    const src_list = [
      "https://www.icegif.com/wp-content/uploads/2023/10/icegif-588.gif",
      "https://64.media.tumblr.com/b33c7d52e3d8a69c3c7bacf22565aa48/tumblr_mid0z4TjGC1s3yr8vo1_400.gif",
      "https://i.pinimg.com/originals/6f/8c/da/6f8cda99bb66d88fd6d666fb025a0817.gif",
      "https://upload.wikimedia.org/wikipedia/commons/7/7f/Rotating_earth_animated_transparent.gif",
      "https://media.tenor.com/SqJHatCJ40cAAAAi/mars.gif",
      "https://i.gifer.com/WME4.gif",
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHc5YXlzNzZyNjhteDRlcnJoaWhudHN3eHpwaDlhZjc0a25yODFodiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7buctjKD8g5r4544/giphy.gif",
      "https://i.gifer.com/PAx.gif",
      "https://thebluemoonofneptune.com/wp-content/uploads/2019/08/Neptune.gif",
      "https://media.tenor.com/KnfMJBmhWuMAAAAj/jo-moon.gif",
    ];
    return <img src={src_list[index]} className="gifs" />;
  };

const renderQuestion = (ques, index) => {
  if (current_question >= 0 && current_question <= 9){
    
  return (
    <div className="question" key={index}>
    <p>Question {index+1} of 10</p>
    <h2>{ques.question}</h2>
    {renderPicture(index)}
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
      ))
  }
    </div>
  <p>Time left: {(ques.timer/1000).toFixed(2)+" s"}</p>
  </div>
  )
  
}
  else if (current_question == 10){
    return(<LForm />)
  }
}

const next_q = () =>{
    increment_q();
  setIsCorrect(null);
  setAnswerSelected(false);
  setSelectedAnswer(null);
}

  const renderNextQuestion = () => {
    if (current_question >= 0 && current_question <= 9) {
      if (questions[current_question].answered) {
        return (
          <Button variant="light" className="next-question" onClick={next_q}>
            Next Question
          </Button>
        );
      }
    } else {
      if (current_question === -1) {
        return (
          <Button variant="light" className="next-question" onClick={next_q}>
            Start Quiz
          </Button>
        );
      }
    }
  };

  const handleName = (e) => {
    e.preventDefault();
    const name = e.target.value;
    console.log(name);
  };

  return (
    <>
      <div className="name">
        <input type="text" placeholder="Name..." onSubmit={handleName} />
        <button type="submit">Enter</button>
      </div>
      <div className="user-name"></div>
      <div className="trivia-app">
        <div className="container trivia">
          <div className="question-box">
            <h2 className="score">Your score: {total_score}</h2>
            {renderQuestion(questions[current_question], current_question)}

            <div className="stupid">{renderNextQuestion()}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trivia;
