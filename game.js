function getComputerChoice() {
    const choiceNumber = Math.floor(Math.random()*3);
    if (choiceNumber==1) {
      alert ("Computer had Rock.");
      return 'rock';
    }else if(choiceNumber==2){
      alert ("Computer had Paper.");
      return 'paper';
    }else{
      alert ("Computer had Scissors.");
      return 'scissors';
    }
  }
  
  function playerRound(playerSelection, computerSelection){
    
    let winner;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection==computerSelection)
      winner = 'No one, We have a Tie.';
    else{
      if (playerSelection=='paper'){
        if (computerSelection=='rock'){
               winner='Player.';
        }else{
            winner = 'Computer.';
        }
      }else if (playerSelection=='rock'){
        if (computerSelection=='scissors'){
               winner='Player.';
        }else{
            winner = 'Computer.';
        }
      }else if (playerSelection=='scissors'){
        if (computerSelection=='paper'){
               winner='Player.';
        }else{
            winner = 'Computer.';
        }
      }
    }
    alert( `Winner of Round is ${winner}` );
    return winner;
  }
  
  function game(){
    
    for (let i = 0; i < 5; i++) {
      var playerSelection = prompt("Choose between: \nRock \nPaper \nScissors");
      let computerSelection = getComputerChoice();
      
      const n = playerRound(playerSelection, computerSelection);
      var p=0;
      var c=0;
      if (n=='Player.'){
        p++;
      } else if (n=='Computer.'){
        c++;
      } 
    }
    
    alert ("Game Over");
    if (p==c) {
      alert ("The result is: Tie!");
    }else if(p>c){
      alert ("The result is: Player wins!");
    }else{
      alert ("The result is: Computer wins!");
    }
  }
  
  game();