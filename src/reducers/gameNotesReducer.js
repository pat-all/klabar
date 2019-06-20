import { ADD_GAME_NOTE } from "../actions/constants";

import { gameNote } from "../preloadedStore";

const gameNotes = (state = [], {type}, dispatch) => {
    switch (type) {
        case ADD_GAME_NOTE:
            return [...state, gameNote()];

        default:
            return state;
    }
}

export default gameNotes;