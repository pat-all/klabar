import { SET_WIN_SCORE, TOGGLE_OPTIONS_WINDOW } from "../actions/constants";

const gameOptions = (state={}, {type, winScore}) => {
    switch(type) {
        case SET_WIN_SCORE:
            return {...state, winScore}
        case TOGGLE_OPTIONS_WINDOW:
            return {...state, modalOn: !state.modalOn}

        default: return state;
    }
}

export default gameOptions;