import React from "react";

//import componennts
import PlayerNote from "../player-note";

//import styles
import "./index.css";

const GameNote = () => {
    return (
        <div className="game-note">
            <PlayerNote/>
            <PlayerNote/>
            <div className="right-btns">
                <button className="right-side-btn">btn 1</button>
                <button className="right-side-btn">btn 2</button>
            </div>
        </div>
    );
}

export default GameNote;