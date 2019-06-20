import { ADD_GAME_NOTE, REMOVE_GAME_NOTE } from "../actions/constants";

import { gameNote } from "../preloadedStore";

const gameNotes = (state = [], {type, id}) => {
    switch (type) {
        case ADD_GAME_NOTE:
            return [...state, gameNote()];
        case REMOVE_GAME_NOTE:
            const newNotes = [...state];
            newNotes.splice(id, 1);
            return newNotes;
        default:
            return state;
    }
}

export default gameNotes;