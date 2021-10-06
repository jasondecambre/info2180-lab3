window.onload = function(){

var board = document.getElementById("board"); 
var state = []; //initializing empty array to track state
var lastMove = ""; //tracks whose turn it is



for(var i=0; i<9; i++){
    var sq =  board.children[i];
    sq.classList.add("square"); //puts each of the 9 squares onto the screen

    //adding ability for players to enter X and O (exercise 2)
    sq.addEventListener("click", function(){ 
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
    
        }); //end event listener function for X and O

    //adding hover effects for exercise 3
    sq.addEventListener("mouseover", function(){
        this.classList.add("hover");
        });
    sq.addEventListener("mouseout", function(){
        this.classList.remove("hover");
         });
         
    }; //end for loop


}








