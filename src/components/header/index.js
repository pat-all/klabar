import React from 'react';

//components import
import PlayerStats from "../playerStats";

//styles import
import "./index.css";

//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainHeader = () => {
    return (
        <div className="main-header">
            <PlayerStats/>
            <PlayerStats/>
            <div className="right-btns">
                <button className="right-side-btn"><FontAwesomeIcon icon="user-plus" size="2x"/></button>
                <button className="right-side-btn">btn 2</button>
                <button className="right-side-btn">btn 3</button>
            </div>
            
        </div>
    )
}

export default MainHeader;