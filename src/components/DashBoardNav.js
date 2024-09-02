import React from "react";

import "./Styles/DashBoardNav.css";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faSearch, faRankingStar, faMessage, faList, faSliders } from "@fortawesome/free-solid-svg-icons";


function DashboardNav(props) {
  const navigate = useNavigate();
  return (
    <div className="dashboardNav-container">
      <h1 className="Nav-Title">Fitness</h1>
      <nav className="Nav-elements">
        <li
          style={{ color: props.Dcolor }}
          onClick={() => navigate("/Dashboard")}
        >
          <span style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faHouse} />
          </span>
          DashBoard
        </li>
        <li
          style={{ color: props.Ecolor }}
          onClick={() => navigate("/Explore")}
        >
          <span style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faSearch} />
          </span>
          Explore
        </li>
        <li style={{ color: props.Ccolor }} onClick={() => navigate("/LeadBoard")}>
          <span style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faRankingStar} />
          </span>
          Lead Board
        </li>
        <li style={{ color: props.Ccolor }} onClick={() => navigate("/Chat")}>
          <span style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faMessage} />
          </span>
          Chat
        </li>
        <li style={{ color: props.Pcolor }} onClick={() => navigate("/Plans")}>
          <span style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faList} />
          </span>
          Plans
        </li>
        <li
          style={{ color: props.Scolor }}
          onClick={() => navigate("/Settings")}
        >
          <span style={{ marginRight: 10 }}>
            <FontAwesomeIcon icon={faSliders} />
          </span>
          Settings
        </li>
      </nav>
      <button className="Create-challenegeBtn">Create Challenge</button>
    </div>
  );
}

export default DashboardNav;
