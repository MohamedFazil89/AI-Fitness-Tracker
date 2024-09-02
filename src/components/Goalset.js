import React from 'react'
import "./Styles/Report.css"
import GoalSet from "./assets/Group 5.png";





export default function Goalset() {
  return (
    <div>
       <img
        src={GoalSet}
        alt="GoalSet"
        onClick={() => console.log("Click!")}
        className="SetGoal"
      />
    </div>
  )
}
