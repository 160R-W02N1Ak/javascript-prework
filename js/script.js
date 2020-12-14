{ 

    const displayResult = function (computerMove, playerMove) { 
        console.log('moves:', computerMove, playerMove);
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

    const getMoveName = function (randomNumber){
        if(randomNumber == 1){
            return 'kamień';
        } else if (randomNumber == 2){
            return  'papier';
        } else if (randomNumber == 3){
            return  'nożyce';
        }
    }


    const playGame = function (playerInput){
    clearMessages()
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);
    console.log('Gracz wpisał: ' + playerInput);
    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);
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
   
}


 