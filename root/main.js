var word;
const wordList = [
    "CAROL", "PAINS", "CRACK", "BOXES", "STATE", "PLAYS", "START", "CRANE", "ESSAY", "share", "again", "enter"
];
const validLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var currentRow = 0;
var letterInputs = [];
let iteration;
function resetBoard(){
    let randomNumber = Math.floor(Math.random() * wordList.length);
    let para;
    let node;
    let element = document.getElementById('div1');
    let child = document.getElementById('p1');
    word = wordList[randomNumber]
    for (let x=0; x < 5; x++){
        for (let y=0; y < 5; y++){
          para = document.createElement("p3");
          para.setAttribute("id", y + "," + x)
          node = document.createTextNode("_");
          para.appendChild(node);

          element.insertBefore(para, child);
        }
        para = document.createElement("br");
        element.insertBefore(para, child);
      }
    }

function wordInput(OGletter, row){
    let letter = OGletter.toUpperCase();
    let location = "";
    iteration = letterInputs.length - 1;
    if (letter == "BACKSPACE"){
        letterInputs.pop();
        iteration = letterInputs.length - 1;
        location = iteration + 1 + "," + currentRow;
        document.getElementById(location).innerHTML = "_";

    } else if (validLetters.includes(letter)){
         if (letterInputs.length != 5){
            letterInputs.push(letter);
            iteration = letterInputs.length - 1;
            location = iteration + "," + currentRow;
            document.getElementById(location).innerHTML = letter;
        }

    } else if (letter == "ENTER"){
        let usersWord = "";
        const workableWord = word.split("")
        if (letterInputs.length == 5){
            for (const [index, lettuh] of letterInputs.entries()){
                usersWord += lettuh;
                if (lettuh == workableWord[index]){
                    location = index + "," + currentRow;
                    document.getElementById(location).style.backgroundColor = "#33cc33";
                } else if (workableWord.includes(lettuh)){
                    location = index + "," + currentRow;
                    document.getElementById(location).style.backgroundColor = "#ffff00";
                } else{
                    location = index + "," + currentRow;
                    document.getElementById(location).style.backgroundColor = "#ff0000";
                }
            }
            if (usersWord == word){
                winGame();
            }
            letterInputs = [];
            currentRow++;
            if (currentRow == 5){
                loseGame()
            }
        }

    }

};

function winGame(){
    document.getElementById("mainbutton").innerHTML = "You won! Click to play again."
        document.getElementById("mainbutton").style.backgroundColor = "#00FF00"
}

function loseGame(){
    document.getElementById("mainbutton").innerHTML = "You lost! Click to play again."
    document.getElementById("mainbutton").style.backgroundColor = "#FF0000"
}

resetBoard();
console.log(word)
document.addEventListener("keydown", function(event){
    wordInput(`${event.key}`, currentRow);
});
