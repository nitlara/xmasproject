// Añadir addEventListener al CLICK
window.onload = function Addonclick() {
    var idcasillas = document.getElementsByClassName("casillas");
    for (var i = 0; i < idcasillas.length; i++) {
        this.addEventListener("click", myFunction, false);
    }
}
// Valores barcos
// 0 = empty // 1 = part of a ship // 2 = a sunken part of a ship // 3 = a missed shot
// Matriz de juego : diccionario arrays
/*let gameBoard =[
    {"A": [1,1,1,1,1,0,0,0,0]},
    {"B": [1,1,1,1,1,0,0,0,0]},
    {"C": [1,1,1,1,1,0,0,0,0]},
    {"D": [1,1,1,1,1,0,0,0,0]},
    {"E": [1,1,1,1,1,0,0,0,0]},
    {"F": [1,1,1,1,1,0,0,0,0]},
    {"G": [1,1,1,1,1,0,0,0,0]},
    {"H": [1,1,1,1,1,0,0,0,0]},
    {"I": [1,1,1,1,1,0,0,0,0]}   
];*/

let gameBoard = [   
    [1,1,1,1,1,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0,0],
    [1,0,0,1,1,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [1,1,1,1,0,0,0,0,0,0]
];
// Función que genera el evento TARGET de las clases "casilla"
function myFunction (event) {
    var target = event.target.className;
    if (target.indexOf('casillas ') === 0 ){     
        // genera 3 variables dentro de la función con substring de la clase, con la cual obtenemos datos de la posción al estar en las clases -->
        target = target.substring(9,11)
            targetLetter = target.substring(0,1)
            targetNumber = target.substring(1,2)
        //Conversión de los elementos de "gameboard" segun los valores que aparecen
        //Añadir cambio de colores via clase a los que cambian de valor
            //Posición del array
            var targetPosition = targetNumber -1;
            var targetLposition =  0;
                 if (targetLetter == "A") {
                    targetLposition = 1;
                    } else if (targetLetter == "B") {
                    targetLposition = 2;
                    } else if (targetLetter == "C") {
                    targetLposition = 3;
                    } else if (targetLetter == "D") {
                    targetLposition = 4;
                    } else if (targetLetter == "E") {
                    targetLposition = 5;
                    } else if (targetLetter == "F") {
                    targetLposition = 6;
                    } else if (targetLetter == "G") {
                    targetLposition = 7;
                    } else {targetLposition = 8;}
/*  //cuando tenga una clase con el valor de target --> 
    getElementsByClassName("target")
        devuelve el valor de la posición targetLetter.value[targetNumber.value -1] --> hay que hacer alguna conversion porque targetLetter para gameboard no es nada.
        gameboard.targetLetter(targetNumber-1)
            //Si es 0 ++3; añade clase "waterspace"
                if (target.value == 0) {   
                    ++3,             
                    classList.add("waterspace");}
            //Si es 1 ++1; añade clase "touchspace"
                if (target.value == 0) {   
                    ++1,             
                    classList.add("touchspace");}
*/     }
      console.log("Clase que indica posición "+ target+" con sus substrings "+ targetLetter+" "+targetNumber+" posiciones derivadas dentro array. De la letra "+targetLposition+"del número "+targetPosition);
     // console.log(gameBoard.findIndex[]) //https://developer.mozilla.org/ca/docs/Web/JavaScript/Referencia/Objectes_globals/Array/findIndex
       }





