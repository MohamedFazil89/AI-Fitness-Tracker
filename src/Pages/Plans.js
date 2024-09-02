import React, { useState } from 'react';
import DashboardNav from '../components/DashBoardNav';
import SettingNav from '../components/SettingNav';
import exercisePlans from "../components/ExeriscsList";
import "../components/Styles/Plans.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";


function Plans() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState('beginner'); // Set default level

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const getExerciseDetails = () => {
    if (selectedDay) {
      const dayExercises = exercisePlans.find(plan => plan[selectedLevel])[selectedLevel][selectedDay];
      return Array.isArray(dayExercises) ? dayExercises : [dayExercises];
    }
    return null;
  };

  return (
    <div className="dashboard-container">
      <DashboardNav Dcolor={"orange"} />
      <div className="Report-container">
        <p className='MyPlan-text'>My Plans</p>
        <nav className='Day-List'>
          {Object.keys(exercisePlans[0][selectedLevel]).map(day => (
            <li key={day} onClick={() => handleDayClick(day)}>
              {day}
            </li>
          ))}
        </nav>
        {selectedDay && (
          <div className='Exercise-Details'>
            <h3>{selectedDay} </h3>
            <span onClick={() => setSelectedDay(null)}><FontAwesomeIcon icon={faX} /></span>
            <ul>
              {getExerciseDetails().map((exercise, index) => (
                <li key={index} className='List-Exercise'>{exercise}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <SettingNav />
    </div>
  );
}

export default Plans;
