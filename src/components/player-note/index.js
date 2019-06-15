import React from "react";

// import styles
import "./index.css";

//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayerNote = () => {
    return(
        <div className="player-note">
            <div className="stats">
                <div>Score</div>
                <div>some score</div>
            </div>
            <button><FontAwesomeIcon icon="edit" size="2x"/></button>
            <button>btn2</button>
            <button>btn3</button>
            <button>btn4</button>
            <button>btn5</button>
        </div>
    )
}

export default PlayerNote;