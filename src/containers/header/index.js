import React from 'react';
import { connect } from 'react-redux'

//components import
import PlayerStats from "../../components/player-stats";

//actions import
import {addPlayer, removePlayer, togglePlayerEditMode, changeUserName, toggleOptionsWindow, addGameNote, addPlayerNote} from '../../actions';

//styles import
import "./index.css";
import { bgColors } from '../../colorClasses';

//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainHeader = ({players, playersCount, addNewPlayer, remove, toggleEditMode, changeName, toggleOptWindow, addGameNote, addPlayerNote, gameNotes}) => {
    const isPlusDisabled = () => {
        let isDisabled = true;
        if(gameNotes.length === 0) {
            isDisabled = false;
        } else {
            for(let i = 0; i < gameNotes.length; i++){
                if(!gameNotes[i].isReady){
                    isDisabled = true; 
                    break;
                } else {
                    isDisabled = false;
                }
                
            }
        }
        return isDisabled;
    }

    const isDisabled = isPlusDisabled();

    return (
        <div className="main-header">
            {players.map((player, index) =>
            <PlayerStats 
                key={index} 
                playersCount={playersCount} 
                name={player.name.value} 
                total={player.total} 
                bolts={player.bolts} 
                id={index} 
                remove={remove}
                editMode={player.name.editMode}
                toggleEditMode={toggleEditMode}
                changeName={changeName}
                gameNotesCount={gameNotes.length}
            />)}
            <div className="right-btns">
                <button onClick={addNewPlayer} disabled={playersCount >= 4 || gameNotes.length > 0}><FontAwesomeIcon icon="user-plus" size="2x"/></button>
                <button onClick={toggleOptWindow} disabled={gameNotes.length > 0}><FontAwesomeIcon icon="sliders-h" size="2x"/></button>
                <button onClick={()=>{addGameNote(); addPlayerNote()}} className={bgColors.primary} disabled={isDisabled}><FontAwesomeIcon icon="plus-square" size="2x"/></button>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({players: state.players, playersCount: state.players.length, gameNotes: state.gameNotes});

const mapDispatchToProps = dispatch => ({
    addNewPlayer: () => dispatch(addPlayer()),
    remove: (id) => dispatch(removePlayer(id)),
    toggleEditMode: (id) => dispatch(togglePlayerEditMode(id)),
    changeName: (id, name) => dispatch(changeUserName(id, name)),
    toggleOptWindow: () => dispatch(toggleOptionsWindow()),
    addGameNote: () => dispatch(addGameNote()),
    addPlayerNote: () => dispatch(addPlayerNote()),
})

export default connect (mapStateToProps, mapDispatchToProps)(MainHeader);