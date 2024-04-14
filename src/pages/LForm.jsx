import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useGame } from '../hooks/useGame';
import ldata from "../data/leaderboard_data.json";

const LForm = () => {
  const {name, setName} = useGame();
  const {tempname, settempName} = useGame();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, for now just log the name
    if (!name){
        setName(tempname)
        console.log('Submitted Name:', name);
    }

    const myldata = ldata;
    writeData(myldata, name, score);
    // You can add further logic here, like sending the name to an API, etc.
  };

  const writeData = (e) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
          // If the score is higher, update the score
          if (score > arr[i].score) {
            arr[i].score = score;
            // Write the updated array to a file
            writeToFile(arr);
            return "Score updated successfully.";
          } else {
            return "Score is not higher than the existing score.";
          }
        }
      }
      // If the name is not found, add a new object with the name and score
      arr.push({ name, score });
      // Write the updated array to a file
      writeToFile(arr);
  }

  const writeToFile = (arr) => {
    // Convert the array to JSON
    const data = JSON.stringify(arr, null, 2);
    // Write the JSON data to a file called "scores.json"
    fs.writeFile('scores.json', data, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('File updated successfully');
    });
  }

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