let randomNumber = Math.floor (Math.random() * 3 + 1);
console.log('coputer input is ' + randomNumber);
let computerMove = 'nieznany ruch'
if(randomNumber == 1) {
    computerMove = 'kamień';
} else {
    if(randomNumber == 2) {
        computerMove = 'papier';
    } else {
        computerMove = 'nożyce';
    }
}
console.log('cpu move is ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3:nożyce');
console.log('player input is ' + playerInput);
let playerMove = 'Nieznany ruch';
if(playerInput == 1) {
    playerMove = 'kamień';
} else {
    if(playerInput == 2) {
        playerMove = 'papier'
    } else {
        if(playerInput == 3) {
            playerMove = 'nożyce';
        }
    }
}
console.log('player move is ' + playerMove);
printMessage('Mój ruch to ' + computerMove + ' - twój to ' + playerMove);

if(computerMove == 'kamień' && playerMove == 'kamień') {
    printMessage('Remis!');
} else {
    if(computerMove == 'kamień' && playerMove == 'papier') {
        printMessage('Ty wygrałeś');
    } else {
        if(computerMove == 'kamień' && playerMove == 'nożyce') {
            printMessage('Wygrałem');
        } else {
            if(computerMove == 'papier' && playerMove == 'kamień') {
                printMessage('Wygrałem');
            } else {
                if(computerMove == 'papier' && playerMove == 'papier') {
                    printMessage('Remis!');
                } else {
                    if(computerMove == 'papier' && playerMove == 'nożyce') {
                        printMessage('Ty wygrałeś!');
                    } if(computerMove == 'nożyce' && playerMove == 'kamień') {
                        printMessage('Ty Wygrałeś!');
                    } else {
                        if(computerMove == 'nożyce' && playerMove == 'papier') {
                            printMessage("Wygrałem!");
                        } else {
                            if(computerMove == 'nożyce' && playerMove == 'nożyce') {
                                printMessage('Remis!');
                            } else {
                                printMessage('Wykonałeś niedozwolony ruch - wybierz 1 lub 2 lub 3')
                            }
                        }
                    }
                }
            }
        }
    }
}