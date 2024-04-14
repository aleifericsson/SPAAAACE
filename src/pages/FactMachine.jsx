import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import "../css/Chatbot.css"

export default function FactMachine(){

    return (
        <div className='bot-window'>
            <iframe className='bot' allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/b10a1398-827b-4626-ba50-087c741be3e5"></iframe>
        </div>
    )
}

function toggleMute() {
    const myAudio = document.querySelector('.bot');
    myAudio.muted = !myAudio.muted;
 }