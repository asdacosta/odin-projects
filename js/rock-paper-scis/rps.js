// Problem: Playing Rock Paper Scissors with computer

// Algorithm 
// 1. Create GETCOMPUTERCHOICE function to randomly return Rock/Paper/Scissors.
// 2. Create PLAYROUND function that plays a round of the game taking two parameters: PLAYERSELECTION & COMPUTERSELECTION.
//      - Use PLAYERSELECTION to take case-insensitive input.
//      - PLAYSELELCTION should take valid inputs.
//      - Assign GETCOMPUTERCHOICE to COMPUTERSELECTION
//      - Create if-statements for the Rock-Paper_Scissors rule
//      - Return the string "You win! $ beats $" and "You lose! $ beats $" to declare player as winner or loser of a round correspondingly.
// 3. Create GAME() function.
//      - Use PLAYROUND to play 5 round game.
//          * It should keep score.
//          * It reports winner/loser at end.
// 4. Use console.log() to display results or each round and winner.

// Pseudocode
// 1:   
//      FXN getComputerChoice()
//          RETURN either 'Rock', 'Paper', or 'Scissors';
//      END-FXN
// 2. 
//      FXN playRound(playerSelection, computerSelection)
//          CONST playerSelection = case insensitive input;
//          IF (playerSelection is not Rock or Paper or Scissors)
//              RETURN 'Please enter a valid selection.';
//          END-IF
// 
//          CONST computerSelection = getComputerChoice();
// 
//          IF (playerSelection is computerSelection)
//              RETURN 'It's a draw!';
//          ELSE IF ((playerSelection is Rock AND computerSelection is Paper) ||
//                  (playerSelection is Paper AND computerSelection is Scissors) ||
//                  (playerSelection is Scissors AND computerSelection is Rock))
//              RETURN 'You lose! Paper beats Rock';
//          ELSE IF ((playerSelection is Rock AND computerSelection is Scissors) ||
//                   (playerSelection is Paper AND computerSelection is Rock) ||
//                   (playerSelection is Scissors AND computerSelection is Paper))
//              RETURN 'You win! Rock beats Scissors';
//          END-IF
//      END-FXN
// 3.
//      FXN game()
//          LET player, computer, result;
//          FOR (m = 1; m <= 5; m++)
//              playRound(playerSelection, computerSelection);
// 
//              IF (playRound(playerSelection, computerSelection) is 'It's a draw!' )
//                  player += 0;
//                  computer += 0;
//              ELSE IF (playRound(playerSelection, computerSelection) is 'You win! Rock beats Scissors' )
//                  player += 1;
//                  computer += 0;
//              ELSE IF (playRound(playerSelection, computerSelection) is 'You lose! Paper beats Rock' )
//                  player += 0;
//                  computer += 1;
//              END-IF
// 
//              RETURN 'Your score is $player';
//          END-FOR
// 
//          IF (player > computer)
//              result = 'Won the game :)';
//          ELSE 
//              result = 'Lost the game :(';
//          END-IF
//      END-FXN


// Randomly return any of the strings
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection =  prompt('Choose Rock / Paper / Scissors:').toLowerCase();
    // Validate input
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
        return 'Enter a valid input.';
    }
    computerSelection = getComputerChoice();
    console.log('You chose ' + playerSelection + '\nComputer chose ' + computerSelection);

    // RPS RUle
    if (playerSelection === computerSelection) {
        return 'Draw!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose! Paper beats Rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beats Paper.';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors.';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! Rock beats Scissors.'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper beats Rock.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! Scissors beats Paper.';
    }
}


function game() {
    let player = 0,
        computer = 0,
        result, outcome;
    // for (let m = 0; m < 5; m++) {
        // Capture and return value of playRound fxn
        outcome = playRound();
        console.log(outcome);

        // Store values
        if (outcome === 'Draw!') {

        } else if (outcome.substring(0, 7) === 'You win') {
            player += 1;
        } else if (outcome.substring(0, 8) === 'You lose') {
            computer += 1;
        }
        console.log(`Player score: ${player} \nComputer score: ${computer}`);
    // }

    if (player > computer) {
        return 'You won the game :)';
    } else if (player < computer) {
        return 'You lost the game :(';
    } else {
        return 'You did not follow rules of the game';
    }
}