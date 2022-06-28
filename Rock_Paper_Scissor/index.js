function game() {
    let playerScore = 0;
    let computerScore = 0;


    for (let i = 0; i < 5; i++) {
        const x = prompt("Rock,paper or scissors?");
        let input = x.toLowerCase();
        let cp = computerPlay();
        playRound(input, cp);
        console.log("Your score- " + playerScore + "    Computer Score- " + computerScore);
    }

    function computerPlay() {
        let choiceArray = ["rock", "paper", "scissors"];
        let randomChoice = Math.floor(Math.random() * choiceArray.length);
        return choiceArray[randomChoice];
    }


    function playRound(playerSelection, computerSelection) {
        //All winnig choices
        if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore += 1;
            let win = "You win " + playerSelection + " beats " + computerSelection;
            return win;
        }
        //All losing choices
        if ((playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors")) {
            computerScore += 1;
            let lose = "You loose" + computerSelection + " beats " + playerSelection;
            return lose;
        } else {
            let tie = "Match tie";
            return tie;
        }
    }

    //To declare winner
    if (computerScore > playerScore) {
        console.log("You Lost \n Looser!");
    }
    if (computerScore < playerScore) {
        console.log("You Won \n Yaay!");
    }
    if (computerScore === playerScore) {
        console.log("Game tie");
    }





}
game();