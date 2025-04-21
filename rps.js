
function getComputerChoice(){
    let choice = Math.floor(3*Math.random())
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
function playRound(human, computer){
    human = human.toLowerCase();
    if (human === computer ){
        result.textContent = "It's a tie!";
    }
    else if ((human == "rock" && computer == "scissors") || (human == "paper" && computer == "rock")  || (human == "scissors" && computer == "paper")){
        result.textContent ="You win, " + human + " beats " + computer + "!";
        humanScore++;
    }
    else {
        result.textContent = "You lose, " + computer + " beats " + human + "!";
        compScore++;
    }
}
const choice = document.querySelector("#choice");
const container = document.querySelector("#container");
let humanScore = 0;
let compScore = 0;
const human = document.createElement("p");
human.textContent = "Your Score: " + humanScore;
const comp = document.createElement("p");
comp.textContent = "Computer Score: " + compScore;
const result = document.createElement("p");
container.appendChild(human);
container.appendChild(comp);
container.appendChild(result);
choice.addEventListener('click', (event) =>{
    let target = event.target;
    switch(target.id){
        case 'Rock':
            playRound('rock', getComputerChoice());
            break;
        case 'Paper':
            playRound('paper', getComputerChoice());
            break;
        case 'Scissors':
            playRound('scissors', getComputerChoice());
            break;
    }  
    human.textContent = "Your Score: " + humanScore; 
    comp.textContent = "Computer Score: " + compScore;
    if (humanScore >= 5){
        result.textContent = "You won the game! Congrats!";
        choice.innerHTML = '';
        
    }
    else if (compScore >= 5){
        result.textContent = "You lost the game... Better luck next time.";
        choice.innerHTML = '';
    }
});