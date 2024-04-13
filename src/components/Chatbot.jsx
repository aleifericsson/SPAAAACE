import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

export default function ChatBot(){
    const [userInput, setUserInput] = useState('')

    const handleChange = () =>{
        
    }

    return (
        <div className='chatbot-card'>
            <div>
            </div>

            <div className='human-input'>
                <InputGroup className="mb-3">

                    <Form.Control
                        className="mb-2"
                        type="text" 
                        placeholder="Ask me something"
                        value={userInput}
                        onChange={handleChange}
                    />

                </InputGroup>
            </div>

        </div>
    )
}
