// Rock Paper Scissors Game
// keep score
// ask how many sets to play (as prompt)
// limit value entery with regex

const gameArray = ["rock", "Paper", "Scissor"]

let result = {player:0, computer:0}

const Combat = (numPlayer, numComputer) => {
    if (numPlayer == numComputer) {
        return 0
    }else if(numPlayer == 0){
        return numComputer == 2 ? result.player+=1 : result.computer+=1
    }else{
        return numPlayer > numComputer ? result.player+=1 : result.computer+=1
    }
}

const Rand = () => {
    var rand = Math.floor(Math.random()*3);
    return rand
}

const Display = (id, displayProperty) => {
    const myElement = document.querySelector(id);
    const computedDisplay = window.getComputedStyle(myElement).display;
    (computedDisplay !== "none")
     ? (myElement.style.display = "none")
     : (myElement.style.display = displayProperty);
}

let setLimit = -1;

const GameSet = () => {
    const sets = document.getElementById("setNumber").value;
    // regex
    Display("#gameSet", "none"); // hide set
    Display("#gameMain", "block"); //show game
    setLimit += Number(sets);
}

//

const Call = (i) => {
    console.log(playerScore);
    let playerChoice = gameArray.indexOf(i);
    let computerChoice = Rand();
    Combat(playerChoice, computerChoice);
    console.log(result);
    if (setLimit > -1) {
    return result && --setLimit
    }else{
        Display("#gameMain", "none"); // hide game
        Display("#gameFinish", "block"); //show 
        console.log(result);
    }
}







//function reset




