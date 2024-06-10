let humanScore = 0;
let computerScore = 0;

let btn = document.querySelector("button");
let title = document.querySelector("h1");
const info = document.querySelector("p");

function getComputerChoice() {
    let choice = Math.round(Math.random())+Math.round(Math.random());
    switch (choice) {
        case 0:
            console.log("Computer chose Paper!");
            return "Paper";
        case 1:
            console.log("Computer chose Rock!");
            return "Rock";
        case 2: 
            console.log("Computer chose Scissors!");
            return "Scissors";
    }
}

function getHumanChoice (choice) {
    
    let playerSelection = choice;

    if (playerSelection === "Paper") {
        console.log("You chose Paper!");
        return playerSelection;
    }
    else if (playerSelection === "Rock") {
        console.log("You chose Rock!");
        return playerSelection;
    }
    else if (playerSelection === "Scissors") {
        console.log("You chose Scissors!");
        return playerSelection;
    }    
}

//The logic for each round of the game, checks who won and who lost
function playRound(human, computer) {
    if (human===computer) {
        console.log("Its a draw!");
    } 
    else if (human==="Rock"&&computer==="Scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    }
    else if (human==="Paper"&&computer==="Rock") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
    }
    else if (human==="Scissors"&&computer==="Paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    }
    else if (human==="Rock"&&computer==="Paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    }
    else if (human==="Paper"&&computer==="Scissors") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    }
    else if (human==="Scissors"&&computer==="Rock") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    }
}

function playGame() {
    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");
    let game = document.createElement("div");
    let roundAlert = document.createElement("div");
    let round = 1;
    let humScore = document.createElement("div");
    let comScore = document.createElement("div");
    
    btn.remove();
    info.remove();

    title.textContent="Rock-Paper-Scissors"; 
    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissors.textContent = "Scissors";
    roundAlert.textContent ="Round: "+round;
    humScore.textContent = "You: " +humanScore;
    humScore.setAttribute("id","human");
    comScore.textContent = "Computer: "+computerScore;
    comScore.setAttribute("id","computer");

    game.appendChild(roundAlert);
    game.appendChild(humScore);
    game.appendChild(comScore);
    game.appendChild(rock);
    game.appendChild(paper);
    game.appendChild(scissors);
    title.appendChild(game)

    const newBtns = document.querySelectorAll("button");
    
    newBtns.forEach((newBtns) => {
        newBtns.addEventListener("click", () => {
            //console.log(newBtns.textContent);
            console.log("Round "+round)
            playRound(getHumanChoice(newBtns.textContent), getComputerChoice());
            round++;
            console.log("Human Score: " + humanScore + ", Computer Score: " + computerScore); 
            humScore.textContent = "You: " +humanScore;
            comScore.textContent = "Computer: " +computerScore;
            roundAlert.textContent = "Round: "+round;
               
            if (humanScore===5) {
                title.textContent="Congratulations, you won!";
                btn.textContent = "Play again";
                title.appendChild(roundAlert);
                title.appendChild(humScore);
                title.appendChild(comScore);
                title.appendChild(btn);
                humanScore=0;
                computerScore=0;
            }
            else if(computerScore===5) {
                title.textContent="You lost! Better luck next time.";
                btn.textContent = "Play again";
                title.appendChild(roundAlert);
                title.appendChild(humScore);
                title.appendChild(comScore);
                title.appendChild(btn);
                humanScore=0;
                computerScore=0;
            }
        });        
    })
    console.log("Good luck!")
   
}

btn.addEventListener("click", () => {
    playGame();    
});   

// playGame();









