import { ADD_GAME_NOTE, REMOVE_GAME_NOTE, SET_GAME_NOTE_STAKE, SET_GAME_NOTE_REST_CARDS } from "../actions/constants";

import { gameNote } from "../preloadedStore";

const gameNotes = (state = [], {type, noteId, stake, restCards}) => {
    switch (type) {
        case ADD_GAME_NOTE:
            return [...state, gameNote()];
        case REMOVE_GAME_NOTE:
            const newNotes = [...state];
            newNotes.splice(noteId, 1);
            return newNotes;
        case SET_GAME_NOTE_STAKE:
            const newStakeNotes = [...state];
            newStakeNotes[noteId].stake = stake.length > 0 ? Number(stake) : stake;
            return newStakeNotes;
        case SET_GAME_NOTE_REST_CARDS:
            const restCardsNotes = [...state];
            restCardsNotes[noteId].restCards = restCards.length > 0 ? Number(restCards) : restCards;
            return restCardsNotes;
        default:
            return state;
    }
}

export default gameNotes;