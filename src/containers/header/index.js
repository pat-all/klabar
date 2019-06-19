import React from 'react';
import { connect } from 'react-redux'

//components import
import PlayerStats from "../../components/player-stats";

//actions import
import {addPlayer, removePlayer, togglePlayerEditMode, changeUserName, toggleOptionsWindow, addPlayerNote} from '../../actions';

//styles import
import "./index.css";

//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainHeader = ({players, playersCount, addNewPlayer, remove, toggleEditMode, changeName, toggleOptWindow, addNewNote}) => {
    return (
        <div className="main-header">
            {players.map((player, index)=><PlayerStats 
                key={index} 
                playersCount={playersCount} 
                name={player.name.value} 
                score={player.score} 
                bolts={player.bolts} 
                id={index} 
                remove={remove}
                editMode={player.name.editMode}
                toggleEditMode={toggleEditMode}
                changeName={changeName}
            />)}
            <div className="right-btns">
                <button onClick={addNewPlayer} disabled={playersCount >= 4}><FontAwesomeIcon icon="user-plus" size="2x"/></button>
                <button onClick={toggleOptWindow}><FontAwesomeIcon icon="sliders-h" size="2x"/></button>
                <button onClick={addNewNote}><FontAwesomeIcon icon="plus-square" size="2x"/></button>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({players: state.players, playersCount: state.players.length});

const mapDispatchToProps = dispatch => ({
    addNewPlayer: () => dispatch(addPlayer()),
    remove: (id) => dispatch(removePlayer(id)),
    toggleEditMode: (id) => dispatch(togglePlayerEditMode(id)),
    changeName: (id, name) => dispatch(changeUserName(id, name)),
    toggleOptWindow: () => dispatch(toggleOptionsWindow()),
    addNewNote: () => dispatch(addPlayerNote()),
})

export default connect (mapStateToProps, mapDispatchToProps)(MainHeader);