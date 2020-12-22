
window.onload = function Addonclick() {
    var idcasillas = document.getElementsByClassName("casillas");
    for (var i = 0; i < idcasillas.length; i++) {
        this.addEventListener("click", myFunction, false);
    }
}

// Valores barcos
// 0 = empty
// 1 = part of a ship
// 2 = a sunken part of a ship
// 3 = a missed shot
let gameBoard =[
    {"A":[1,1,1,1,1,0,0,0,0]},
    {"B":[1,1,1,1,1,0,0,0,0]},
    {"C":[1,1,1,1,1,0,0,0,0]},
    {"D":[1,1,1,1,1,0,0,0,0]},
    {"E":[1,1,1,1,1,0,0,0,0]},
    {"F":[1,1,1,1,1,0,0,0,0]},
    {"G":[1,1,1,1,1,0,0,0,0]},
    {"H":[1,1,1,1,1,0,0,0,0]},
    {"I":[1,1,1,1,1,0,0,0,0]}   
];

function myFunction (event) {
    var target = event.target.className;
    var dict = [];
    if (target.indexOf('casillas ') === 0 ){
        target = target.substring(9,11)
        targetLetter = target.substring(0,1)
        targetNumber = target.substring(1,2)
      //  dict.push({ key:"target", value: target,{key:"letter", value= targetLetter},{key:"number",value=targetNumber}); 
   /*if (gameBoard.targetLetter[targetNumber] == 0){
       getElementsByClassName("target") and add class "waterspace" y suma +3}
    else if (gameBoard.targetLetter[targetNumber] == 1){
        getElementsByClassName("target") and add class "touchspace" y suma +1}
    else deja como estaba gameBoard*/
   }

      console.log(target);
    }





