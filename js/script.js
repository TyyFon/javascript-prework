function playGame (playerInput) {
    clearMessages()
    function getMoveName(argMoveId) {
        if(argMoveId == 1) {
            return 'kamień';
        } else {
            if(argMoveId == 2) {
                return 'papier';
            } else {
                return 'nożyce';
            }
        }
    }
    function displayResult(argComputerMove, argPlayerMove) {
        printMessage('Zagrałem ' + argComputerMove + ' a Ty ' + argPlayerMove);
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Ty wygrywasz!');
        } else {
            if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
                printMessage('Tym razem ja wygrałem');
            } else {
                if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
                    printMessage('Tym razem ja wygrałem');
                } else {
                    if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
                        printMessage('Ty wygrywasz!');
                    } else {
                        if(argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
                            printMessage('Tym razem ja wygrałem');
                        } else {
                            if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
                                printMessage('Ty wygrałeś!');
                            } else {
                                if(argComputerMove == argPlayerMove) {
                                    printMessage('Remis!');
                                } else {
                                    printMessage('wykonałeś niedozwolony ruch - wybierz 1 lub 2 lub 3');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    let randomNumber = Math.floor (Math.random() * 3 + 1);
        console.log('coputer input is ' + randomNumber);        
    let computerMove = getMoveName(randomNumber);
        console.log('cpu move is ' + computerMove);
    let playerMove = getMoveName(playerInput);
        console.log('player move is ' + playerMove);
    displayResult(computerMove, playerMove);
    console.log('argComputerMove ' + computerMove + '/' + 'argPlayerMove ' + playerMove);
}
function buttonClickedRock(){
    console.log('Clicked button Rock');
    playGame(1);
}
let startButtonRock = document.getElementById('rock');
startButtonRock.addEventListener('click', buttonClickedRock);
function buttonClickedPaper(){
    console.log('Clicked button Paper');
    playGame(2);
}
let startButtonPaper = document.getElementById('paper');
startButtonPaper.addEventListener('click', buttonClickedPaper);
function buttonClickedScissors(){
    console.log('Clicked button Scissors');
    playGame(3);
}
let startButtonScissors = document.getElementById('scissors');
startButtonScissors.addEventListener('click', buttonClickedScissors);