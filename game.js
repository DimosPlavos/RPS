const game = () =>{
  let pScore =0
  let cScore =0
  let emojiP; 
  let emojiC;
  //Update Text
  const winner = document.querySelector(".winner");
  
  const playRound = () =>{
    const selections = document.querySelectorAll(".playerSelection button");
  const computerOptions = ["rock", "paper", "scissors"];
  
  selections.forEach(sel => {
      sel.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber]; 
        //Player Choice
        const playerChoice = sel.dataset.selection
        if (pScore==5 || cScore==5) return;
         compareHands(playerChoice, computerChoice);
        
      });
    
    });  
  }

  const compareHands = (playerChoice, computerChoice) => {
 
    const winner = document.querySelector(".winner");
    //Checking for a tie
    
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      if (playerChoice === "rock") emojiP = "✊";
      else if (playerChoice === "paper") emojiP = "✋";
      else emojiP = "✌";
      emojiC = emojiP;
      updateScore();
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      emojiP = "✊";
      if (computerChoice === "scissors") {
        emojiC = "✌";
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        
        return;
      } else {
        emojiC = "✋";
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      emojiP = "✋";
      if (computerChoice === "scissors") {
        emojiC = "✌";
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        emojiC = "✊";
        winner.textContent = "Player Wins";
        
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      emojiP = "✌";
      if (computerChoice === "rock") {
        emojiC = "✊";
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        emojiC = "✋";
        winner.textContent = "Player Wins";
        
        pScore++;
        updateScore();
        return;
      }
    }
  };
  
   const updateScore = () => {
     if (pScore==5) {
        winner.textContent = "You are the winner!";
      }
      if (cScore==5) {
      winner.textContent = "Computer is the winner!";
      }
      const PR = document.querySelector('[data-your-emoji]')
      const CR = document.querySelector('[data-computer-emoji]')
      const playerScore = document.querySelector('[data-your-score]')
      const computerScore = document.querySelector('[data-computer-score]')
      PR.textContent = emojiP;
      CR.textContent = emojiC;
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
  playRound();
};

game();
  