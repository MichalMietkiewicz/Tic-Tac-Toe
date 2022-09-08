const tableCell = document.querySelectorAll(".table-cell");

firstPlayerTurn = true;
 firstPlayerPoints = [];
 secondPlayerPoints = [];
 wincon = [['0', '1', '2'], ['3', '4', '5'], ['6', '7', '8'], ['0', '3', '6'], ['1', '4', '7'], ['2', '5', '8'], ['0', '4', '8'], ['2', '4', '6']];

const cell0 = document.getElementById("cell0");
const cell1 = document.getElementById("cell1");
const cell2 = document.getElementById("cell2");
const cell3 = document.getElementById("cell3");
const cell4 = document.getElementById("cell4");
const cell5 = document.getElementById("cell5");
const cell6 = document.getElementById("cell6");
const cell7 = document.getElementById("cell7");
const cell8 = document.getElementById("cell8");


const crosses = document.querySelectorAll(".cross")
const circles = document.querySelectorAll(".circle")

const circle0 = document.getElementById("circle0");
const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const circle3 = document.getElementById("circle3");
const circle4 = document.getElementById("circle4");
const circle5 = document.getElementById("circle5");
const circle6 = document.getElementById("circle6");
const circle7 = document.getElementById("circle7");
const circle8 = document.getElementById("circle8");

const cross0 = document.getElementById("cross0");
const cross1 = document.getElementById("cross1");
const cross2 = document.getElementById("cross2");
const cross3 = document.getElementById("cross3");
const cross4 = document.getElementById("cross4");
const cross5 = document.getElementById("cross5");
const cross6 = document.getElementById("cross6");
const cross7 = document.getElementById("cross7");
const cross8 = document.getElementById("cross8")

const leaderboard = document.querySelector(".leaderboard")
const player1button = document.querySelector(".test-button-1")
const player2button = document.querySelector(".test-button-2")
const saveButton = document.querySelector(".save-button")

const player1Name = document.querySelector(".input-1");
const player2Name = document.querySelector(".input-2");
const nameDisplay = document.querySelector(".turn-display");
const resetButton = document.querySelector(".reset-button")

setInterval(function(){
    if(firstPlayerTurn == true){
    nameDisplay.innerHTML = `It's ${player1Name.value} 's turn`
    if(player1Name.value === "") {
        nameDisplay.innerHTML = `It's player 1's turn`
    }} else {
        nameDisplay.innerHTML = `It's ${player2Name.value} 's turn`
        if(player2Name.value === "") {
            nameDisplay.innerHTML = `It's player 2's turn`
        }
    } 
},
);

function changeTurn() {
    firstPlayerTurn = !firstPlayerTurn
}

cell0.addEventListener("click", function placeInCell0(){
    if (firstPlayerTurn == true){
    cross0.classList.remove("element-visibility")
    firstPlayerPoints.push('0')
    } else {
    circle0.classList.remove("element-visibility")    
    secondPlayerPoints.push('0')
    }
    changeTurn()
    console.log(firstPlayerPoints)
},{
    once: true
})

cell1.addEventListener("click", function placeSymbol(){
    if (firstPlayerTurn == true){
    cross1.classList.remove("element-visibility")
    firstPlayerPoints.push('1')
    } else {
    circle1.classList.remove("element-visibility")    
    secondPlayerPoints.push('1')
    }
    changeTurn()
},{
    once: true
})

cell2.addEventListener("click", function(){
    if (firstPlayerTurn == true){
    cross2.classList.remove("element-visibility")
    firstPlayerPoints.push('2')
    } else {
    circle2.classList.remove("element-visibility") 
    secondPlayerPoints.push('2')   
    }
    changeTurn()
    // console.log(firstPlayerPoints)
},{
    once: true
})

cell3.addEventListener("click", function(){
    if (firstPlayerTurn == true){
    cross3.classList.remove("element-visibility")
    firstPlayerPoints.push('3')
    } else {
    circle3.classList.remove("element-visibility")
    secondPlayerPoints.push('3')    
    }
    changeTurn()
    // console.log(firstPlayerPoints)
    console.log(wincon);
},{
    once: true
})

cell4.addEventListener("click", function(){
    if (firstPlayerTurn == true){
    cross4.classList.remove("element-visibility")
    firstPlayerPoints.push('4')
    // console.log(firstPlayerPoints)
    } else {
    circle4.classList.remove("element-visibility")
    secondPlayerPoints.push('4')    
    }
    changeTurn()
},{
    once: true
})

cell5.addEventListener("click", function(){
    if (firstPlayerTurn == true){
    cross5.classList.remove("element-visibility")
    firstPlayerPoints.push('5')
    // console.log(firstPlayerPoints)
    } else {
    circle5.classList.remove("element-visibility")
    secondPlayerPoints.push('5')    
    }
    changeTurn()
},{
    once: true
})

cell6.addEventListener("click", function(){
    if (firstPlayerTurn == true){
    cross6.classList.remove("element-visibility")
    firstPlayerPoints.push('6')
    // console.log(firstPlayerPoints)
    } else {
    circle6.classList.remove("element-visibility")
    secondPlayerPoints.push('6')    
    }
    changeTurn()
},{
    once: true
})

cell7.addEventListener("click", function(){
    if (firstPlayerTurn == true){
    cross7.classList.remove("element-visibility")
    firstPlayerPoints.push('7')
    // console.log(firstPlayerPoints)
    } else {
    circle7.classList.remove("element-visibility")
    secondPlayerPoints.push('7')    
    }
    changeTurn()
},{
    once: true
})

cell8.addEventListener("click", function(){
    if (firstPlayerTurn == true){
    cross8.classList.remove("element-visibility")
    firstPlayerPoints.push('8')
    // console.log(firstPlayerPoints)
    } else {
    circle8.classList.remove("element-visibility")
    secondPlayerPoints.push('8')
    console.log(secondPlayerPoints);    
    }
    changeTurn()
    
},{
    once: true
})

wincon.forEach(conditions =>{
    const player1win = conditions.every(con => firstPlayerPoints.includes(con)) 
    const player2win = conditions.every(con => secondPlayerPoints.includes(con)) 
    if (player1win) {
        alert(`${player1Name.value}`,"Wins!");
        let leaderboardPlayer = document.createElement('li');
        leaderboardPlayer.appendChild(document.createTextNode(`${player1Name.value}`))
        document.querySelector('ul').appendChild(leaderboardPlayer)
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard.textContent));
        console.log(localStorage)
        JSON.parse(localStorage.getItem("leaderboard"))
    } else if (player2win) {
        alert(`${player2Name.value}`,"Wins!")
        let leaderboardPlayer = document.createElement('li');
        leaderboardPlayer.appendChild(document.createTextNode(`${player2Name.value}`))
        document.querySelector('ul').appendChild(leaderboardPlayer)
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard.textContent));
        console.log(localStorage)
        JSON.parse(localStorage.getItem("leaderboard"))
    } else if (firstPlayerPoints.length + secondPlayerPoints.length == 9){
        alert("It's a draw! Good game!")
    }
}) 

// const containment = wincon.some(element => {
//     return firstPlayerPoints.indexOf(element) !== -1;
// })

// setInterval(function() {
//     if (wincon.includes(firstPlayerPoints.sort())){
//         alert("Player 1 wins!")
//     }
// })

// setInterval(checkWin())

// function winCheck() {
//     let victory = false
//     for (let i = 0; i <= 7; i++){
//         const condition = wincon[i];
        
//     }
// }

player1button.addEventListener("click", function(){
    let leaderboardPlayer = document.createElement('li');
    leaderboardPlayer.appendChild(document.createTextNode(`${player1Name.value}`))
    document.querySelector('ul').appendChild(leaderboardPlayer)
    console.log(wincon.includes(firstPlayerPoints.sort()))
})

player2button.addEventListener("click", function(){
    let leaderboardPlayer = document.createElement('li');
    leaderboardPlayer.appendChild(document.createTextNode(`${player2Name.value}`))
    document.querySelector('ul').appendChild(leaderboardPlayer)
})



saveButton.addEventListener("click", function(){
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard.textContent));
    console.log(localStorage)
    JSON.parse(localStorage.getItem("leaderboard"))
})

document.addEventListener("DOMContentLoaded", function(){
    leaderboard.innerHTML = leaderboard.textContent
})

// wincon.forEach(condition => {
//     player1win = condition.every(con => firstPlayerPoints.includes(con))

//     if (player1win == true) {
//         alert(player1Name.value, "Wins")
//     }
// })
