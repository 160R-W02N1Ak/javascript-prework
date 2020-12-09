function playGame(playerInput){
    clearMessages()
    playerInput

    function getMoveName(randomNumber){
        if(randomNumber == 1){
            return 'kamień';
        } else if (randomNumber == 2){
            return  'papier';
        } else if (randomNumber == 3){
            return  'nożyce';
        }
    }
    function displayResult (computerMove, playerMove) { 
        {console.log('moves:', computerMove, playerMove);}
        if (computerMove == 'kamień' && playerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if (computerMove == 'kamień' && playerMove == 'nożyce'){
            printMessage('Komputer wygrywa!');
        } else if (computerMove == 'kamień' && playerMove == 'kamień'){
            printMessage('Remis!');
        } else if (computerMove == 'papier' && playerMove == 'kamień'){
            printMessage('Komputer wygrywa!');
        } else if (computerMove == 'papier' && playerMove == 'papier'){
            printMessage('Remis!');
        } else if (computerMove == 'papier' && playerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        } else if (computerMove == 'nożyce' && playerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        } else if (computerMove == 'nożyce' && playerMove == 'papier'){
            printMessage('Komputer wygrywa!');
        } else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
            printMessage('Remis!');
        }
    } 
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);

    /*if(randomNumber == 1){
      computerMove = 'kamień';
    } else if(randomNumber == 2){
    computerMove = 'papier';
    } else if(randomNumber == 3){
    computerMove = 'nożyce';
    }*/
    printMessage('Mój ruch to: ' + computerMove);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/
    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = getMoveName(playerInput);

    /*if(playerInput == '1'){
    playerMove = 'kamień';
    } else if (playerInput == '2'){
    playerMove = 'papier';
    } else if (playerInput == '3'){
    playerMove = 'nożyce';
    }*/
    printMessage('Twój ruch to: ' + playerMove);
    /*
    if (computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
    } else if (computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Komputer wygrywa!');
    } else if (computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
    } else if (computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Komputer wygrywa!');
    } else if (computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
    } else if (computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
    } else if (computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
    } else if (computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Komputer wygrywa!');
    } else if (computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
    }
    */
    displayResult(computerMove, playerMove);
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });
   
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });
   

 /* document.getElementById('play-rock').addEventListener('click', function(){
    printMessage('Kamień');
  });
   
  document.getElementById('play-paper').addEventListener('click', function(){
    printMessage('Papier');
  });

  document.getElementById('play-scissors').addEventListener('click', function(){
    printMessage('Nożyce');
  })*/