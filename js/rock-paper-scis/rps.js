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

let player = 0,
    computer = 0,
    outcome = '';

function playRound(playerSelection, computerSelection) {
    // playerSelection =  prompt('Choose Rock / Paper / Scissors:').toLowerCase();

    // Validate input
    // if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
    //     return 'Enter a valid input.';
    // }
    computerSelection = getComputerChoice();
    const p1 = document.createElement('p');
    p1.textContent = 'You chose ' + playerSelection + '\nComputer chose ' + computerSelection;

    // Declare winner for one which reaches 5 points
    if (player === 5) {
        const p03 = document.createElement('p');
        p03.textContent = 'You won the game :)';
        p03.style.color = 'green';
        div1.appendChild(p03);
        player = 0;
        computer = 0;
        return 'You won the game :)';
    } else if (computer === 5) {
        const p04 = document.createElement('p');
        p04.textContent = 'You lost the game :(';
        p04.style.color = 'yellow';
        div1.appendChild(p04);
        player = 0;
        computer = 0;
        return 'You lost the game :(';
    }

    // RPS RUle
    if (playerSelection === computerSelection) {
        const p2 = document.createElement('p');
        p2.textContent = 'Draw!';
    // Clear div before appending current paragraph
        div.innerHTML = ''; 
        div1.innerHTML = '';
        div.appendChild(p1);
        div.appendChild(p2);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        const p3 = document.createElement('p');
        p3.textContent = 'You lose! Paper beats Rock.';
        div.innerHTML = '';
        div1.innerHTML = '';
        div.appendChild(p1);
        div.appendChild(p3);
        computer += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        const p4 = document.createElement('p');
        p4.textContent = 'You lose! Scissors beats Paper.';
        div.innerHTML = '';
        div1.innerHTML = '';
        div.appendChild(p1);
        div.appendChild(p4);
        computer += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        const p5 = document.createElement('p');
        p5.textContent = 'You lose! Rock beats Scissors.';
        div.innerHTML = '';
        div1.innerHTML = '';
        div.appendChild(p1);
        div.appendChild(p5);
        player += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        const p6 = document.createElement('p');
        p6.textContent = 'You win! Rock beats Scissors.';
        div.innerHTML = '';
        div1.innerHTML = '';
        div.appendChild(p1);
        div.appendChild(p6);
        player += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        const p7 = document.createElement('p');
        p7.textContent = 'You win! Paper beats Rock.';
        div.innerHTML = '';
        div1.innerHTML = '';
        div.appendChild(p1);
        div.appendChild(p7);
        player += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        const p8 = document.createElement('p');
        p8.textContent = 'You win! Scissors beats Paper.';
        div.innerHTML = '';
        div1.innerHTML = '';
        div.appendChild(p1);
        div.appendChild(p8);
        player += 1;
    }
}

// This fxn is on halt
// function game() {
//     let player = 0,
//         computer = 0,
//         outcome;
//     // for (let m = 0; m < 5; m++) {
//         // Capture and return value of playRound fxn
//         outcome = playRound();
//         const p01 = document.createElement('p');
//         p01.textContent = outcome;
//         div.appendChild(p01);
//     // }
//         // Store values
//         if (outcome === 'Draw!') {

//         } else if (outcome.substring(0, 7) === 'You win') {
//             player += 1;
//         } else if (outcome.substring(0, 8) === 'You lose') {
//             computer += 1;
//         }
//         const p02 = document.createElement('p');
//         p02.textContent = `Player score: ${player} \nComputer score: ${computer}`;
//         div.appendChild(p02);
//         // console.log(`Player score: ${player} \nComputer score: ${computer}`);
//     // }

//     if (player > computer) {
//         const p03 = document.createElement('p');
//         p03.textContent = 'You won the game :)';
//         div.appendChild(p03);
//         return 'You won the game :)';
//     } else if (player < computer) {
//         const p04 = document.createElement('p');
//         p04.textContent = 'You lost the game :(';
//         div.appendChild(p04);
//         return 'You lost the game :(';
//     } else {
//         const p05 = document.createElement('p');
//         p05.textContent = 'You did not follow rules of the game';
//         div.appendChild(p05);
//         return 'You did not follow rules of the game';
//     }
// }

const btn1 = document.createElement('button');
btn1.textContent = 'Rock';
btn1.addEventListener('click', () => {
    console.log('Rock button clicked!');
    playRound('rock', getComputerChoice());
})
document.body.appendChild(btn1);

const btn2 = document.createElement('button');
btn2.textContent = 'Paper';
btn2.addEventListener('click', () => {
    console.log('Paper button clicked!');
    playRound('paper', getComputerChoice());
})
document.body.appendChild(btn2);

const btn3 = document.createElement('button');
btn3.textContent = 'Scissors';
btn3.addEventListener('click', () => {
    console.log('Scissors button clicked!');
    playRound('scissors', getComputerChoice());
})
document.body.appendChild(btn3);

const div = document.createElement('div');
document.body.appendChild(div);

const div1 = document.createElement('div');
document.body.appendChild(div1);
