import React, {useState} from "react";
import Title from "./Title/Title";
import Answers from "./Answers/Answers";
import styles from "./Question.module.css"

function Question(props) {
  const numberOfQuestion =props.numberOfQuestion
  const setNumberOfQuestion = props.setNumberOfQuestion
  const numberOfCorrectAnswers = props.numberOfCorrectAnswers
  const setNumberOfCorrectAnswers = props.setNumberOfCorrectAnswers
  if (!props.question || props.question.length === 0) {
    return <div>Loading...</div>;
  }
  return (

    <div className={`${numberOfQuestion == props.question.id || numberOfQuestion == props.limit+1 ? "" : styles.displayNone}`}>
      <Title title={props.question} />
      <Answers answers={props.question} numberOfCorrectAnswers={numberOfCorrectAnswers} setNumberOfCorrectAnswers={setNumberOfCorrectAnswers} setNumberOfQuestion={setNumberOfQuestion}/>
    </div>
    
  );
}

export default Question;
