import React from 'react';

//import Components
import GameNote from "../game-note";

//import styles
import "./index.css";

const MainPart = () => {
    return(
        <div className="main-part">
            <GameNote/>
        </div>
    );
}

export default MainPart;