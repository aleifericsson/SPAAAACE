import { useState } from "react";
import json_questions from "../data/questions.json";
import useTimer from "./useTimer";

let planets = [];

const useGame = () => {
  const [show_question, set_show_question] = useState(false);
  const [total_score, set_total_score] = useState(0);
  const [questions, set_questions] = useState(generateQuestions());
  const [current_question, set_cur_ques] = useState(-1);
  const [quiz_active, set_quiz_active] = useState(false);
  const [prev_time, set_prev_time] = useState(0);
  const [name, setName] = useState(null);

  
  const { elapsedTime, isRunning, handleStart, handlePause, handleReset } = useTimer();

  const increment_q = () => {
    let index = current_question+1;
    set_cur_ques(thing => thing+1);
    let temp = [...questions];
    temp[index].counting_down = true;
    handleReset();
    handleStart();
    set_questions(temp);
  }

  const answer_question = (answer, planet_name) => {
    const index = planets.indexOf(planet_name);
    let temp = [...questions];
    temp[index].answered = true;
    temp[index].counting_down = false;
    if (answer) {
      temp[index].correct == true;
    }
    handlePause();
    const true_time = elapsedTime - prev_time
    set_prev_time(elapsedTime)
    temp[index].timer = 10000 - true_time;
    if (temp[index].timer < 0) temp[index].timer = 0
    const temp2 = total_score + temp[index].timer
    if (answer) {
      set_total_score(temp2);
    }
    set_questions(temp);
    return temp2;
  };

  return {
    show_question,
    total_score,
    questions,
    quiz_active,
    answer_question,
    current_question,
    increment_q,
    name,
    setName
  };
};

function Question(planet, question, answers) {
  this.planet = planet;
  this.question = question;
  this.answers = answers; // array of string
  this.timer = 10000; //10000 miliseconds = 10 seconds
  this.correct = false; //ignore
  this.answered = false;
}

const generateQuestions = () => {
  let myquestions = [];
  json_questions.forEach((question) => {
    planets.push(question["planet"]);
    myquestions.push(
      new Question(
        question["planet"],
        question["question"],
        question["answers"]
      )
    );
  });
  return myquestions;
};

export { useGame };
