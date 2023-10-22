export type Game = {
    name: string;
    description: string;
    symbol: string;
    uri: string;
    collection: string;
    image: string;
};

export const games: Game[] = [

    {
        name: "Whack A Minion",
        symbol: "MA",
        uri: "https://arweave.net/4Y8b3nIcBMaqevhOycCm-EQ5FNwLZ2YKQ6iK_3H57YM",
        description: "Whack a Minion is a fun and addictive game where players must whack as many minions as they can before time runs out. The objective is simple: tap or click to whack the minions and earn points. But be careful for the pedestrians! With colorful graphics and cheerful sound effects, Whack a Minion is perfect for all ages and skill levels. Try beating your high score and become the ultimate minion whacker!",
        collection: "54Gu7ZG8p8cm4WcXPDURAnaNMfD4gMFtvxwHuYD5HanG",
        image: "https://arweave.net/9mtjzrsYY0wxVWfhk6oGK2u3d4P9RpXyyrnw0Ws0org?ext=png"
    },
    {
        name: "Game of Life",
        symbol: "MA",
        uri: "https://arweave.net/Z9owKG-T3_S3QxriRunv6IKm2nVvUyNt0PdvzvnyPUs",
        description: "The Game of Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.\n\nEach piece minted generates its initial layout based on its mint address which provides a unique experience for each NFT in the collection.\n\nThe goal of the game is to create stable life. Many shapes don't decay and remain static or toggle between multiple states in an infinite loop.\n\nAn empty, or “dead,” cell with precisely three “live” neighbors (full cells) becomes live.\n\nA live cell with zero or one neighbors dies of isolation; a live cell with four or more neighbors dies of overcrowding.\n\nA live cell with two or three neighbors remains alive.\n\nYou can place up to 10 cells.\n\n*View this NFT on a platform that supports HTML NFTs such as Exchange.art.",
        collection: "54Gu7ZG8p8cm4WcXPDURAnaNMfD4gMFtvxwHuYD5HanG",
        image: "https://arweave.net/gF7_ULlw0yq_dp5B3DzBOpAyOGQk5B4iLhwatPZ1JRg?ext=gif"
    },
    {
        name: "Bitsweeper",
        symbol: "MA",
        uri: "https://arweave.net/Fchz-6qvZGkLxzjWXIZSZeXM-pHh7rwT_Jzc298wzrc",
        description: "This NFT contains an interactive game available to play when viewing on Exchange.art. Reach the end of the experience to obtain a secret password.",
        collection: "54Gu7ZG8p8cm4WcXPDURAnaNMfD4gMFtvxwHuYD5HanG",
        image: "https://arweave.net/vAUz-fMsam114urGTfXqigcLv-w_w1bM0L7qx6lr9JA?ext=gif"
    },
    {
        name: "Snake",
        symbol: "MA",
        uri: "https://shdw-drive.genesysgo.net/Cbwbqo4T7xgEkrJGKbhyrYG7fieGE7f8cu23dkeVi8CV/snake.json",
        description: "This game is yet to be announced or released.",
        collection: "54Gu7ZG8p8cm4WcXPDURAnaNMfD4gMFtvxwHuYD5HanG",
        image: "https://shdw-drive.genesysgo.net/Cbwbqo4T7xgEkrJGKbhyrYG7fieGE7f8cu23dkeVi8CV/snake.gif"
    },
    {
        name: "Tic Tac Toe",
        symbol: "MA",
        uri: "https://shdw-drive.genesysgo.net/Cbwbqo4T7xgEkrJGKbhyrYG7fieGE7f8cu23dkeVi8CV/ttt.json",
        description: "Play AI in a game of Tic Tac Toe.",
        collection: "54Gu7ZG8p8cm4WcXPDURAnaNMfD4gMFtvxwHuYD5HanG",
        image: "https://shdw-drive.genesysgo.net/Cbwbqo4T7xgEkrJGKbhyrYG7fieGE7f8cu23dkeVi8CV/ttt.gif"
    },
    {
        name: "TBD",
        symbol: "MA",
        uri: "https://arweave.net/4Y8b3nIcBMaqevhOycCm-EQ5FNwLZ2YKQ6iK_3H57YM",
        description: "This game is yet to be announced or released.",
        collection: "54Gu7ZG8p8cm4WcXPDURAnaNMfD4gMFtvxwHuYD5HanG",
        image: "Default"
    },
   
    
];