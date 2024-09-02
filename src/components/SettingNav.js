import React from 'react'
import "./Styles/SettingNav.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircle, faGear} from "@fortawesome/free-solid-svg-icons";
import { faXbox } from '@fortawesome/free-brands-svg-icons';




export default function SettingNav() {
  return (
    <div className='Nav-Setting-container'>
            <li><FontAwesomeIcon icon={faCircle} size='lg'  /></li>
            <li><FontAwesomeIcon icon={faBell} size='lg' /></li>
            <li><FontAwesomeIcon icon={faXbox}  size='lg'/></li>
            <li><FontAwesomeIcon icon={faGear} size='lg'/></li>
      
    </div>
  )
}
