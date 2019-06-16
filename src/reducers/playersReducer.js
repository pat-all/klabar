import { ADD_PLAYER, 
    REMOVE_PLAYER, 
    CHANGE_USER_NAME, 
    TOGGLE_PLAYER_EDIT_MODE} from "../actions/constants";
import { playerShape } from "../preloadedStore";

const players = (state = [], {type, id, name}) => {
    switch(type) {
        case ADD_PLAYER:
            if (state.length < 4){
                return ([...state, playerShape()])
            } else return state;
        case REMOVE_PLAYER:
            if(state.length > 2){
                const players = [...state];
                players.splice(id, 1);
                return players;
            } else return state;
        case TOGGLE_PLAYER_EDIT_MODE:
            const playersRes = [...state];
            playersRes[id].name.editMode = !playersRes[id].name.editMode;
            return playersRes;
        case CHANGE_USER_NAME:
            const reNamedPalyers = [...state];
            reNamedPalyers[id].name.value = name;
            return reNamedPalyers;
        default: 
            return state;
    }
}

export default players;