import React from "react";

// import styles
import "./index.css";

//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayerNote = ({entity, setScore, playerId, noteId, setTrump}) => {
    const {score} = entity;
    return(
        <div className="player-note">
            <div className="stats">
                <div>Score</div>
                <div> 
                    <input type="number" defaultValue={score} onChange={event=> setScore(event.target.value, playerId, noteId)}></input>
                </div>
            </div>
            <button><FontAwesomeIcon icon="edit" size="2x"/></button>
            <button onClick={()=>setTrump(playerId, noteId)}><FontAwesomeIcon icon="crown" size="2x"/></button>  {/* козырь */}
            <button><FontAwesomeIcon icon="calculator" size="2x"/></button>   {/* вычислить */}  
            <button><FontAwesomeIcon icon="clone" size="2x"/></button>   {/* combos */}     
            <button><FontAwesomeIcon icon="thumbs-down" size="2x"/></button>   {/* штраф */}
        </div>
    )
}

export default PlayerNote;