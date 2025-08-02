const getComputerChoice = function () {
    var choice = "";
    var random = Math.ceil(Math.random() * 3);
    console.log(random);
    if (random === 1) {
        choice = "Rock";
    }
    else if (random === 2) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }
    return choice;
};

console.log(getComputerChoice());

 const getHumanChoice = function() {
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

    return userChoice;
};
    

    console.log(getHumanChoice());

