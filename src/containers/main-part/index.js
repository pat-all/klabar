import React from 'react';
import {connect} from 'react-redux';

//import Components
import GameNote from "../game-note";

//import actions


//import styles
import "./index.css";

const MainPart = ({gameNotes}) => {
    return(
        <div className="main-part">
            {gameNotes.map((gameNote, index)=>(
                <GameNote key={index} noteId={index}/>
            ))}
        </div>
    );
}

const mapStateToProps = state => ({gameNotes: state.gameNotes});

const mapDispatchToProps = dispatch => ({
    
})

export default connect (mapStateToProps, mapDispatchToProps)(MainPart);