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
let gameBoard = [   
    [1,1,1,1,1,0,0,0,1],
    [0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,0,0,0],
    [1,0,0,1,1,0,0,0,0],
    [1,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [1,1,1,1,0,0,0,0,0]
];
// Función que genera el evento TARGET de las clases "casilla"
function myFunction (event) {
    var target = event.target.className;
    if (target.indexOf('casillas ') === 0 ){     
        // genera 3 variables dentro de la función con substring de la clase, con la cual obtenemos datos de la posción al estar en las clases -->
        targetB = target.substring(9,11)
            targetLetter = targetB.substring(0,1)
            targetNumber = targetB.substring(1,2)
        //Conversión para posición Numero y Letra en el Array
            var targetPosition = targetNumber -1;
            var targetLposition =  0;
                 if (targetLetter == "A") {
                    targetLposition = 0;
                    } else if (targetLetter == "B") {
                    targetLposition = 1;
                    } else if (targetLetter == "C") {
                    targetLposition = 2;
                    } else if (targetLetter == "D") {
                    targetLposition = 3;
                    } else if (targetLetter == "E") {
                    targetLposition = 4;
                    } else if (targetLetter == "F") {
                    targetLposition = 5;
                    } else if (targetLetter == "G") {
                    targetLposition = 6;
                    } else {targetLposition = 7;}
        //Obtener valor de las coordenadas
                //Tabla del array gameBoard
                //console.table(gameBoard);
            var valorgameboard = (gameBoard[targetLposition][targetPosition]);
        //Cambiar clase y valor matriz
            // clase    
            var elementos = document.getElementsByClassName(targetB);    
                if (valorgameboard == 0){
                  elementos[0].classList.add("waterspace");
                }
                else if (valorgameboard == 1){
                    elementos[0].classList.add("touchspace");
                }
            } //este cierre viene de "if (target.indexOf('casillas ') === 0 )"
    } //este cierre cierra myfunction 





