import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useGame } from '../hooks/useGame';
import ldata from "../data/leaderboard_data.json";
import { saveAs } from 'file-saver';


const LForm = () => {
  const {name, setName, total_score, saveScore} = useGame();
  const [tempname, settempName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, for now just log the name
    if (!name && tempname !== ""){
        setName(tempname)
        console.log('Submitted Name:', tempname);    
        const myldata = ldata;
        saveScore(tempname);
    }
    // You can add further logic here, like sending the name to an API, etc.
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