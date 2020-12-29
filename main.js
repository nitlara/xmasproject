//Al cargar window añade un evento al hacer click en las casillas con clase "casillas" y ejecuta la función myFunctionEvent
window.onload = function Addonclick() {
    var idboxes = document.getElementsByClassName("boxes");
    for (var i = 0; i < idboxes.length; i++) {
        idboxes[i].addEventListener("click", myFunctionEvent, false);
    }
    //Al cargar window añade un evento al hacer click en el botón con id #shoot que dispara un prompt y ejecuta myFunctionButton
    var shoot = document.querySelector('#shoot');
    shoot.addEventListener('click', ()=> (promptMe()));
        function promptMe() {
        var battleshoot = prompt("Insert your shoot", "B1");
        myFunctionButton;
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
// Función que genera el evento TARGET de las clases "casilla" y llama la siguiente función.
function myFunctionEvent (event) {
    var target = event.target.className;
    // genera 1 variable dentro de la función con substring de la clase para quitar "casilla"
        targetB = target.substring(9,11);
        //llama la siguiente función necesaria
       ()=> (TranslatePosition(targetB));
    }
//Función button añade valor para activar la siguiente función
function myFunctionButton (){
    var targetB = battleshoot; //añadir la conversión posible del codigo introducido a mano
    //llama la siguiente función necesaria
    ()=> (TranslatePosition(targetB));
}
//Función que convierte los datos entrados (por click o button) en las coordenadas del array y hace los cambios necesarios de clase y valores del array.
function TranslatePosition (){  
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
                        } else {targetLposition = 7;}
    //Obtener valor de las coordenadas
        //console.table(gameBoard);//Tabla del array gameBoard. Dejar comentado si no es necesario hacer comprovaciones
        var valorgameboard = gameBoard[targetLposition][targetPosition];
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


 //Ampliar con: 
    //Dentro de myFunction
        // Entrar "target" por promt
    // Button--> Mostrar barcos
    // Button--> Resetear matriz aleatoriamente
//Dudas
    //Generar toda la tabla, con las clases des de js.
/*    for (let i=0; i < gameboard.length ;i++)
        CREA DIV con clase ROW
        var newDivrow = document.createElement("div");
        newDivrow.classList.add("Row")

        {for (let h = 0; h < 10; h++)
            CREA DIV con clase casillas 
            var newDivcasillas = document.createElement("div");
            newDivcasillas.classList.add("boxes")
            //aquí appendchild

            {for (let j = 0; j < 10; j++)
                CREA clase con claseletra[0]+ clasenumero++1
                var claseletra = ['A','B','C','D'];
                var clasenumero = 0
                 var claseposicion = claseletra[0] + clasenumero
                
                
                var newDivcasillas.classList.add(claseletra)
                Si j == 9 elimina valor 0 array 
*/
