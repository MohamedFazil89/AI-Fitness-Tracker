import React, { useState } from 'react';
import DashboardNav from './DashBoardNav';
import SettingNav from './SettingNav';
import GoalSet from "./assets/Group 5.png";
import questions from './QuestionList';
import "./Styles/Questions.css";

function Dashboard() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  const handleOptionClick = (option, index) => {
    setResponses({
      ...responses,
      [questions[currentQuestionIndex].id]: option,
    });
    setSelectedOptionIndex(index); // Track the index of the selected option
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionIndex(null); 
    } else {
      console.log("All responses:", responses);
    }
  };

  return (
    <div className="dashboard-container">
      <DashboardNav Dcolor={"orange"} />
      <div className="Report-container">
        <img src={GoalSet} alt="GoalSet" className="SetGoal" />

        <section className="Question-ask-container">
          <h3 className='Question-text'>
            <span>{currentQuestionIndex + 1}</span> <br />
            {questions[currentQuestionIndex].question}
          </h3>
          <ul className='Options-container'>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <li
                key={option}
                style={{
                  backgroundColor: selectedOptionIndex === index ? 'orange' : 'transparent',
                }}
                onClick={() => handleOptionClick(option, index)}
                className='Options'
              >
                {option}
              </li>
            ))}
          </ul>
          <button onClick={handleNextClick} className='Next-Button'>
            {currentQuestionIndex + 1 === questions.length ? "Submit" : "Next"}
          </button>
        </section>
      </div>
      <SettingNav />
    </div>
  );
}

export default Dashboard;
