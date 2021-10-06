window.onload = function(){

var board = document.getElementById("board"); 
var state = ["","","","","","","","",""]; //initializing empty array to track state
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
            if (won("X")){
                document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                document.getElementById("status").classList.add("you-won");
            }
            else if (won("O")){
                document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                document.getElementById("status").classList.add("you-won");
            }      
        }
        else{
            this.innerHTML = "O";
            this.classList.add("O");
            lastMove = "O";
            if (won("X")){
                document.getElementById("status").innerHTML = "Congratulations! X is the Winner!";
                document.getElementById("status").classList.add("you-won");
            }
            else if (won("O")){
                document.getElementById("status").innerHTML = "Congratulations! O is the Winner!";
                document.getElementById("status").classList.add("you-won");
            }
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

    function won(letter){
        //going through different ways to win
        if (board.children[0].innerHTML == letter && board.children[3].innerHTML == letter && board.children[6].innerHTML == letter)
            return true;
        else if (board.children[1].innerHTML == letter && board.children[4].innerHTML == letter && board.children[7].innerHTML == letter)
            return true;
        else if (board.children[2].innerHTML == letter && board.children[5].innerHTML == letter && board.children[8].innerHTML == letter)
            return true;
        else if(board.children[0].innerHTML == letter && board.children[1].innerHTML == letter && board.children[2].innerHTML == letter)
            return true;
        else if (board.children[3].innerHTML == letter && board.children[4].innerHTML == letter && board.children[5].innerHTML == letter)
            return true;
        else if (board.children[6].innerHTML == letter && board.children[7].innerHTML == letter && board.children[8].innerHTML == letter)
            return true;
        else if (board.children[0].innerHTML == letter && board.children[4].innerHTML == letter && board.children[8].innerHTML == letter)
            return true;
        else if (board.children[2].innerHTML == letter && board.children[4].innerHTML == letter && board.children[6].innerHTML == letter)
            return true;
        else
            return false;
    }

    

}








