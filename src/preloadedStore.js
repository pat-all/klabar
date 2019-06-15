const preloadedStore = () => { 
    return ({
    players: {
        1: {
            name: "Player 1",
            score: 0,
            bolts: 0,
            gameNotes: [],
        },
        2: {
            name: "Player 2",
            score: 0,
            bolts: 0,
            gameNotes: [],
        },
    },
    gameOptions: {
        winScore: 1005,
    }
})
};

export default preloadedStore;