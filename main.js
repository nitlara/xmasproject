//Al cargar window añade un evento al hacer click en las casillas con clase "casillas" y ejecuta la función myFunctionEvent
window.onload = function Addonclick() {
    var idboxes = document.getElementsByClassName("boxes");
        for (var i = 0; i < idboxes.length; i++) {
        idboxes[i].addEventListener("click", myFunctionEvent, false);
    }
    //Al cargar window añade un evento al hacer click en el botón con id #shoot que dispara un prompt y ejecuta TranslatePosition
    var shoot = document.querySelector('#shoot');
    shoot.addEventListener('click', ()=> (promptMe()));
    function promptMe() {
        var targetB = prompt("Insert your shoot", "B1");
        targetB = targetB.toUpperCase();
        TranslatePosition(targetB);
    }
    //Al cargar window añade un evento al hacer click en el botón con id #show que muestra las casillas con 1
    var show = document.querySelector('#show');
    show.addEventListener('click', ()=> (ShowFunction()));

} //cierre windows.onload
// Valores barcos  0 = empty // 1 = part of a ship // 2 = a sunken part of a ship // 3 = a missed shot
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
 ];

// Función que genera el evento TARGET de las clases "casilla" y llama la siguiente función.
function myFunctionEvent (event) {
    var target = event.target.className;
    // genera 1 variable dentro de la función con substring de la clase para quitar "casilla"
    targetB = target.substring(6,8);
    //llama la siguiente función necesaria
    TranslatePosition(targetB);
}
//Función que convierte los datos entrados (por click o button) en las coordenadas del array y hace los cambios necesarios de clase y valores del array.
function TranslatePosition (targetB){  
            targetLetter = targetB.substring(0,1)
            targetNumber = targetB.substring(1,2)
                //Conversión para posición dada de targetNumber en el array gameBoard
                var targetPosition = targetNumber -1;
                //Conversión para posición dada de targetLetter en el array gameBoard
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
                        } else if (targetLetter == "H") {
                        targetLposition = 7;
                        } else {targetLposition = 8;}
    
    //Obtener valor de las coordenadas
        //console.table(gameBoard);//Tabla del array gameBoard. Dejar comentado si no es necesario hacer comprovaciones
        valorgameboard = gameBoard[targetLposition][targetPosition];
       // console.log(valorgameboard);
    //Cambiar clase 
        var elementos = document.getElementsByClassName(targetB);    
            if (valorgameboard == 0){
                elementos[0].classList.add("waterspace");
                    // cambiar valores array
                    gameBoard[targetLposition][targetPosition] = 3;
                    }
                else if (valorgameboard == 1){
                    elementos[0].classList.add("touchspace");
                    gameBoard[targetLposition][targetPosition] = 2;
                    }                  
                //console.table(gameBoard);//Tabla del array gameBoard. Dejar comentado si no es necesario hacer comprovaciones
     } //cierra TranslatePosition

     //llamada en window onload muestra durante 5 segundos las casillas con valor 1 en matriz de un color distinto
   
    
    
        function ShowFunction(){
            var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
            for( var i = 0; i<gameBoard.length; i++ ){
                var row = gameBoard[i];
                for( var j = 0; j<row.length; j++ ){
                    //is this a ship?
                    var value = gameBoard[i][j];
                    if( value == 1 ){
                        //this is a ship
                        var position = letters[i]+(j+1);
                        TranslatePosition(position);
                    }
                }   
            }
        }//cierra Showfunction
     //recorre el array y devuelve la posición de todos los valores 1. 
       //Que quede un array similar a :
       //[A1 : 1]; [A2:1] ... [H1:1] ... [H10:0]
        //conversión posiciones a valores tablero
        //añadir clase Ship a todos.
               //activa sólo esta clase cuando se aprete el botón de mostrar barco
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
        //Step 4 — Reformatting Array Objects https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know
            


