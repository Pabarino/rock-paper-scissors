let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.round(Math.random())+Math.round(Math.random());
    switch (choice) {
        case 0:
            console.log("Computer chose Paper!");
            return "paper";
        case 1:
            console.log("Computer chose Rock!");
            return "rock";
        case 2: 
            console.log("Computer chose Scissors!");
            return "scissors";
    }
}

function getHumanChoice () {
    
    for (let x=0;x<1;x++) {
        let choice = prompt("Please enter your choice: ");
        choice = choice.toLowerCase();
        
        if (choice === "paper") {
            console.log("You chose Paper!");
            return choice;
        }
        else if (choice === "rock") {
            console.log("You chose Rock!");
            return choice;
        }
        else if (choice === "scissors") {
            console.log("You chose Scissors!");
            return choice;
        }
        else {
            console.log("Not a valid choice, it has to be either rock, paper or scissors.");
            x--;
        }
    }
    
}

function playRound(human, computer) {
    if (human===computer) {
        console.log("Its a draw!");
    } 
    else if (human==="rock"&&computer==="scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }
    else if (human==="paper"&&computer==="rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    else if (human==="scissors"&&computer==="paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    }
    else if (human==="rock"&&computer==="paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if (human==="paper"&&computer==="scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }
    else if (human==="scissors"&&computer==="rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
}

function playGame() {
    console.log("Welcome to Rock-Paper-Scissors! This is a best of 5 game.")
    for (let i=1;i<=5;i++) {
        if (i===5) {
            console.log("Last round!");
        }
        console.log("Round "+i)        
        playRound(getHumanChoice(), getComputerChoice());
        console.log("Human Score: " + humanScore + ", Computer Score: " + computerScore);        
    }
    if (humanScore===computerScore){
        console.log("Its a draw!")
    }
    else if (humanScore>computerScore) {
        console.log("Congratulations, you won!");
    }
    else {
        console.log("You lost! Try again next time.");
    }
}

playGame();









