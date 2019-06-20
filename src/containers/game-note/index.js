import React from "react";
import { connect } from 'react-redux';

//import componennts
import PlayerNote from "../../components/player-note";

//import styles
import "./index.css";

const GameNote = ({noteId, players}) => {
    return (
        <div className="game-note">
            {players.map((player, index)=> (
                <PlayerNote key={index} entity={player.playerNotes[noteId]}/>
            ))}
            <div className="right-btns">
                <button className="right-side-btn">btn 1</button>
                <button className="right-side-btn">btn 2</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({players: state.players});

const mapDispatchToProps = dispatch => ({
    
})

export default connect (mapStateToProps, mapDispatchToProps)(GameNote);
