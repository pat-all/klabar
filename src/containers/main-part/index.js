import React from 'react';
import {connect} from 'react-redux';

//import Components
import GameNote from "../../components/game-note";

//import styles
import "./index.css";

const MainPart = ({players}) => {
    //const playerNotes
    return(
        <div className="main-part">
            <GameNote/>
        </div>
    );
}

const mapStateToProps = state => ({players: state.players, playersCount: state.players.length});

const mapDispatchToProps = dispatch => ({
    
})

export default connect (mapStateToProps, mapDispatchToProps)(MainPart);