import React, { useState } from "react";
import "./App.css";
import quizData from "./data/quizData";

import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [points, setPoints] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedOption === null) {
      alert("please choose an option");
      return;
    }

    // Check if the selected option matches the correct answer for the current question
    if (selectedOption === quizData[index].correctAnswer) {
      // Increase points if the answer is correct
      setPoints((curPoints) => curPoints + 1);
    } else {
      alert(`The correct answer was: ${quizData[index].correctAnswer}`);
    }

    // Move to the next question or end the quiz
    setIndex((curIndex) => curIndex + 1);
    setSelectedOption(null); // Reset the selected option for the next question
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Meter Quiz</h1>
      </div>

      {index < quizData.length ? (
        <div className="quiz-container">
          <div>
            <h2 className="question">{quizData[index].question}</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="options">
              {quizData[index].options.map((option) => (
                <label
                  key={option}
                  className={`option-label ${
                    option === selectedOption ? "selected-option" : ""
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  <input
                    type="radio"
                    name="option"
                    value={option}
                    checked={option === selectedOption}
                  />
                  <span className="option-label-custom">{option}</span>
                </label>
              ))}
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
          <div className="points">
            <h3>Points: {points}</h3>
          </div>
        </div>
      ) : (
        <div className="quiz-complete-message">
          <h3>Quiz Complete</h3>
          <p className="score">
            You scored {points} out of {quizData.length} points.
          </p>
        </div>
      )}
      <div>Quiz Created By Tom Arad</div>
      <div>
        Backgrund image by{" "}
        <a href="https://unsplash.com/@karsten_wuerth?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Karsten Würth
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/windmill-on-grass-field-during-golden-hour-0w-uTa0Xz7w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </div>
    </div>
  );
}

export default App;
