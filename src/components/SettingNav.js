import React from 'react'
import "./Styles/SettingNav.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircle, faGear} from "@fortawesome/free-solid-svg-icons";
import { faXbox } from '@fortawesome/free-brands-svg-icons';
import Abs from "./assets/abs.jpeg";




export default function SettingNav() {
  return (
    <div className='Nav-Setting-container'>
            <li>
              <img src={Abs} alt='Abs' className='Avatar' />
            </li>
            <li><FontAwesomeIcon icon={faBell} size='lg' className='icons' /></li>
            <li><FontAwesomeIcon icon={faXbox}  size='lg' className='icons'/></li>
            <li><FontAwesomeIcon icon={faGear} size='lg' className='icons'/></li>
      
    </div>
  )
}
