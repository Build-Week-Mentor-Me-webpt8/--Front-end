import React from "react"
import AnswerList from "../Answers/AnswerList"

import AnswerForm from '../Answers/AnswerForm';
// import styled from 'styled-components'



const Question = props => {
  return (
    <div className="question-bar" key={props.id}>
      {/* <img
                className="entrepreneur-avatar"
                src={props.img}
                alt="e-avatar"
                /> */}

      


      <h1>{props.title}</h1>
      <h2>Q: {props.question}</h2>
      <p>Business: {props.business}</p>

      <h3>{props.e_username}</h3>
      
      {/*
            //Hutch the variable name you will need for the Answer List component is questionid={props.questionid} */}
      <AnswerList question_id={props.questionid} />
      <AnswerForm question_id={props.questionid} />

    </div>
  )
}
export default Question