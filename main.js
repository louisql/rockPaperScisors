let move = ['rock', 'paper', 'scisors'];


function computerPlay(table){
    return random = Math.floor(Math.random() * table.length);
}



function oneRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock'){
        if (computerSelection == 'paper') { 
            return 'You lose, paper beats rock'
        } else if (computerSelection == 'scissors'){
            return 'You win, rock beats scissors'
        } else return 'Draw, play again.'
    }
    if (playerSelection == 'paper'){
        if (computerSelection == 'scissors') { 
            return 'You lose, scissors beats paper'
        } else if (computerSelection == 'rock'){
            return 'You win, paper beats rock'
        } else return 'Draw, play again.'
    }
    if (playerSelection == 'scissors'){
        if (computerSelection == 'rock') { 
            return 'You lose, rock beats scissors'
        } else if (computerSelection == 'paper'){
            return 'You win, scissors beats paper'
        } else return 'Draw, play again.'
    }
}

console.log(oneRound('rock', 'paper'));

for (let i = 0; i < 5; i++){
    let playerSelection = prompt('Select your move: rock, paper, or scissors', 'rock');
    let computerPlayRound = computerPlay(move);
    console.log(oneRound(playerSelection, computerPlayRound));
    
}
