 export const playerShape = () =>({
    name: {value: "Player", editMode: false},
    score: 0,
    bolts: 0,
    gameNotes: [],
 })
 
 
 export const preloadedStore = {
        players: [
            playerShape(), playerShape()
        ], 
        gameOptions: {
            winScore: 1000,
            modalOn: false,
        }
};