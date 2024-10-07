function getRandomInt(max){
    return Math.floor(Math.random() * max);
}
function getComputerChoice(){
    let randomInt = getRandomInt(3);
    let choice;
    if(randomInt == 0){
        choice = "rock";
    } else if (randomInt == 1){
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}
function getHumanChoice(){
    let choice;
    do {
        choice = prompt("Enter Your Choice: ")
        choice = choice.toLowerCase();
    }
    while (choice != "scissors" && choice != "rock" && choice != "paper");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("Computer wins!");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You wins!");
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You wins!");
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("Computer Wins!");
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You wins!");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("Computer Wins!");
        computerScore++;
    } else {
        console.log("Draw!")
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore){
        console.log("You are the winner!")
    } else if (humanScore < computerScore){
        console.log("Computer is the winner!")
    } else{
        console.log("It's a tie!")
    }
}
playGame();