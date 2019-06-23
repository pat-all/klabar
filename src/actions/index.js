import { 
    ADD_PLAYER,
    REMOVE_PLAYER, 
    CHANGE_USER_NAME,
    TOGGLE_OPTIONS_WINDOW,
    TOGGLE_PLAYER_EDIT_MODE,
    ADD_PLAYER_NOTE, ADD_GAME_NOTE,
    REMOVE_GAME_NOTE, REMOVE_PLAYER_NOTE,
    SET_PLAYER_NOTE_SCORE,
    SET_PLAYER_NOTE_TRUMP,
    SET_GAME_NOTE_STAKE,
    SET_GAME_NOTE_REST_CARDS,
    SET_PLAYER_NOTE_FINE,
    CALCULATE_PLAYER_SCORE,
    PLAYER_CHECK,
} from './constants';

/* PLayer's actions */
export const addPlayer = () => ({type: ADD_PLAYER});

export const removePlayer = (playerId) => ({type: REMOVE_PLAYER, playerId});

export const togglePlayerEditMode = (playerId) => ({type: TOGGLE_PLAYER_EDIT_MODE, playerId});

export const changeUserName = (playerId, name) => ({type: CHANGE_USER_NAME, playerId, name});

export const addPlayerNote = () => ({type: ADD_PLAYER_NOTE});

export const removePlayerNote = (playerId) => ({type: REMOVE_PLAYER_NOTE, playerId});

export const setPlayerNoteScore = (score, playerId, noteId) => ({type: SET_PLAYER_NOTE_SCORE, score, playerId, noteId});

export const setPlayerNoteTrump = (playerId, noteId) => ({type: SET_PLAYER_NOTE_TRUMP, playerId, noteId});

export const setPlayerNoteFine = (playerId, noteId) => ({type: SET_PLAYER_NOTE_FINE, playerId, noteId});

export const calculatePlayerScore = (playerId, noteId, stake, restCards) => ({type: CALCULATE_PLAYER_SCORE, playerId, noteId, stake, restCards});

export const playerCheck = noteId => ({type: PLAYER_CHECK, noteId});

/*game Options actions */
export const toggleOptionsWindow = () => ({type: TOGGLE_OPTIONS_WINDOW});

/*game Notes actions */
export const addGameNote = () => ({type: ADD_GAME_NOTE});

export const removeGameNote = (noteId) => ({type: REMOVE_GAME_NOTE, noteId});

export const setGameNoteStake = (noteId, stake) => ({type: SET_GAME_NOTE_STAKE, noteId, stake});

export const setGameNoteRestCards = (noteId, restCards) => ({type: SET_GAME_NOTE_REST_CARDS, noteId, restCards});