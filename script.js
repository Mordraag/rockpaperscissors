let computerScore = 0
let playerScore = 0

function getComputerChoice(compChoice){
    let choiceNum = Math.floor(Math.random() * 3)
    if (choiceNum === 0){
        compChoice = "rock"
    }else if (choiceNum === 1){
        compChoice = "paper"
    }else if (choiceNum === 2){
        compChoice = "scissors"
    }
    return compChoice
}

function playGame(message){
    let = playerSelection = prompt("Rock Paper Scissors?:")
    let = computerSelection = getComputerChoice()
    console.log("Player chosed " + playerSelection)
    console.log("Computer chosed " + computerSelection)
    if (playerSelection === computerSelection){
        return message = "It's a tie!"
    }
    else if (
        playerSelection === "paper" && computerSelection === "rock"||
        playerSelection === "rock" && computerSelection === "scissors"||
        playerSelection === "scissors" && computerSelection === "paper"
    )
    {
        playerScore = playerScore++
        return message = "Player Wins!"
        
    }else
    {
        computerScore = computerScore++
        return message = "Computer Wins!"
    }
}
function game(){
    playGame()
}
    for (let i = 0; i < 5; i++) {
      game()  
     }





console.log(playGame())