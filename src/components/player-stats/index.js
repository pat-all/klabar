import React from "react";

//styles import
import "./index.css";

//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PlayerStats = ({name, score, bolts, id, remove, playersCount, editMode, toggleEditMode, changeName, gameNotesCount}) => (
    <div className="player-stats">
    <div className="name-label">Name</div>
    {!editMode
        ? <div className="player-name">{name === "Player" ? `${name}-${id + 1}` : name}</div>
        : <input className="player-name" type="text" value={name} onChange={(event)=>changeName(id, event.target.value)}></input>}
    <div className="score-label">Score</div>
    <div className="player-score">{score}</div>
    <div className="bolt-label">Bolt</div>
    <div className="bolt-counter">{bolts}</div>
    {!editMode
        ? <button className="edit-player-btn" onClick={() => toggleEditMode(id)}><FontAwesomeIcon icon="user-edit" size="2x" /></button>
        : <button className="edit-player-btn" disabled={name.length === 0} onClick={() => toggleEditMode(id)}><FontAwesomeIcon icon="user-check" size="2x" /></button>}

    <button disabled={playersCount <= 2 || gameNotesCount > 0} className="remove-player-btn" onClick={() => remove(id)}><FontAwesomeIcon icon="user-times" size="2x" /></button>


</div>)

export default PlayerStats;