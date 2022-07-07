let you;
let opponent;
let opponentScore=0;
let yourScore =0;

let yourchoice = document.querySelector('.yourMove');
let cpMove = document.querySelector('.opponentMove');
let result = document.querySelector('.result');
let UserScore = document.querySelector('.yourScore');
let computerScore = document.querySelector('.oppoScore');
function computerMove(){
    let choices =["Rock","Paper","Scissors"]
    opponent = choices[Math.floor(Math.random() * 3)];
    cpMove.textContent = "Computer move: "+ opponent;
    
}
const moves = document.querySelectorAll(".choices");

moves.forEach(button => button.addEventListener("click",() => {
    you = button.textContent;
    yourchoice.textContent = `Player move:  ${you}`
    computerMove();
    result.textContent = checkWinner();
    UserScore.textContent = yourScore;
    computerScore.textContent = opponentScore;
    
    function checkWinner(){
        if(opponent==you){
            return "Draw!"
        } else if(opponent=="Rock"&&you=="Paper"||opponent=="Paper"&&you=="Scissors"||opponent=="Scissors"&&you=="Rock"){
            yourScore++;
            return "You win!"
        }
        else {
            opponentScore++;
            return "Computer Won!"
        }
        
        
    }
    
}))
let playAgain = document.querySelector('.playAgain');
playAgain.addEventListener('click',resetGame)

function resetGame(){
    yourScore=0;
    opponentScore=0;

}
