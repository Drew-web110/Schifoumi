// main function
const game = () => {
  //scores
  let pscore = 0;
  let cscore = 0;

  //start the game
  const start = () => {
    const startBtn = document.querySelector(".play");

    //change screens display
    startBtn.addEventListener("click", () => {
      const intro = document.querySelector(".intro");
      const gamescreen = document.querySelector(".game");

      intro.style.opacity = "0";
      gamescreen.style.opacity = "1";
      gamescreen.style.top = "-35%";
    });
  };

  const playGame = () => {
    const options = document.querySelectorAll(".option-btns button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".images img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //computer options
    const compOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //reset hands image to default
        playerHand.src = `./assets/rock.png`;
        computerHand.src = `./assets/rock.png`;

        //computer choices
        const compNum = Math.floor(Math.random() * 3);
        const computerChoice = compOptions[compNum];

        //playerChoice
        const playerChoice = option.textContent;
        console.log(playerChoice);

        //animate hands
        playerHand.style.animation = "shakehand 2s ease";
        computerHand.style.animation = "shakeComphand 2s ease";

        setTimeout(() => {
          //update image
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;

          compareHands(playerChoice, computerChoice);
          updateScore();
        }, 2000);
      });
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner-text");
    //compare hands choice

    //check for tie
    if (playerChoice === computerChoice) {
      winner.textContent = "its a tie";
      return;
    }

    //check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins";
        pscore++;
        return;
      } else {
        winner.textContent = "computer wins";
        cscore++;
        return;
      }
    }

    //check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer wins";
        cscore++;
        return;
      } else {
        winner.textContent = "Player wins";
        pscore++;
        return;
      }
    }

    //check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player wins";
        pscore++;
        return;
      } else {
        winner.textContent = "Computer wins";
        cscore++;
        return;
      }
    }
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".pscore");
    const computerScore = document.querySelector(".comscore");

    playerScore.textContent = pscore;
    computerScore.textContent = cscore;
  };

  start();
  playGame();
};

//call the functions
game();
