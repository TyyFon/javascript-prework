{
    const playGame = function (playerInput) {
        clearMessages()
        const getMoveName = function(argMoveId){
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
        const displayResult = function(argComputerMove, argPlayerMove) {
            printMessage('Zagrałem ' + argComputerMove + ' a Ty ' + argPlayerMove);
            if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
                printMessage(playerScore);
            } else {
                if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
                    printMessage(computerScore);
                } else {
                    if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
                        printMessage(computerScore);
                    } else {
                        if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
                            printMessage(playerScore);
                        } else {
                            if(argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
                                printMessage(computerScore);
                            } else {
                                if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
                                    printMessage(playerScore);
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
        const computerScore = 'Tym razem ja wygrałem';
        const playerScore = 'Ty wygrałeś';
        const randomNumber = Math.floor (Math.random() * 3 + 1);
            console.log('coputer input is ' + randomNumber);        
        const computerMove = getMoveName(randomNumber);
            console.log('cpu move is ' + computerMove);
        const playerMove = getMoveName(playerInput);
            console.log('player move is ' + playerMove);
        displayResult(computerMove, playerMove);
    }
    const startButtonRock = document.getElementById('rock'),
        startButtonPaper = document.getElementById('paper'),
        startButtonScissors = document.getElementById('scissors');
    const buttonClickedRock = function() {
        console.log('Clicked button Rock');
        playGame(1);
    }
    const buttonClickedPaper = function() {
        console.log('Clicked button Paper');
        playGame(2);
    }
    const buttonClickedScissors = function() {
        console.log('Clicked button Scissors');
        playGame(3);
    }
    startButtonRock.addEventListener('click', buttonClickedRock);
    startButtonScissors.addEventListener('click', buttonClickedScissors);
    startButtonPaper.addEventListener('click', buttonClickedPaper);
}