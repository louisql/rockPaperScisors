let move = ['rock', 'paper', 'scissors'];


function computerPlay(table){
    return random = Math.floor(Math.random() * table.length);
}



function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock'){
        if (computerSelection == 'paper') { 
            // return computerScore++;
            return 'You lose, paper beats rock'
        } else if (computerSelection == 'scissors'){
            // return playerScore++;
            return 'You win, rock beats scissors'
        } else return 'Draw, play again.'
    }
    if (playerSelection == 'paper'){
        if (computerSelection == 'scissors') { 
            // return cptRoundResult++;
            return 'You lose, scissors beats paper'
        } else if (computerSelection == 'rock'){
            // return playerRoundResult++;
            return 'You win, paper beats rock'
        } else return 'Draw, play again.'
    }
    if (playerSelection == 'scissors'){
        if (computerSelection == 'rock') { 
            return cptRoundResult++;
            // return 'You lose, rock beats scissors'
        } else if (computerSelection == 'paper'){
            // return playerRoundResult++;
            return 'You win, scissors beats paper'
        } else return 'Draw, play again.'
    }
}

let playerScore = 0,
    computerScore = 0,
    nbOfDraw = 0;

for (let i = 0; i < 5; i++){
    let playerSelection = prompt('Select your move: rock, paper, or scissors', 'rock'),
        computerPlayRound = move[computerPlay(move)],
        result = playRound(playerSelection, computerPlayRound);
        console.log(result);
        if (result.includes('You win')){
            playerScore++;
        } else if(result.includes('You lose')){
            computerScore++
        } else nbOfDraw++;
}

if (playerScore > computerScore){
    console.log('You win! Your score is ' + playerScore + ' vs ' + computerScore + ' for the computer');
} else if (computerScore > playerScore){
    console.log('You lose... Your score is ' + playerScore + ' vs ' + computerScore + ' for the computer');
} else console.log('It\'s a draw!');


