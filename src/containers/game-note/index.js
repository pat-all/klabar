import React from "react";
import { connect } from 'react-redux';

//import styles
import "./index.css";

//import componennts
import PlayerNote from "../../components/player-note";

//import actions
import { removeGameNote, removePlayerNote, setPlayerNoteScore } from "../../actions";

const GameNote = ({noteId, players, removeGameNote, removePlayerNote, setScore}) => {
    return (
        <div className="game-note">
            {players.map((player, playerId)=> (
                <PlayerNote key={playerId} entity={player.playerNotes[noteId]} setScore={setScore} playerId={playerId} noteId={noteId}/>
            ))}
            <div className="right-btns">
                <button className="right-side-btn">btn 1</button>
                <button className="right-side-btn" onClick={()=>{removeGameNote(noteId); removePlayerNote(noteId)}}>Del</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({players: state.players});

const mapDispatchToProps = dispatch => ({
    removeGameNote: id => dispatch(removeGameNote(id)),
    removePlayerNote: id => dispatch(removePlayerNote(id)),
    setScore: (score, playerId, noteId) => dispatch(setPlayerNoteScore(score, playerId, noteId)),
})

export default connect (mapStateToProps, mapDispatchToProps)(GameNote);
