const tableCell = document.getElementsByClassName("table-cell");
const tableCells = document.querySelectorAll(".table-cell");

firstPlayerTurn = true;
firstPlayerPoints = [];
secondPlayerPoints = [];
let firstPlayerRoundWins = 0;
let secondPlayerRoundWins = 0;

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
const leaderTitle = document.querySelector(".bottom-content");
const player1Score = document.getElementById("player1score");
const player2Score = document.getElementById("player2score");
const nextMatch = document.getElementById("play-again");
const gridBox = document.getElementById("grid-box");
let player1Title;
let player2Title;
let currentPlayer;
let roundWinner; 
let matchWinner;

const generateCells = () => {
    for (let i = 0; i < 9; i++){
        const createCell = document.createElement("div");
        gridBox.appendChild(createCell);
        createCell.className = "table-cell"
        createCell.id = `cell${i}`;
    }
}

resetButton.addEventListener("click", () => {
    resetFunctionality()
});

const startButtonEnabler = () => {
    if(player1Input.value == "" || player2Input.value == "") {
        startBtn.disabled = true;
    } else if(player1Input.value == player2Input.value) {
        startBtn.disabled = true;
        alert("THE NAMES CANT BE THE SAME")
    }
     else {
        startBtn.disabled = false;
        startBtn.addEventListener("click", () => {
            player1Title = player1Input.value;
            player2Title = player2Input.value;    
            gameStartElements.classList.remove("hidden");
            inputBox.classList.add("hidden");
            upadateScoreboard()
    })
}} 

const enableGameBoard = () => {
    generateCells();
    Array.from(tableCell).forEach(Cell => Cell.addEventListener("click", event => {
        !event.target.hasChildNodes() && appendSymbol(firstPlayerTurn ? "cross" : "circle", event); 
    }));
}

startBtn.addEventListener("click", () => {
    startButtonEnabler();
    enableGameBoard();
});

inputBox.addEventListener("input", () => {
    startButtonEnabler()
});

const changeTurn = () => {
    firstPlayerTurn = !firstPlayerTurn;
    swapPlayers();
};

let swapPlayers = () => {
    firstPlayerTurn ? currentPlayer = player1Input.value : currentPlayer = player2Input.value;
    nameDisplay.textContent = `It's ${currentPlayer}'s turn!`
}; 

const appendSymbol = (icon, event) => {
    let symbol = document.createElement("i");
    symbol.classList.add(icon, "fa-solid", "fa-2xl");
    if (firstPlayerTurn) {
        symbol.classList.add("fa-xmark");
        firstPlayerPoints.push(event.target.id.substring(4))
    } else {
        symbol.classList.add("fa-o");
        secondPlayerPoints.push(event.target.id.substring(4))
    }
    event.target.appendChild(symbol);
    changeTurn()
    roundWinChecker()
    winChecker()
    
};

const resetFunctionality = () => {
    changeTurn()
    firstPlayerPoints = [];
    secondPlayerPoints = [];
    gridBox.innerHTML = "";
    roundWinner = "";
    enableGameBoard();
    document.querySelector("#game-board").style.pointerEvents = "all";
};

const upadateScoreboard = () =>  {
    player1Score.textContent = `${player1Title}'s round wins : ${firstPlayerRoundWins}`;
    player2Score.textContent = `${player2Title}'s round wins : ${secondPlayerRoundWins}`; 
};

const winChecker = () => {
if (firstPlayerRoundWins == 3) {
    matchWinner = player1Input.value
} else if (secondPlayerRoundWins == 3) {
    matchWinner = player2Input.value
} if (secondPlayerRoundWins == 3 || firstPlayerRoundWins == 3) {
    resetButton.classList.add("hidden");
    nextMatch.classList.remove("hidden");
        nextMatch.addEventListener("click", () => {
            resetFunctionality()
            firstPlayerRoundWins = 0;
            secondPlayerRoundWins = 0;
            player1Input.textContent = "";
            player2Input.textContent = "";
            clearScreen()
            gridBox.innerHTML = "";
            nameDisplay.innerHTML = "Its first player's turn"
})
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
                roundWinner = player1Title;
                firstPlayerRoundWins = firstPlayerRoundWins + 1;
            } else if (player2win) {
                roundWinner = player2Title;
                secondPlayerRoundWins = secondPlayerRoundWins + 1;
            }
            if (player1win || player2win) {
                upadateScoreboard()
                document.querySelector("#game-board").style.pointerEvents = "none";
                alert(`${roundWinner} Wins the round!`);
        } else if (player1win == false && player2win == false && firstPlayerPoints.length + secondPlayerPoints.length == 9){
        alert(`It's a draw! Good game!`), {
            once: true
        }
        };
    });
    
};

document.addEventListener("DOMContentLoaded", () => {
    leaderboard.innerHTML = localStorage.getItem("leaderboard") + "," 
    alert("PLEASE ENTER THE PLAYER'S NAMES");
});

function clearScreen() {
    gameStartElements.classList.add("hidden");
    inputBox.classList.remove("hidden");
};

