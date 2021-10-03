function getMoveName(argMoveId) {
    if(argMoveId == 1) {
        return 'kamień';
    } else {
    if(argMoveId == 2) {
        return 'papier';
    } else {
        if(argMoveId == 3) {
            return 'nożyce';
        } else {
            return 'Niedozwolony ruch';
        }
    }
}
}
function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ' a Ty ' + argPlayerMove);
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    } else {
        if(argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Remis!');
        } else {
            if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
                printMessage('Tym razem ja wygrałem');
            } else {
                if(argComputerMove == 'papier' && argPlayerMove == 'papier') {
                   printMessage('Remis!');
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
                                    if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
                                        printMessage('Remis');
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
            }
}
let randomNumber = Math.floor (Math.random() * 3 + 1);
    console.log('coputer input is ' + randomNumber);          
let computerMove = getMoveName(randomNumber);
    console.log('cpu move is ' + computerMove);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3:nożyce');
    console.log('player input is ' + playerInput);
let playerMove = getMoveName(playerInput);
    console.log('player move is ' + playerMove);
displayResult(computerMove, playerMove);
console.log('argComputerMove ' + computerMove + '/' + 'argPlayerMove ' + playerMove);