import React from "react";
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//import styles
import "./index.css";

//import componennts
import PlayerNote from "../../components/player-note";

//import actions
import { removeGameNote, removePlayerNote, setPlayerNoteScore, setPlayerNoteTrump, setGameNoteStake, setGameNoteRestCards,} from "../../actions";

const GameNote = ({noteId, players, removeGameNote, removePlayerNote, setScore, setTrump, gameNote, setStake, setRestCards}) => {
    const {stake, restCards} = gameNote;
    const stakes = [162, 182, 202, 212, 222, 232, 252, 262, 272, 282, 302, 312, 322, 332, 352, 362, 382, 402, 412, 422, 432, 442, 452, 462, 472, 482];
    /* for(let i = 162; i < 482; i + 10){
        if (i < 202){ 
            stakes.push(i + 10);
        } else stakes.push(i);
    }*/
    return (
        <div className="game-note">
            <div className='players-notes'>
                {players.map((player, playerId)=> (
                    <PlayerNote key={playerId}
                        entity={player.playerNotes[noteId]} 
                        setScore={setScore} playerId={playerId} 
                        noteId={noteId}
                        setTrump={setTrump}
                    />
                ))}
                <div className="right-btns">
                    <button className="right-side-btn" onClick={()=>{removeGameNote(noteId); removePlayerNote(noteId)}}>Del</button>
                    <button className="right-side-btn"><FontAwesomeIcon icon="check-square" size="2x"/></button>
                </div>
            </div>
            <div className='game-note-bottom-panel'> 
                <label htmlFor={'stake' + noteId}> Stake </label>
                <select defaultValue={stake} onChange={event=>setStake(noteId, event.target.value)} name={'stake' + noteId}>
                    {stakes.map(stake=>
                        <option key={stake}>{stake}</option>
                    )}
                </select>
                <label>Rest Cards</label>
                <input type="number" defaultValue={restCards} onChange={event=>setRestCards(noteId, event.target.value)}></input>
            </div> 
            
        </div>
    );
}

const mapStateToProps = state => ({players: state.players});

const mapDispatchToProps = dispatch => ({
    removeGameNote: id => dispatch(removeGameNote(id)),
    removePlayerNote: id => dispatch(removePlayerNote(id)),
    setScore: (score, playerId, noteId) => dispatch(setPlayerNoteScore(score, playerId, noteId)),
    setTrump: (playerId, noteId) => dispatch(setPlayerNoteTrump(playerId, noteId)),
    setStake: (noteId, stake) => dispatch(setGameNoteStake(noteId, stake)),
    setRestCards: (noteId, restCards) => dispatch(setGameNoteRestCards(noteId, restCards)),
})

export default connect (mapStateToProps, mapDispatchToProps)(GameNote);
