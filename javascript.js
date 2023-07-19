let computerselection
let playerselection
let randomnumber
let playerscore = 0
let computerscore = 0

// get the random computer selection
function getcomputerselection() {
    randomnumber = Math.random()*3;
    if (randomnumber <= 1) {
        computerselection = "Rock"
    }   else if (randomnumber > 1 && randomnumber <= 2) {
        computerselection = "Paper"
    }   else if (randomnumber > 2 && randomnumber <= 3) {
        computerselection = "Scissor"
    }
}
// get the player selection through prompt
const btnrock = document.querySelector("#rock");
btnrock.addEventListener('click', () => {
    playerselection = "Rock";
});


//determine who won
for (let i = 0; i <= 1000; i++) {
    getcomputerselection()
    if (playerselection === computerselection) {
        console.log("Round " + i + ": " + playerselection + " vs " + computerselection + ": Tie (" + playerscore + ":" + computerscore + ")")
    }
    else if (
        (playerselection === "Rock" && computerselection === "Paper") ||
        (playerselection === "Paper" && computerselection === "Scissor") ||
        (playerselection === "Scissor" && computerselection === "Rock")
        ) {
        computerscore = computerscore + 1
        console.log("Round " + i + ": " + playerselection + " vs " + computerselection + ": Computer wins! (" + playerscore + ":" + computerscore + ")")

    }
    else if (
        (playerselection === "Rock" && computerselection === "Scissor") ||
        (playerselection === "Paper" && computerselection === "Rock") ||
        (playerselection === "Scissor" && computerselection === "Paper")
        ) {
        playerscore = playerscore + 1
        console.log("Round " + i + ": " + playerselection + " vs " + computerselection + ": Player wins! (" + playerscore + ":" + computerscore + ")")
    }
    else {
        console.log("-Invalid input- " + playerselection + " vs " + computerselection)
    }
}





