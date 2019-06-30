import React from "react";

// import styles
import "./index.css";
import { bgColors } from '../../colorClasses';

//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayerNote = ({entity, setScore, playerId, noteId, setTrump, setFine, calculate, stake, restCards, gameOptions, isReady}) => {
    const {score, trump, bolt, fine,} = entity;
    const crownBtnClassName = bolt ?  bgColors.danger : trump ? bgColors.warning : bgColors.primary;
    const thumpBtnClassName = fine ? bgColors.danger : bgColors.white;
    return(
        <div className="player-note">
            <div className="stats">
                <div>Score</div>
                <div> 
                    <input type="number" defaultValue={score} onChange={event=> setScore(event.target.value, playerId, noteId)}></input>
                </div>
            </div>
            {!isReady && 
                <React.Fragment>
                    {/*<button><FontAwesomeIcon icon="edit" size="2x"/></button>*/}
                    <button className={crownBtnClassName} onClick={()=>setTrump(playerId, noteId)}><FontAwesomeIcon icon="crown" size="2x"/></button>  {/* козырь */}
                    <button onClick={() => calculate(playerId, noteId, stake, restCards)}><FontAwesomeIcon icon="calculator" size="2x"/></button>   {/* вычислить */}  
                    <button><FontAwesomeIcon icon="clone" size="2x"/></button>   {/* combos */}     
                    <button className={thumpBtnClassName} onClick={()=>setFine(playerId, noteId)}><FontAwesomeIcon icon="thumbs-down" size="2x"/></button>   {/* штраф */}
                </React.Fragment>
            }
           
        </div>
    )
}

export default PlayerNote;