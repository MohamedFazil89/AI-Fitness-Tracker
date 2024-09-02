import React from "react";
import "./Styles/Report.css";
import GoalSet from "./assets/Group 5.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";

import ActivityBar from "./assets/Chart.png"
import ProgressBar from "./assets/Progress.png"
import { useNavigate } from 'react-router-dom';


export default function Report(props) {
  const navigate = useNavigate();
  return (
    <>
    <div className="Report-container">
      <h2 className="Greet-text">
        Welcome <span>Amdan</span>
      </h2>
      <p className="Quote-text">
        Ready to take on new challenges and crush your fitness goals
      </p>
     {/* <Goalset /> */}
     <img
        src={GoalSet}
        alt="GoalSet"
        onClick={() => navigate("/Questions")
        }
        className="SetGoal"
      />
      <p className="Facts-text">
        “{props.Fact}”{" "}
        <span className="Reload" onClick={props.Reload}>
          <FontAwesomeIcon icon={faRotate} />
        </span>
      </p>
      <section className="Graph-container">
        <img src={ActivityBar} alt="Chart" />
        <img src={ProgressBar} alt="ProgressBar" />
      </section>
    </div>
    </>
  );
}
