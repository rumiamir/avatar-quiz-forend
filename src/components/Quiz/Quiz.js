import styles from "./Question/Question.module.css"
import Question from './Question/Question';
import React, { useState,useEffect } from 'react';

function Quiz() {

  const [quiz, setQuiz] = useState([])
  const [numberOfQuestion, setNumberOfQuestion] = useState(1)
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0)
  useEffect(() => {

    const url = "http://localhost:8080/question/getQuiz"

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setQuiz(data)
    })
    .catch(error => {
      console.log("Got an error")
    })
  },[])
  return (<>

        <div>
          <h1 className={`${numberOfQuestion == quiz.length+1 ? "" : styles.displayNone}`}>{`${numberOfCorrectAnswers}/${quiz.length}`}</h1>
          {quiz.map((question) => (
            <Question question={question} limit={quiz.length} numberOfQuestion={numberOfQuestion} numberOfCorrectAnswers={numberOfCorrectAnswers} setNumberOfCorrectAnswers={setNumberOfCorrectAnswers} setNumberOfQuestion={setNumberOfQuestion}/>
          ))}
        </div>

    </>
  );
}

export default Quiz;
