import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useGame } from '../hooks/useGame';
import ldata from "../data/leaderboard_data.json";
import { saveAs } from 'file-saver';

const LForm = () => {
  const {name, setName, total_score} = useGame();
  const [tempname, settempName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, for now just log the name
    //if (!name){
        setName(tempname)
        console.log('Submitted Name:', tempname);    
        const myldata = ldata;
        writeData(myldata, tempname, total_score);
    //}
    // You can add further logic here, like sending the name to an API, etc.
  };

  const writeData = (arr, name, score) => {
    
    console.log(arr[9].score)
    console.log(total_score)
        if (arr[9].score <= score){
            arr[9] = {name,score}
            arr.sort((a, b) => b.score - a.score);
            saveScores(arr);
            console.log("Scores updated and sorted successfully.");
        }
        else{
            console.log("Score is not higher than the existing score.");
        }
    }
    

    const saveScores = (scores) => {
        const jsonScores = JSON.stringify(scores, null, 2);
        const blob = new Blob([jsonScores], { type: "application/json" });
        saveAs(blob, "../data/leaderboard_data.json");
      };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName" className='name-in'>
        <Form.Label>Enter your name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={tempname}
          onChange={(e) => settempName(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LForm;