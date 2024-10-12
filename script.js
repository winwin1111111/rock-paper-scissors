
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
let humanScore = 0;
let computerScore = 0;
let round = 0;

function playRound(humanChoice, computerChoice){
    round++;
    if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        resultSquare.innerText = "Computer wins! Rock beats scissors."
        + "\nYour score: " + humanScore + "\nComputer score: " + computerScore
        + "\nRound: " + round;
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        resultSquare.innerText = "You wins! Scissors beats paper."
        + "\nYour score: " + humanScore + "\nComputer score: " + computerScore
        + "\nRound: " + round;
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        resultSquare.innerText = "You wins! Rock beats scissors."
        + "\nYour score: " + humanScore + "\nComputer score: " + computerScore
        + "\nRound: " + round;
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        resultSquare.innerText = "Computer wins! Paper beats rock."
        + "\nYour score: " + humanScore + "\nComputer score: " + computerScore
        + "\nRound: " + round;
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        resultSquare.innerText = "You wins! Paper beats rock."
        + "\nYour score: " + humanScore + "\nComputer score: " + computerScore
        + "\nRound: " + round;
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        resultSquare.innerText = "Computer wins! Scissors beats paper."
        + "\nYour score: " + humanScore + "\nComputer score: " + computerScore
        + "\nRound: " + round;
    } else {
        resultSquare.innerText = "Draw! Both are " + computerChoice + "."
        + "\nYour score: " + humanScore + "\nComputer score: " + computerScore
        + "\nRound: " + round;
    }
    if (round == 5){
        if (humanScore > computerScore){
            resultSquare.innerText += "\nYou are the winner!";
        } else if (humanScore < computerScore){
            resultSquare.innerText += "\nComputer is the winner!";
        } else{
            resultSquare.innerText += "\nIt is a tie!";
        }
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;

        const btnRestart = document.createElement("button");
        btnRestart.innerText = "Restart";
        document.body.appendChild(btnRestart);
        btnRestart.addEventListener("click", function() {
            humanScore = 0;
            computerScore = 0;
            round = 0;
            resultSquare.innerText = "";
            btnRock.disabled = false;
            btnPaper.disabled = false;
            btnScissors.disabled = false;
            document.body.removeChild(btnRestart);
        });
        
    } 
}

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");
document.body.appendChild(btnRock);
document.body.appendChild(btnPaper);
document.body.appendChild(btnScissors);
btnRock.innerText = "Rock";
btnPaper.innerText = "Paper";
btnScissors.innerText = "Scissors";
btnRock.addEventListener("click", function() {
    playRound('rock', getComputerChoice());
});
btnPaper.addEventListener("click", function() {
    playRound('paper', getComputerChoice());
});
btnScissors.addEventListener("click", function() {
    playRound('scissors', getComputerChoice());
});

const resultSquare = document.createElement("div");
document.body.appendChild(resultSquare);


