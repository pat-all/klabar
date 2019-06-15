import React from "react";

//styles import
import "./index.css";

//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayerStats = () => {
    return (
        <div className="player-stats">
            <div className="name-label">Name</div>
            <div className="player-name">Player One</div>
            <div className="score-label" >Score</div>
            <div className="player-score">100</div>
            <div className="bolt-label">Bolt</div>
            <div className="bolt-counter">0</div>
            <button className="edit-btn"><FontAwesomeIcon icon="edit" size="2x"/></button>
        </div>
    );
}

export default PlayerStats;