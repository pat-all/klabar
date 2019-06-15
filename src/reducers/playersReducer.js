import { ADD_PLAYER, REMOVE_PLAYER } from "../actions/constants";

const players = (state = [], {type, id}) => {
    switch(type) {
        case ADD_PLAYER:
            if (state.length < 4){
                return ([...state, {name: 'Player', score: 0, bolts: 0}])
            } else return state;
        case REMOVE_PLAYER:
            if(state.length > 2){
                const result = [...state];
                result.splice(id, 1);
                return result;
            } else return state;
            
        default: 
            return state;
    }
}

export default players;