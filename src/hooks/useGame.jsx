import { useState } from 'react';
import json_questions from '../data/questions.json';
import useTimer from './useTimer';

const planets = [];

const useGame = () => {
    const [nearest_planet, set_nearest_planet] = useState("sun");
    const [show_question, set_show_question] = useState(false);
    const [total_score, set_total_score] = useState(0);
    const [questions, set_questions] = useState(generateQuestions());
    const [quiz_active, set_quiz_active] = useState(false);

    const start_question = () => {
        set_show_question(thing => !thing);
        const index = planets.indexOf(nearest_planet);
        let temp = [...questions];
        temp[index].counting_down = true;
        temp[index].handleReset();
        temp[index].handleStart();
        set_questions(temp);
    }

    const answer_question = (answer) => {
        const index = planets.indexOf(nearest_planet);
        let temp = [...questions];
        temp[index].user_answer = answer;
        temp[index].counting_down = false;
        if (temp[index].right_answer == answer){
            temp[index].correct == true;
        };
        temp[index].handlePause();
        temp[index].timer = 10000 - temp[index].elapsedTime;
        set_questions(temp);
    }

    return({nearest_planet, show_question, total_score, questions, quiz_active, start_question, answer_question})
}

function Question(planet, question, answers, right_answer){
    this.planet = planet;
    this.question = question;
    this.answers = answers; // array of string
    this.right_answer = right_answer; // number: 0 to 3
    this.timer = 10000; //10000 miliseconds = 10 seconds
    this.user_answer = -1; //set to 0 to 3 if answered, otherwise it is -1
    this.correct = false;

    const { elapsedTime, isRunning, handleStart, handlePause, handleReset } = useTimer(10000);
    this.elapsedTime = elapsedTime;
    this.isRunning = isRunning;
    this.handleStart = handleStart;
    this.handlePause = handlePause;
    this.handleReset = handleReset;
}

const generateQuestions = () =>{
    myquestions = [];
    json_questions.forEach(question => {
        planets.append(question["planet"]);
        myquestions.append(new Question(question["planet"],question["question"],question["answers"],question["right_answer"]));
    })
    console.log(myquestions);
    return myquestions;
}

export { useGame };