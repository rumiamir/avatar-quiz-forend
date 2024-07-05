import React, { useState, useEffect } from "react";
import styles from "./Answers.module.css";

function Answers(props) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [num, setNum] = useState(null);
  const [selectedAnswerClass, setSelectedAnswerClass] = useState("")
  const [finalAnswerClass, setFinalAnswerClass] = useState("")
  const [isFormDisabled, setIsFormDisabled] = useState(false)
  const setNumberOfQuestion = props.setNumberOfQuestion
  const numberOfCorrectAnswers = props.numberOfCorrectAnswers
  const setNumberOfCorrectAnswers = props.setNumberOfCorrectAnswers

  useEffect(() => {
    setNum(Math.floor(Math.random() * 4 + 1));
  }, []);

  useEffect (() => {
    if (finalAnswerClass == `ranswer${props.answers.id}`) {
      setNumberOfCorrectAnswers(numberOfCorrectAnswers+1)
    }
  },[finalAnswerClass])

  if (!props.answers) {
    return <div>Loading...</div>;
  }



  const delay = () => new Promise(resolve => setTimeout(resolve, 1000));


  const handleChoice = (event) => {
    setSelectedAnswer(event.target.value);
    setSelectedAnswerClass(event.target.classList[0])
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (selectedAnswer != null) {
      setFinalAnswerClass(selectedAnswerClass)
      setIsFormDisabled(true)
      await delay()
      setNumberOfQuestion(props.answers.id+1)
    }

  } 

  const renderAnswers = () => {
    switch (num) {
      case 1:
        return (
          <>
            <input
              type="radio"
              id={props.answers.ranswer}
              value={true}
              name={props.answers.id}
              onChange={handleChoice}
              className={`ranswer${props.answers.id} ${styles.displayNone}`}
              disabled={isFormDisabled}
            />
            <label htmlFor={props.answers.ranswer} className={`ranswer${props.answers.id} ${selectedAnswerClass == `ranswer${props.answers.id}` ? styles.selected : ""} ${finalAnswerClass !== "" ? styles.green : ""}`}
            >
              {props.answers.ranswer}
            </label>
            <br />
            <input
              type="radio"
              id={props.answers.wanswer1}
              value={false}
              name={props.answers.id}
              onChange={handleChoice}
              className={`wanswer1${props.answers.id}  ${styles.displayNone}`}
              disabled={isFormDisabled}
            />
            <label htmlFor={props.answers.wanswer1} className={`wanswer1${props.answers.id} ${selectedAnswerClass == `wanswer1${props.answers.id}` ? styles.selected : ""} ${finalAnswerClass == `wanswer1${props.answers.id}` ? styles.red :""}`}>
              {props.answers.wanswer1}
            </label>
            <br />
            <input
              type="radio"
              id={props.answers.wanswer2}
              value={false}
              name={props.answers.id}
              onChange={handleChoice}
              className={`wanswer2${props.answers.id} ${styles.displayNone}`}
              disabled={isFormDisabled}
            />
            <label htmlFor={props.answers.wanswer2} className={`wanswer2${props.answers.id} ${selectedAnswerClass == `wanswer2${props.answers.id}` ? styles.selected : ""} ${finalAnswerClass == `wanswer2${props.answers.id}` ? styles.red :""}`}>
              {props.answers.wanswer2}
            </label>
            <br />
            <input
              type="radio"
              id={props.answers.wanswer3}
              value={false}
              name={props.answers.id}
              onChange={handleChoice}
              className={`wanswer3${props.answers.id} ${styles.displayNone}`}
              disabled={isFormDisabled}
            />
            <label htmlFor={props.answers.wanswer3} className={`wanswer3${props.answers.id} ${selectedAnswerClass == `wanswer3${props.answers.id}` ? styles.selected : ""} ${finalAnswerClass == `wanswer3${props.answers.id}` ? styles.red :""}`}>
              {props.answers.wanswer3}
            </label>
          </>
        );
      case 2:
        return (
          <>
            <input
              type="radio"
              id={props.answers.wanswer2}
              value={false}
              name={props.answers.id}
              onChange={handleChoice}
              className={`wanswer2${props.answers.id} ${styles.displayNone}`}
              disabled={isFormDisabled}
            />
            <label htmlFor={props.answers.wanswer2} className={`wanswer2${props.answers.id} ${selectedAnswerClass == `wanswer2${props.answers.id}` ? styles.selected : ""} ${finalAnswerClass == `wanswer2${props.answers.id}` ? styles.red :""}`}>
              {props.answers.wanswer2}
            </label>
            <br />
            <input
              type="radio"
              id={props.answers.ranswer}
              value={true}
              name={props.answers.id}
              onChange={handleChoice}
              className={`ranswer${props.answers.id} ${styles.displayNone}`}
              disabled={isFormDisabled}
            />
            <label htmlFor={props.answers.ranswer} className={`ranswer${props.answers.id} ${selectedAnswerClass == `ranswer${props.answers.id}` ? styles.selected : ""} ${finalAnswerClass !== "" ? styles.green : ""}`}>
              {props.answers.ranswer}
            </label>
            <br />
            <input
              type="radio"
              id={props.answers.wanswer1}
              value={false}
              name={props.answers.id}
              onChange={handleChoice}
              className={`wanswer1${props.answers.id} ${styles.displayNone}`}
              disabled={isFormDisabled}
            />
            <label htmlFor={props.answers.wanswer1} className={`wanswer1${props.answers.id} ${selectedAnswerClass == `wanswer1${props.answers.id}` ? styles.selected : ""} ${finalAnswerClass == `wanswer1${props.answers.id}` ? styles.red :""}`}>
              {props.answers.wanswer1}
            </label>
            <br />
            <input
              type="radio"
              id={props.answers.wanswer3}
              value={false}
              name={props.answers.id}
              onChange={handleChoice}
              className={`wanswer3${props.answers.id} ${styles.displayNone}`}
              disabled={isFormDisabled}
            />
            <label htmlFor={props.answers.wanswer3} className={`wanswer3${props.answers.id} ${selectedAnswerClass == `wanswer3${props.answers.id}` ? styles.selected : ""} ${finalAnswerClass == `wanswer3${props.answers.id}` ? styles.red :""}`}>
              {props.answers.wanswer3}
            </label>
          </>
        );
      case 3:
        return (
          <>
            <input
              type="radio"
              id={props.answers.wanswer1}
              value={false}
              name={props.answers.id}
              onChange={handleChoice}
              className={`wanswer1${props.answers.id} ${styles.displayNone}`}
              disabled={isFormDisabled}
            />
            <label htmlFor={props.answers.wanswer1} className={`wanswer1${props.answers.id} ${selectedAnswerClass == `wanswer1${props.answers.id}` ? styles.selected : ""} ${finalAnswerClass == `wanswer1${props.answers.id}` ? styles.red :""}`}>
              {props.answers.wanswer1}
            </label>
            <br />
            <input
              type="radio"
              id={props.answers.wanswer3}
              value={false}
              name={props.answers.id}
              onChange={handleChoice}
              className={`wanswer3${props.answers.id} ${styles.displayNone}`}
              disabled={isFormDisabled}
            />
            <label htmlFor={props.answers.wanswer3} className={`wanswer3${props.answers.id} ${selectedAnswerClass == `wanswer3${props.answers.id}` ? styles.selected : ""} ${finalAnswerClass == `wanswer3${props.answers.id}` ? styles.red :""}`}>
              {props.answers.wanswer3}
            </label>
            <br />
            <input
              type="radio"
              id={props.answers.ranswer}
              value={true}
              name={props.answers.id}
              onChange={handleChoice}
              className={`ranswer${props.answers.id} ${styles.displayNone}`}
              disabled={isFormDisabled}
            />
            <label htmlFor={props.answers.ranswer} className={`ranswer${props.answers.id} ${selectedAnswerClass == `ranswer${props.answers.id}` ? styles.selected : ""} ${finalAnswerClass !== "" ? styles.green : ""}`}>
              {props.answers.ranswer}
            </label>
            <br />
            <input
              type="radio"
              id={props.answers.wanswer2}
              value={false}
              name={props.answers.id}
              onChange={handleChoice}
              className={`wanswer2${props.answers.id} ${styles.displayNone}`}
              disabled={isFormDisabled}
            />
            <label htmlFor={props.answers.wanswer2} className={`wanswer2${props.answers.id} ${selectedAnswerClass == `wanswer2${props.answers.id}` ? styles.selected : ""} ${finalAnswerClass == `wanswer2${props.answers.id}` ? styles.red :""}`}>
              {props.answers.wanswer2}
            </label>
          </>
        );
      case 4:
        return (
          <>
            <input
              type="radio"
              id={props.answers.wanswer1}
              value={false}
              name={props.answers.id}
              onChange={handleChoice}
              className={`wanswer1${props.answers.id} ${styles.displayNone}`}
              disabled={isFormDisabled}
            />
            <label htmlFor={props.answers.wanswer1} className={`wanswer1${props.answers.id} ${selectedAnswerClass == `wanswer1${props.answers.id}` ? styles.selected : ""} ${finalAnswerClass == `wanswer1${props.answers.id}` ? styles.red :""}`}>
              {props.answers.wanswer1}
            </label>
            <br />
            <input
              type="radio"
              id={props.answers.wanswer2}
              value={false}
              name={props.answers.id}
              onChange={handleChoice}
              className={`wanswer2${props.answers.id} ${styles.displayNone}`}
              disabled={isFormDisabled}
            />
            <label htmlFor={props.answers.wanswer2} className={`wanswer2${props.answers.id} ${selectedAnswerClass == `wanswer2${props.answers.id}` ? styles.selected : ""} ${finalAnswerClass == `wanswer2${props.answers.id}` ? styles.red :""}`}>
              {props.answers.wanswer2}
            </label>
            <br />
            <input
              type="radio"
              id={props.answers.wanswer3}
              value={false}
              name={props.answers.id}
              onChange={handleChoice}
              className={`wanswer3${props.answers.id} ${styles.displayNone}`}
              disabled={isFormDisabled}
            />
            <label htmlFor={props.answers.wanswer3} className={`wanswer3${props.answers.id} ${selectedAnswerClass == `wanswer3${props.answers.id}` ? styles.selected : ""} ${finalAnswerClass == `wanswer3${props.answers.id}` ? styles.red :""}`}>
              {props.answers.wanswer3}
            </label>
            <br />
            <input
              type="radio"
              id={props.answers.ranswer}
              value={true}
              name={props.answers.id}
              onChange={handleChoice}
              className={`ranswer${props.answers.id} ${styles.displayNone}`}
              disabled={isFormDisabled}
            />
            <label htmlFor={props.answers.ranswer} className={`ranswer${props.answers.id} ${selectedAnswerClass == `ranswer${props.answers.id}` ? styles.selected : ""} ${finalAnswerClass !== "" ? styles.green : ""}`}>
              {props.answers.ranswer}
            </label>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderAnswers()}
      <br/>
      <button type="submit" className={`${isFormDisabled ? styles.displayNone :""}`} >Submit</button>
    </form>
  );
}

export default Answers;
