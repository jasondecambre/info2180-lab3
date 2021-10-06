window.onload = function(){

var board = document.getElementById("board"); 
var state = ["","","","","","","","",""]; //initializing empty array to track state
var lastMove = ""; //tracks whose turn it is



for(var i=0; i<9; i++){
    var sq =  board.children[i];
    sq.classList.add("square"); //puts each of the 9 squares onto the screen

    //adding ability for players to enter X and O (exercise 2)
    sq.addEventListener("click", function(){
        //Disallow cheating
        if(this.innerHTML != "X" && this.innerHTML != "O"){
                 
         
        if(lastMove == "" || lastMove != "X"){
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
        else if(lastMove != "" || lastMove != "O"){
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
    } // end "disallow cheating" if-statement   
    
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

    document.getElementsByClassName("btn")[0].addEventListener("click", function(){
        console.log("button clicked");
        document.getElementById("status").innerHTML = "Move your mouse over a square and click to play an X or an O.";
        document.getElementById("status").classList.remove("you-won");
        //I was getting an error with the "<" sign in a for loop so doing manually
        
        for(var i=0;i<9;i++){
            board.children[i].innerHTML = "";
            board.children[i].classList.remove("X");
            board.children[i].classList.remove("O");
        } 
        lastMove = "";
    });

}








