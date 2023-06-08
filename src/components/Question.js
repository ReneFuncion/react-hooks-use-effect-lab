import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    // Start timer when the component is rendered and when theres a new question.
    const timerId = setTimeout(() => {
      // If time has run out, user has answered incorrectly and reset the timer.
      if ((timeRemaining = 1)) {
        onAnswered(false);
        setTimeRemaining(10);
      } else {
        // Otherwise, just decrement the remaining time.
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);

    // Return cleanup function.
    return () => clearTimeout(timerId);
  }, [question, timeRemaining, onAnswered]);

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
