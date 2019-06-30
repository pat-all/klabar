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
    PLAYER_CHECK,
    RECORD_PLAYERS_SCORE
} from "../actions/constants";
import { playerShape, playerNote } from "../preloadedStore";

const players = (state = [], {type, playerId, name, score, noteId, stake, restCards, gameOptions}) => {
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
            players.map((player, index) => {
                player.playerNotes[noteId].trump = index === playerId;
                player.playerNotes[noteId].bolt = false;
                return null;
            });
            return players;
        case SET_PLAYER_NOTE_FINE:
            const playerNotesFine = [...state];
            playerNotesFine.map((player, index) => player.playerNotes[noteId].fine = playerId === index ? !player.playerNotes[noteId].fine : player.playerNotes[noteId].fine);
            return playerNotesFine;
        case CALCULATE_PLAYER_SCORE:
            let playerScore = stake - restCards;
            //console.log( 'stake - restCards: ' + playerScore);
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
        case RECORD_PLAYERS_SCORE:
            const playersRecords = [...state];
            const {forfeit} = gameOptions;
            let maxScorePlayerId = 0;
            /**
             * проверка на "яйца", если несколько игроков с максимальным количеством очков в текущей раздаче,
             * то их @eggs становится true.
             * @param {integer} index - индекс игрока, набравшего наибольшее количесво очков за раздачу;
             */
            const eggsCheck = index => {
                maxScorePlayerId = index;
                for(let i = 0; i < playersRecords.length; i++){
                    if(maxScorePlayerId !== i && playersRecords[maxScorePlayerId].playerNotes[noteId].score === playersRecords[i].playerNotes[noteId].score){
                        playersRecords[maxScorePlayerId].playerNotes[noteId].eggs = true;
                        playersRecords[i].playerNotes[noteId].eggs = true;
                    }
                }
            }

            /**
                получаем индекс игрока @maxScorePlayerId который набрал максимум очков за раздачу
            */
            for(let i = 0; i < playersRecords.length; i++){
                if(playersRecords[maxScorePlayerId].playerNotes[noteId].score < playersRecords[i].playerNotes[noteId].score) maxScorePlayerId = i;
            } 
        
            for(let i = 0; i < playersRecords.length; i++){

                //отнимаем штрафные очки @forfeit, если игрок не взял ни единой взятки за раздачу
                if(playersRecords[i].playerNotes[noteId].score.length === 0){
                    playersRecords[i].playerNotes[noteId].score -= forfeit;
                } else if(playersRecords[i].playerNotes[noteId].trump){
                    if(playersRecords[i].playerNotes[noteId].score === playersRecords[maxScorePlayerId].playerNotes[noteId].score){
                    /** если игрок заказывал козырь и его очки равны очкам игрока, индекс которого сохранен 
                        в @maxScorePlayerId (индекс игрока, набравший максимум очков за раздачу),
                        то в @maxScorePlayerId сохраняем индекс игрока (он заказал козырь и его очки равны очкам игрока, 
                        набравшего максимум очков), для того, чтобы далее искать игроков с таким же количеством очков.
                    */
                    eggsCheck(i);
                    } else {
                        /**
                            игрок, заказавший козырь, набрал меньше очков, чем игрок с максильным количеством очков, 
                            то он получает "болт" @bolt = true и 0 очков в запись этой раздачи @score = 0
                        */
                        playersRecords[i].playerNotes[noteId].bolt = true;
                        playersRecords[i].playerNotes[noteId].score = 0;
                    }
                } else if(!playersRecords[i].playerNotes[noteId].trump && playersRecords[i].playerNotes[noteId].score === playersRecords[maxScorePlayerId].playerNotes[noteId].score){
                    /*
                        если игрок не заказывал козырь и его очки равны очкам игрока, набравшего наибольшее количество очков,
                        делаем проверку на "яйца"
                    */
                    eggsCheck(i);
                    
                }
            }
            return playersRecords;
        default: 
            return state;
    }
}

export default players;