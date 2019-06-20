import { 
    ADD_PLAYER,
    REMOVE_PLAYER, 
    CHANGE_USER_NAME,
    TOGGLE_OPTIONS_WINDOW,
    TOGGLE_PLAYER_EDIT_MODE,
    ADD_PLAYER_NOTE, ADD_GAME_NOTE,
    REMOVE_GAME_NOTE, REMOVE_PLAYER_NOTE,
} from './constants';

/* PLayer's actions */
export const addPlayer = () => ({type: ADD_PLAYER});

export const removePlayer = (id) => ({type: REMOVE_PLAYER, id});

export const togglePlayerEditMode = (id) => ({type: TOGGLE_PLAYER_EDIT_MODE, id});

export const changeUserName = (id, name) => ({type: CHANGE_USER_NAME, id, name});

export const addPlayerNote = () => ({type: ADD_PLAYER_NOTE});

export const removePlayerNote = (id) => ({type: REMOVE_PLAYER_NOTE, id});

/*game Options actions */
export const toggleOptionsWindow = () => ({type: TOGGLE_OPTIONS_WINDOW});

/*game Notes actions */
export const addGameNote = () => ({type: ADD_GAME_NOTE});

export const removeGameNote = (id) => ({type: REMOVE_GAME_NOTE, id});