import React from "react";

// import styles
import "./index.css";

//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayerNote = ({entity, setScore, playerId, noteId, setTrump}) => {
    return(
        <div className="player-note">
            <div className="stats">
                <div>Score</div>
                <div> 
                    <input type="number" value={entity.score} onChange={event=> setScore(event.target.value, playerId, noteId)}></input>
                </div>
            </div>
            <button><FontAwesomeIcon icon="edit" size="2x"/></button>
            <button onClick={()=>setTrump(playerId, noteId)}>trump</button>  {/* козырь */}
            <button>culc</button>   {/* вычислить */}  
            <button>cmbn</button>   {/* combos */}     
            <button>fine</button>   {/* штраф */}
        </div>
    )
}

export default PlayerNote;