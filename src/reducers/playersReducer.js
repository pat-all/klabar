import { ADD_PLAYER, 
    REMOVE_PLAYER, 
    CHANGE_USER_NAME, 
    TOGGLE_PLAYER_EDIT_MODE,
    ADD_PLAYER_NOTE,
    REMOVE_PLAYER_NOTE,
    SET_PLAYER_NOTE_SCORE} from "../actions/constants";
import { playerShape, playerNote } from "../preloadedStore";

const players = (state = [], {type, playerId, name, score, noteId}) => {
    switch(type) {
        case ADD_PLAYER:
            if (state.length < 4){
                return ([...state, playerShape()])
            } else return state;
        case REMOVE_PLAYER:
            if(state.length > 2){
                const players = [...state];
                players.splice(playerId, 1);
                return players;
            } else return state;
        case TOGGLE_PLAYER_EDIT_MODE:
            const playersRes = [...state];
            playersRes[playerId].name.editMode = !playersRes[playerId].name.editMode;
            return playersRes;
        case CHANGE_USER_NAME:
            const reNamedPalyers = [...state];
            reNamedPalyers[playerId].name.value = name;
            return reNamedPalyers;
        case ADD_PLAYER_NOTE:
            return state.map(player=> {
                const playerNotes = [...player.playerNotes, playerNote()]
                return {...player, playerNotes}
            });
        case REMOVE_PLAYER_NOTE:
            const removeNotesFromPlayers = [...state];
            removeNotesFromPlayers.map(player => player.playerNotes.splice(noteId, 1));
            return removeNotesFromPlayers;
        case SET_PLAYER_NOTE_SCORE:
            const playersArr = [...state];
            playersArr[playerId].playerNotes[noteId].score = score.length > 0 ? parseInt(score) : score;
            return playersArr;

        default: 
            return state;
    }
}

export default players;