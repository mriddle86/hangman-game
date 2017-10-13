 


var houseArray = ["lannister", "stark", "baratheon", "targaryen", "tully", "tyrell", "arryn", "greyjoy", "martell" ]

var selectedHouse = "";
var selectedHouseLetter = [];
var blankSet = 0;
var emptySuccessArray = [];
var incorrectEntries = [];

var successCount = 0;
var losses = 1;
var maxGuess = 15;

function begin(){
/*
word is randomly chosen, then seperated into individual letters and temporarily made into blank lines
the blank lines are displayed
15 is set as the maximum amount of guesses
emptysuccessarray and incorrectentries are empty arrays
*/
maxGuess = 15;
incorrectEntries = [];
emptySuccessArray = [];


selectedHouse = houseArray[Math.floor(Math.random() * houseArray.length)];
selectedHouseLetter = selectedHouse.split("");
blankSet = selectedHouseLetter.length;
console.log(selectedHouse);
console.log(selectedHouseLetter);
console.log(blankSet);
console.log(selectedHouse.split(""));
console.log(selectedHouse.length);
console.log(incorrectEntries)
for(var i = 0; i <= selectedHouse.length -1; i++){
    emptySuccessArray[i] = ("_");
}




document.getElementById('guessed').innerHTML = emptySuccessArray.join("");
document.getElementById('remaining').innerHTML = maxGuess;



}


function review(letter){
    /*
    user input checked against letters in chosen word using conditional
    the else inreases against the max guesses
    */

    var selectedHouseLetter = false;

    for(var i = 0; i < blankSet; i++){
        if(selectedHouse[i] === letter){
            selectedHouseLetter = true;

        }
    }

    if(selectedHouseLetter){
        for(i = 0; i < blankSet; i++){
            if(selectedHouse[i] === letter){
            emptySuccessArray[i] = letter;

        }

        }
    }else{
        maxGuess--;
        incorrectEntries.push(letter)
    }


}


function roundComplete(){
    /*
    html is updated with correct guess letters, guesses left, and wrong letters
    */

    document.getElementById('guessed').innerHTML = emptySuccessArray.join(" ");
    document.getElementById('remaining').innerHTML = maxGuess;
    document.getElementById('used-input').innerHTML = incorrectEntries.join(" ");


    
    console.log(selectedHouseLetter);
    console.log(emptySuccessArray);
    if(selectedHouseLetter.join(" ") === emptySuccessArray.join(" ")){
        successCount++;
        document.getElementById('win-image').innerHTML = '<img src="https://static.gamespot.com/uploads/original/1557/15576725/2940488-got.jpg" style="width: 200px;"><br><p>congrats</p>';
        document.getElementById('win-counter').innerHTML = successCount;
        begin();
    }else if(maxGuess === 0){
        document.getElementById('loss-counter').innerHTML  = losses ++;
        document.getElementById('used-input').innerHTML = "";
        document.getElementById('win-image').innerHTML = '<img src="http://www.gamersdecide.com/sites/default/files/authors/u141921/image.jpg" style="width: 200px;"><br><p>you hang</p>';
        begin();
    }




}
begin();
document.onkeyup = function(event){
    /*
    take the typed in letter and pass it through
    */
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(letterGuessed)
    review(letterGuessed)
    roundComplete();


}