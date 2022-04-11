// Starting Variables
//Storing HTMl elements a variable for easy access
let pScoreboard = document.querySelector('.p-count');
let cScoreboard = document.querySelector('.c-count');
let roundResult = document.querySelector('.result');
let computerChoiceSpan = document.querySelector('.computerChoice');
let userChoiceSpan = document.querySelector('.userChoice');
let winnerPannel = document.querySelector('.winner');

//setting score variables for player & computer to track score
let playerScore = 0;
let computerScore = 0;
//intializing Global variables to store user and computer selections
let computerChoice;
let playerChoice;
const gameOptions = ["rock", "paper", "scissor"];
//function to randomly generate a choice for the computer, uses a random number 1-3 to store selections)

function computerChoose() {
  const randomNum = Math.floor(Math.random() * 3);
    computerChoice = gameOptions[randomNum];
    computerChoiceSpan.innerHTML = computerChoice;
}

function userChoice(choice) {
    playerChoice = gameOptions[choice];
    userChoiceSpan.innerHTML = playerChoice;
    computerChoose();
    game(playerChoice,computerChoice);
}

function game(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        won("tie");
        return;  // nothing more to check when it's a tie
    }

    if (playerChoice == "rock" && computerChoice == "paper")
        won("computer");
    else if (playerChoice == "rock" && computerChoice == "scissor")
        won("player");
    else if (playerChoice == "paper" && computerChoice == "rock")
        won("player");
    else if (playerChoice == "paper" && computerChoice == "scissor")
        won("computer");
    else if (playerChoice == "scissor" && computerChoice == "rock")
        won("computer");
    else if (playerChoice == "scissor" && computerChoice == "paper")
        won("player");
    else
        alert("Wrong inputs")
}

function won(winner) {
    if (winner == "player") {
        roundResult.innerHTML = "You have won against the COMPUTER!!!!";
        playerScore = playerScore + 1;
        pScoreboard.innerHTML = playerScore;
        winnerPannel.src = "https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29vbCUyMGd1eXxlbnwwfHwwfHw%3D&w=1000&q=80";
    }
    else if (winner == "computer") {
        roundResult.innerHTML = "You Suck";
        computerScore = computerScore + 1;
        cScoreboard.innerHTML = computerScore;
        winnerPannel.src = "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2022/03/31/3153796-58534237.jpg?itok=FrZCRb0c";
    }
    else {
        roundResult.innerHTML = "IT";
        winnerPannel.src = "https://i.ytimg.com/vi/8Le6FwpIkg0/maxresdefault.jpg";
    }
    winnerPannel.style.display = "block";
}

function resetGame() {
    roundResult.innerHTML = "";
    playerScore = 0;
    pScoreboard.innerHTML = playerScore;
    computerScore = 0;
    cScoreboard.innerHTML = computerScore;
    userChoiceSpan.innerHTML = "";
    computerChoiceSpan.innerHTML = "";
    winnerPannel.style.display = "none";
}
