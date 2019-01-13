//var text;
var possible = "abcdefghijklmnopqrstuvwxyz";
var guessRemaining = 9; 
      var wins = 1;
      var lose = 1;
      var arr = [];
         
   function letterGuess() {
   
   text = possible.charAt(Math.floor(Math.random() * possible.length));
   
   // test
   console.log(text)

   document.onkeypress = compare;       
}

function compare() {
    
   var k = event.key;
   if(text==k){
      document.getElementById("wins").innerHTML = wins++ 
      document.getElementById("inpt").value = [];
      document.getElementById("imag").innerHTML = (" ");
      document.getElementById("letterToGuess").innerHTML = ("*");
      guessRemaining = 9;
      document.getElementById("par").innerHTML = guessRemaining;
      arr = [];
      document.getElementById("letterToGuess").innerHTML = ("Good Job!!!");
      document.getElementById("imag").innerHTML = "<img src ='assets/images/happy.jpeg'>";
      letterGuess();
   } else {
      for (var i=0; i < guessRemaining+1; i++) {
         arr.push(k);
         document.getElementById("inpt").value = arr;
         guessRemaining -= 1;
         document.getElementById("par").innerHTML = guessRemaining; 
         document.getElementById("imag").innerHTML = (" ")
         document.getElementById("letterToGuess").innerHTML = ("*")

         if (guessRemaining==0) {
            document.getElementById("inpt").value = []; 
            document.getElementById("loses").innerHTML = lose++
            document.getElementById("imag").innerHTML = "<img src =\"assets/images/sad.jpeg \">"
            document.getElementById("letterToGuess").innerHTML = ("The letter to guess was : " + " ' " + text.toUpperCase() + " ' ");
            guessRemaining=9;

            document.getElementById("par").innerHTML = guessRemaining;
            
            arr = [];
            
            letterGuess();
            
         }
         break;
      }
           
    }
    
    
 }
 
document.onkeypress = letterGuess;
