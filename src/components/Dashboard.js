import React, { useState } from 'react';
import DashboardNav from './DashBoardNav';
import SettingNav from './SettingNav';
import "./Styles/DashBoard.css";
import Report from './Report';
import RandomFacts from "../RandomFact.js";

function Dashboard() {
  const [randomFact, setRandomFact] = useState(getRandomFact());

  function getRandomFact() {
    const randomNum = Math.floor(Math.random() * RandomFacts.length);
    return RandomFacts[randomNum].fact;
  }

  const refreshFact = () => {
    setRandomFact(getRandomFact());
  };

  return (
    <div className="dashboard-container">
      <DashboardNav Dcolor={"orange"} />
      <Report Fact={randomFact} Reload={refreshFact} />
      <SettingNav />
    </div>
  );
}

export default Dashboard;
