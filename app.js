const cell0 = document.getElementById("cell0");
const cell1 = document.getElementById("cell1");
const cell2 = document.getElementById("cell2");
const cell3 = document.getElementById("cell3");
const cell4 = document.getElementById("cell4");
const cell5 = document.getElementById("cell5");
const cell6 = document.getElementById("cell6");
const cell7 = document.getElementById("cell7");
const cell8 = document.getElementById("cell8");

const tableCell = document.querySelectorAll(".table-body")

const wincon = [[cell0, cell1, cell2], [cell3, cell4, cell5], [cell6, cell7, cell8], [cell0, cell3, cell6],[cell1, cell4, cell7], [cell2, cell5, cell8], [cell0, cell4, cell8], [cell2, cell4, cell6]]; 

const player1Name = document.querySelector(".input-1");
const player2Name = document.querySelector(".input-2");
const nameDisplay = document.querySelector(".turn-display");


setInterval(function(){
    nameDisplay.innerHTML = `It's ${player1Name.value} 's turn`
    if(player1Name.value === "") {
        nameDisplay.innerHTML = `It's player 1's turn`
    }
},
);


player1Name.addEventListener("click", function(){
    console.log(player1Name.value);
}) 

function changeturn() {
    tableCell.addEventListener("click", function(){
        console.log("whatever");
        setInterval(function(){
            nameDisplay.innerHTML = `It's ${player2Name.value} 's turn`
            if(player2Name.value === "") {
                nameDisplay.innerHTML = `It's player 2's turn`
            }
        },
        );
    })
}
