let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


//st-3
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

// st-5
const drawGame = () => {
    //console.log("game was draw");
    msg.innerText = "Draw Gamw.  play again";
    msg.style.backgroundColor = "black";
}

//st-7
const showWinner = (userWin, userChoice, compChoice) => {
   if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    //console.log("you win");
    msg.innerText = `you win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
   } else {
    compScore++;
    compScorePara.innerText = compScore;
    //console.log("you lose");
    msg.innerText = `you lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
   }
}

// st-2
const playGame = (userChoice) => {
    //console.log("user choice =",userChoice);
    const compChoice = genCompChoice(); // call genCompChoice
    //console.log("computer choice =", compChoice);

    //st-4
    if(userChoice === compChoice){
        drawGame();
    // st-6
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissors, paper
           userWin =  compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            // scissors, rock
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // paper , rock
            userWin = compScore === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

//st-1
choices.forEach((choice) => {
    //console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})