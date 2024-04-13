import { useState } from "react";
import json_questions from "../data/questions.json";
import useTimer from "./useTimer";

let planets = [];

const useGame = () => {
  const [nearest_planet, set_nearest_planet] = useState("sun");
  const [show_question, set_show_question] = useState(false);
  const [total_score, set_total_score] = useState(0);
  const [questions, set_questions] = useState(generateQuestions());
  const [quiz_active, set_quiz_active] = useState(false);

  const start_question = () => {
    set_show_question((thing) => !thing);
    const index = planets.indexOf(nearest_planet);
    let temp = [...questions];
    temp[index].counting_down = true;
    temp[index].handleReset();
    temp[index].handleStart();
    set_questions(temp);
  };

  const find_index_of_correct = (answers) => {
    for (let i = 0; i < 4; i++) {
      if (answers[i].correct === true) {
        return i;
      }
    }
  };

  const answer_question = (answer, planet_name) => {
    const index = planets.indexOf(planet_name);
    console.log(index);
    let temp = [...questions];
    temp[index].answered = true;
    temp[index].counting_down = false;
    if (answer) {
      temp[index].correct == true;
    }
    temp[index].handlePause();
    temp[index].timer = 10000 - temp[index].elapsedTime;
    if (temp[index].correct) {
      set_total_score((score) => score + questions[index].timer);
    }
    console.log(temp);
    set_questions(temp);
  };

  return {
    nearest_planet,
    show_question,
    total_score,
    questions,
    quiz_active,
    start_question,
    answer_question,
  };
};

function Question(planet, question, answers) {
  this.planet = planet;
  this.question = question;
  this.answers = answers; // array of string
  this.timer = 10000; //10000 miliseconds = 10 seconds
  this.correct = false; //ignore
  this.answered = false;

  const { elapsedTime, isRunning, handleStart, handlePause, handleReset } = useTimer();
  this.elapsedTime = elapsedTime;
  this.isRunning = isRunning;
  this.handleStart = handleStart;
  this.handlePause = handlePause;
  this.handleReset = handleReset;
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
