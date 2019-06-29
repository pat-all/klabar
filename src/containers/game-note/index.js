import React from "react";
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//import styles
import "./index.css";

//import componennts
import PlayerNote from "../../components/player-note";

//import actions
import { removeGameNote, removePlayerNote, setPlayerNoteScore, setPlayerNoteTrump, setGameNoteStake, setGameNoteRestCards, setPlayerNoteFine, calculatePlayerScore, playerCheck, gameNoteReady, recordPlayersScore} from "../../actions";

const GameNote = ({noteId, players, removeGameNote, removePlayerNote, setScore, setTrump, setFine, gameNote, setStake, setRestCards, calculate, checkPl, noteReady, gameOptions, record
}) => {
    const {stake, restCards} = gameNote;
    const stakes = [162, 182, 202, 212, 222, 232, 252, 262, 272, 282, 302, 312, 322, 332, 352, 362, 382, 402, 412, 422, 432, 442, 452, 462, 472, 482];
    /* for(let i = 162; i < 482; i + 10){
        if (i < 202){ 
            stakes.push(i + 10);
        } else stakes.push(i);
    }*/
    let isCheckable = false;
    for(let i = 0; i < players.length; i++){
        if(players[i].playerNotes[noteId].trump) isCheckable = true;
    }
    return (
        <div className="game-note">
            <div className='players-notes'>
                {players.map((player, playerId)=> (
                    <PlayerNote key={playerId}
                        entity={player.playerNotes[noteId]} 
                        setScore={setScore} playerId={playerId} 
                        noteId={noteId}
                        setTrump={setTrump}
                        setFine={setFine}
                        calculate={calculate}
                        stake={stake}
                        restCards={restCards}
                        checkPl={checkPl}
                        gameOptions={gameOptions}
                    />
                ))}
                <div className="right-btns">
                    <button className="right-side-btn" onClick={()=>{removeGameNote(noteId); removePlayerNote(noteId)}}><FontAwesomeIcon icon="trash-alt" size="2x"/></button>
                    <button className="right-side-btn" onClick={()=>{noteReady(noteId); record(noteId, gameOptions)}} disabled={!isCheckable}><FontAwesomeIcon icon="check-square" size="2x"/></button>
                </div>
            </div>
            <div className='game-note-bottom-panel'> 
                <label htmlFor={'stake' + noteId}> Stake </label>
                <select defaultValue={stake} onChange={event=>{setStake(noteId, event.target.value);checkPl(noteId)}} name={'stake' + noteId}>
                    {stakes.map(stake=>
                        <option key={stake}>{stake}</option>
                    )}
                </select>
                <label>Rest Cards</label>
                <input type="number" defaultValue={restCards} onChange={event=>{setRestCards(noteId, event.target.value); checkPl(noteId)}}></input>
            </div> 
            
        </div>
    );
}

const mapStateToProps = state => ({players: state.players, gameOptions: state.gameOptions});

const mapDispatchToProps = dispatch => ({
    removeGameNote: id => dispatch(removeGameNote(id)),
    removePlayerNote: id => dispatch(removePlayerNote(id)),
    setScore: (score, playerId, noteId) => dispatch(setPlayerNoteScore(score, playerId, noteId)),
    setTrump: (playerId, noteId) => dispatch(setPlayerNoteTrump(playerId, noteId)),
    setFine: (playerId, noteId) => dispatch(setPlayerNoteFine(playerId, noteId)),
    setStake: (noteId, stake) => dispatch(setGameNoteStake(noteId, stake)),
    setRestCards: (noteId, restCards) => dispatch(setGameNoteRestCards(noteId, restCards)),
    calculate: (playerId, noteId, stake, restCards) => dispatch(calculatePlayerScore(playerId, noteId, stake, restCards)),
    checkPl: noteId => dispatch(playerCheck(noteId)),
    noteReady: noteId => dispatch(gameNoteReady(noteId)),
    record: (noteId, gameOptions) => dispatch(recordPlayersScore(noteId, gameOptions)),
})

export default connect (mapStateToProps, mapDispatchToProps)(GameNote);
