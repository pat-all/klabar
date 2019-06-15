import { ADD_PLAYER, EDIT_PLAYER, REMOVE_PLAYER } from './constants';

export const addPlayer = () => {
    return({type: ADD_PLAYER});
};

export const editPlayer = (id) => {
    return ({type: EDIT_PLAYER, id})
}

export const removePlayer = (id) => {
    return ({type: REMOVE_PLAYER, id})
}