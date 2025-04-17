
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
function getHumanChoice(){
    return prompt("Rock Paper Scissors!");
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        switch(playRound(humanSelection, computerSelection)){
            case 1:
                humanScore++;
                break;
            case -1:
                computerScore++;
                break;
        }
        
    }
    if (humanScore == computerScore){
        console.log("It's a tie!")
    }
    else if(humanScore > computerScore){
        console.log("You won!")
    }
    else{
        console.log("You lose!")
    }
}
function playRound(human, computer){
    human = human.toLowerCase();
    if (human === computer ){
        console.log("It's a tie!");
    }
    else if ((human == "rock" && computer == "scissors") || (human == "paper" && computer == "rock")  || (human == "scissors" && computer == "paper")){
        console.log("You win, " + human + " beats " + computer + "!");
        return 1;
    }
    else {
        console.log("You lose, " + computer + " beats " + human + "!");
        return -1;
    }
}
playGame();