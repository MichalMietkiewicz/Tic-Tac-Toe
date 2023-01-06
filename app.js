const tableCell = document.getElementsByClassName("table-cell");
let firstPlayerTurn = true;
let firstPlayerPoints = [];
let secondPlayerPoints = [];
let firstPlayerRoundWins = 0;
let secondPlayerRoundWins = 0;
let roundCount = 0;

wincon = [['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'], ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'], ['0', '4', '8'], ['2', '4', '6']];

const gameStartElements = document.querySelector(".page-elements")
const crosses = document.getElementsByClassName("cross");
const circles = document.getElementsByClassName("circle");
const startBtn = document.getElementById("start-button")
const leaderboard = document.querySelector(".leaderboard");
const inputBox = document.querySelector(".input-box");
let player1Input = document.querySelector(".input-1");
let player2Input = document.querySelector(".input-2");
const nameDisplay = document.querySelector(".turn-display");
const resetButton = document.getElementById("reset-button");
const leaderName = document.querySelector(".bottom-content");
const player1Score = document.getElementById("player1score");
const player2Score = document.getElementById("player2score");
const nextMatch = document.getElementById("play-again");
const gridBox = document.getElementById("grid-box");
const nameWarn = document.getElementById("name-warn");
const currentRound = document.getElementById("current-round");
const leaderboardClear = document.getElementById("clear-board")
let player1Name;
let player2Name;
let currentPlayer;
let roundWinner; 
let matchWinner;
let numOfCells;

leaderboardClear.addEventListener("click", () => {
    console.log("a");
    localStorage.clear();
});

const swapPlayers = () => {
    firstPlayerTurn ? currentPlayer = player1Input.value : currentPlayer = player2Input.value;
    nameDisplay.textContent = `It's ${currentPlayer}'s turn!`
}; 

const generateCells = () => {
    for (let i = 0; i < 9; i++){
        const createCell = document.createElement("div");
        gridBox.appendChild(createCell);
        createCell.className = "table-cell"
        createCell.id = `cell${i}`;
    };
};

const handleDraws = () => {
    if(firstPlayerPoints.length + secondPlayerPoints.length == 9){
        if(firstPlayerRoundWins > 0 || secondPlayerRoundWins > 0){
            alert("It's a draw, nice try!")
            document.querySelector("#game-board").style.pointerEvents = "none";
        };
    };
};

const handleReset = () => {
    handleTurnChange();
    firstPlayerPoints = [];
    secondPlayerPoints = [];
    gridBox.innerHTML = "";
    roundWinner = "";
    enableGameBoard();
    document.querySelector("#game-board").style.pointerEvents = "all";
};

const clearScreen = () => {
    gameStartElements.classList.add("hidden");
    inputBox.classList.remove("hidden");
};

const startButtonEnabler = () => {
    if(player1Input.value == "" || player2Input.value == "") {
        startBtn.disabled = true;
    } else if(player1Input.value == player2Input.value) {
        startBtn.disabled = true;
        nameWarn.classList.remove("hidden");
    }
     else {
        startBtn.disabled = false;
        startBtn.addEventListener("click", () => {
            player1Name = player1Input.value;
            player2Name = player2Input.value;    
            gameStartElements.classList.remove("hidden");
            inputBox.classList.add("hidden");
            handleScoreboardUpdate();
    });
}}; 

const enableGameBoard = () => {
    generateCells();
    Array.from(tableCell).forEach(Cell => Cell.addEventListener("click", event => {
        !event.target.hasChildNodes() && appendSymbol(firstPlayerTurn ? "cross" : "circle", event); 
    }));
};

document.addEventListener("click", () => {
    console.log(firstPlayerPoints.length + secondPlayerPoints.length);
});

resetButton.addEventListener("click", () => {
    handleReset();
});


startBtn.addEventListener("click", () => {
    startButtonEnabler();
    enableGameBoard();
});

inputBox.addEventListener("input", () => {
    startButtonEnabler();
});

const handleTurnChange = () => {
    firstPlayerTurn = !firstPlayerTurn;
    swapPlayers();
};



const appendSymbol = (icon, event) => {
    let symbol = document.createElement("i");
    symbol.classList.add(icon, "fa-solid", "fa-2xl");
    if (firstPlayerTurn) {
        symbol.classList.add("fa-xmark");
        firstPlayerPoints.push(event.target.id.substring(4));
    } else {
        symbol.classList.add("fa-o");
        secondPlayerPoints.push(event.target.id.substring(4));
    }
    event.target.appendChild(symbol);
    handleTurnChange();
    roundWinChecker();
    winChecker();
    handleDraws();
};



const handleScoreboardUpdate = () =>  {
    player1Score.textContent = `${player1Name}'s round wins : ${firstPlayerRoundWins}`;
    player2Score.textContent = `${player2Name}'s round wins : ${secondPlayerRoundWins}`; 
    currentRound.textContent = `It's currently round ${roundCount}, win 3 rounds to win the match!`;
};

const winChecker = () => {
    if (firstPlayerRoundWins == 3) {
        matchWinner = player1Input.value
    }
    else if (secondPlayerRoundWins == 3) {
        matchWinner = player2Input.value
    }
    if (secondPlayerRoundWins == 3 || firstPlayerRoundWins == 3) {
        resetButton.classList.add("hidden");
        nextMatch.classList.remove("hidden");
            nextMatch.addEventListener("click", () => {
                handleReset();
                firstPlayerRoundWins = 0;
                secondPlayerRoundWins = 0;
                roundCount = 0;
                player1Input.textContent = "";
                player2Input.textContent = "";
                clearScreen();
                gridBox.innerHTML = "";
                nameDisplay.innerHTML = `Its first player's turn`;
                resetButton.classList.remove("hidden");
                nextMatch.classList.add("hidden");
    });
            alert(`${matchWinner} WINS THE GAME CONGRATULATIONS! 😊`);
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard.textContent));

        let leaderboardPlayer = document.createElement('li');
        leaderboardPlayer.appendChild(document.createTextNode(`${matchWinner}`));
        document.querySelector('ul').appendChild(leaderboardPlayer);
}};

const roundWinChecker = () => {
    wincon.forEach(condition => {
        player1win = condition.every(con => firstPlayerPoints.includes(con))
        player2win = condition.every(con => secondPlayerPoints.includes(con))
            if (player1win) {
                roundWinner = player1Name;
                firstPlayerRoundWins = firstPlayerRoundWins + 1;
            }
            else if (player2win) {
                roundWinner = player2Name;
                secondPlayerRoundWins = secondPlayerRoundWins + 1;
            }
            if (player1win || player2win) {
                roundCount = roundCount + 1;
                handleScoreboardUpdate();
                alert(`${roundWinner} Wins the round!`);
                handleReset();
        };
    });
};


document.addEventListener("DOMContentLoaded", () => {
    leaderboard.innerHTML = localStorage.getItem("leaderboard") + "," 
});

