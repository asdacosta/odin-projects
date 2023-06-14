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
//          LET playerSelection = case insensitive input;
//          IF (playerSelection is not Rock or Paper or Scissors)
//              RETURN 'Please enter a valid selection: Rock, Paper, or Scissors';
//              BREAK;
//          END-IF
// 
//          LET computerSelection = getComputerChoice();
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


function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);

    switch (randomNum) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}