 export const playerShape = () =>({
    name: {value: "Player", editMode: false},
    total: 0,
    bolts: 0,
    playerNotes: [],
 });

 export const playerNote = () => ({
    score: '',
    bolt: false,
    trump: false,
 });

 export const gameNote = () =>({
    stake: 162,
 })
 
 
 export const preloadedStore = {
        players: [
            playerShape(), playerShape()
        ], 
        gameNotes: [],
        gameOptions: {
            winScore: 1000,
            modalOn: false,
        }
};