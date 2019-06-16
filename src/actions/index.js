import { ADD_PLAYER, REMOVE_PLAYER, CHANGE_USER_NAME, TOGGLE_OPTIONS_WINDOW, TOGGLE_PLAYER_EDIT_MODE } from './constants';

/* PLayer's actions */
export const addPlayer = () => ({type: ADD_PLAYER});

export const removePlayer = (id) => ({type: REMOVE_PLAYER, id});

export const togglePlayerEditMode = (id) => ({type: TOGGLE_PLAYER_EDIT_MODE, id});

export const changeUserName = (id, name) => ({type: CHANGE_USER_NAME, id, name});

/*game Options actions */
export const toggleOptionsWindow = () => ({type: TOGGLE_OPTIONS_WINDOW});