let humanScore = 0

let computerScore = 0


const getComputerChoice = () => {
    var choice = "";
    var random = Math.ceil(Math.random() * 3);

    if (random === 1) {
        choice = "Rock";
    }
    else if (random === 2) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }

    // console.log(`Computer choice: ${choice}`)
    return choice;
};

 const getHumanChoice = () => {
    var userChoice = "";
    const userPrompt = prompt("Choose Rock, Paper, or Scissors");

    if (userPrompt === "Rock" || userPrompt === "rock") {
        userChoice = "Rock";
    } else if (userPrompt === "Paper" || userPrompt === "paper") {
        userChoice = "Paper";
    } else if (userPrompt === "Scissors" || userPrompt === "scissors") {
        userChoice = "Scissors";
    } else {
        alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
        return getHumanChoice(); 
    }

    // console.log(`Human choice: ${userChoice}`);
    return userChoice;
};
    


    const playRound = (humanChoice, computerChoice) => {

        console.log("Human's choice: " + humanChoice);
        console.log("Computer's choice: " + computerChoice);

        if (humanChoice === computerChoice) {
          console.log("It's a tie!");
        } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
          console.log("Human wins!");
          humanScore++
        } else {
          console.log("Computer wins!");
          computerScore++
        }

        console.log(`Human score: ${humanScore}`)
        console.log(`Computer score: ${computerScore}`);
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);