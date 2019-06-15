import React from 'react';
import { connect } from 'react-redux'

//components import
import PlayerStats from "../../components/player-stats";

//actions import
import {addPlayer, removePlayer} from '../../actions';

//styles import
import "./index.css";

//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainHeader = ({players, num, addNewPlayer, remove}) => {
    return (
        <div className="main-header">
            {players.map((player, index)=><PlayerStats key={player.id} num={num} name={player.name} score={player.score} bolts={player.bolts} id={index} remove={remove}/>)}
            <div className="right-btns">
                <button onClick={addNewPlayer} disabled={num >= 4}><FontAwesomeIcon icon="user-plus" size="2x"/></button>
                <button>btn 2</button>
                <button>btn 3</button>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({players: state.players, num: state.players.length});

const mapDispatchToProps = dispatch => ({
    addNewPlayer: () => dispatch(addPlayer()),
    remove: (id) => dispatch(removePlayer(id))
})

export default connect (mapStateToProps, mapDispatchToProps)(MainHeader);