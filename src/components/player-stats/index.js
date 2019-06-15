import React from "react";

//styles import
import "./index.css";

//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayerStats = ({name, score, bolts, id, remove, num}) => {
    return (
        <div className="player-stats">
            <div className="name-label">Name</div>
            <div className="player-name">{ name === "Player" ? `${name}-${id + 1}` : name }</div>
            <div className="score-label" >Score</div>
            <div className="player-score">{score}</div>
            <div className="bolt-label">Bolt</div>
            <div className="bolt-counter">{bolts}</div>
            <button className="edit-player-btn"><FontAwesomeIcon icon="edit" size="2x"/></button>
            <button disabled={num <= 2} className="remove-player-btn" onClick={()=>remove(id)}><FontAwesomeIcon icon="user-minus" size="2x"/></button>
            
            
        </div>
    );
}

export default PlayerStats;