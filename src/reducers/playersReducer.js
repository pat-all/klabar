import { ADD_PLAYER, 
    REMOVE_PLAYER, 
    CHANGE_USER_NAME, 
    TOGGLE_PLAYER_EDIT_MODE,
    ADD_PLAYER_NOTE,
    REMOVE_PLAYER_NOTE,
    SET_PLAYER_NOTE_SCORE,
    SET_PLAYER_NOTE_TRUMP,
    SET_PLAYER_NOTE_FINE,
    CALCULATE_PLAYER_SCORE,
    PLAYER_CHECK
} from "../actions/constants";
import { playerShape, playerNote } from "../preloadedStore";

const players = (state = [], {type, playerId, name, score, noteId, stake, restCards}) => {
    switch(type) {
        case ADD_PLAYER:
            if (state.length < 4){
                return ([...state, playerShape()])
            } else return state;
        case REMOVE_PLAYER:
            if(state.length > 2){
                let players = [...state];
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
            playersArr[playerId].playerNotes[noteId].score = score.length > 0 ? Number(score) : score;
            return playersArr;
        case SET_PLAYER_NOTE_TRUMP:
            let players = [...state];
            players.map((player, index) => player.playerNotes[noteId].trump = index === playerId);
            return players;
        case SET_PLAYER_NOTE_FINE:
            const playerNotesFine = [...state];
            playerNotesFine.map((player, index) => player.playerNotes[noteId].fine = playerId === index ? !player.playerNotes[noteId].fine : player.playerNotes[noteId].fine);
            return playerNotesFine;
        case CALCULATE_PLAYER_SCORE:
            let playerScore = stake - restCards;
            console.log( 'stake - restCards: ' + playerScore);
            let playersCalc = [...state];
            for(let i = 0; i < playersCalc.length; i++){
                if(i !== playerId){
                    playerScore = playerScore - playersCalc[i].playerNotes[noteId].score
                }
            }
            playersCalc[playerId].playerNotes[noteId].score = playerScore;
            return playersCalc;
        /* spike for update player note 8-) */
        case PLAYER_CHECK: 
            const playersCheck = [...state];
            playersCheck.map((player) => {
                player.playerNotes[noteId].check = !player.playerNotes[noteId].check;
                return null;
            });
            return playersCheck;
        default: 
            return state;
    }
}

export default players;