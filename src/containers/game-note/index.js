import React from "react";
import { connect } from 'react-redux';

//import styles
import "./index.css";

//import componennts
import PlayerNote from "../../components/player-note";

//import actions
import { removeGameNote, removePlayerNote, setPlayerNoteScore, setPlayerNoteTrump } from "../../actions";

const GameNote = ({noteId, players, removeGameNote, removePlayerNote, setScore, setTrump}) => {
    return (
        <div className="game-note">
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
                <button className="right-side-btn">OK</button>
            </div>
            <div className='game-note-bottom-panel'>
                Game note bottom panel
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
})

export default connect (mapStateToProps, mapDispatchToProps)(GameNote);
