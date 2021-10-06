window.onload = function(){

var board = document.getElementById("board"); 
var state = []; //initializing empty array to track state
var lastMove = ""; //tracks whose turn it is



for(var i=0; i<9; i++){
    var sq =  board.children[i];
    sq.classList.add("square"); //puts each of the 9 squares onto the screen
    sq.addEventListener("click", function(){ //adding X and O
        if(lastMove == "O" || lastMove == ""){
            this.innerHTML = "X";
            this.classList.add("X");
            lastMove = "X";
            state.push("X");
        }
        else{
            this.innerHTML = "O";
            this.classList.add("O");
            lastMove = "O";
            state.push("O");
            }
    
    
        }); //end event listener function
    }; //end for loop


}








