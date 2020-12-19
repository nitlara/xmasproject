// Crear tablero



// 0 = empty
// 1 = part of a ship
// 2 = a sunken part of a ship
// 3 = a missed shot
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

//Fire via -->  onClick to every <div> and call the fireTorpedo function with the coordinates of the div.
    //function fireTorpedo
//Replace the value on the gameBoard and render the board again.
//Button Fire --> promt coordenadas
    //Si toca barco --> class red
    //Si es agua --> class gris oscuro
    //Si ha tocado todos los elementos del barco --> rojo con 
//Button Show ships
    //señala donde estan los barcos enmarcando casilla de color naranja
//Botón reinicio partida 
    // colocar barcos