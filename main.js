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
 
window.onload = function() {
     let opciones = [
    {
      name: "agua",
      color: "black",
      value: 0},
    {
        name: "tocado",
        color:"red",
        value:1},
    {
        name="hundido",
        color:"black",
        value:2}
     ]

  /*var newColor = document.getElementsById("casilla");
  newColor.classList.add("waterspace");
newColor[0].innerHTML = "AGUA";
 newColor.classList.add(variable[posicion].color);
  newColor[añadir array nueva] = variable[posicion].value;
};*/
    //function fireTorpedo
     // onClick="fireTorpedo(${la columna que sea},${la fila que sea}, evento
//Replace the value on the gameBoard and render the board again.
//Button Fire --> promt coordenadas
    //Si toca barco --> class red
    //Si es agua --> class gris oscuro
    //Si ha tocado todos los elementos del barco --> rojo con 
//Button Show ships
    //señala donde estan los barcos enmarcando casilla de color naranja
//Botón reinicio partida 
    // colocar barcos


    /*
    com generar un click:
    seleccionar cada una de les caselles
    per cada una d'elles generar un onclick
jQuery('.casilla').click()

    object.addEventListener("click", myScript);

    com associar la funció myScript 

    1.
    function fireTorpedo(event) {
        //amb event fer coses
        //aqui la funció
        alert(event.target); //segurament target és el div "casilla"

        amb aquest casilla pots mirar si te classe que et digui quina casella és

        o bé

        fer un index of i mirar quina posició ocupa

    }
    object.addEventListener("click", fireTorpedo);

    2.
    object.addEventListener("click", function(event){
        // 
    });


    */
    
