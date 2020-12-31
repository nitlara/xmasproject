Elementos que he visto que me cuestan o no he sabido hacer (y he buscado alternativa)

Crear el html desde js.




Proyecto 
https://projects.breatheco.de/interactive-coding-tutorial/intermediate/battleship-vanillajs

Create your HTML/CSS First, we recomend using a parent div with display:flex and flex-wrap: wrap (to allow multiple rows), the container must have 100 divs inside.
After your HTML/CSS looks good, start thinking on how to make it dynamic using JS.
To represent the gameBoard you can use a JS matrix like this:
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
Add one onClick to every <div> and call the fireTorpedo function with the coordinates of the div.
Replace the value on the gameBoard and render the board again.
😎 Feeling confident?
Try implementing a "showShips" function that shows the ship positoins when clicked.



//Otra posibilidad - Generar toda la tabla, con las clases des de js.
/*    for (let i=0; i < gameboard.length ;i++)
        CREA DIV con clase ROW
        var newDivrow = document.createElement("div");
        newDivrow.classList.add("Row")

        {for (let h = 0; h < 10; h++)
            CREA DIV con clase casillas 
            var newDivboxes = document.createElement("div");
            newDivboxes.classList.add("boxes")
            //aquí appendchild

            {for (let j = 0; j < 10; j++)
                CREA clase con claseletra[0]+ clasenumero++1
                var claseletra = ['A','B','C','D'];
                var clasenumero = 0
                 var claseposicion = claseletra[0] + clasenumero
                
                
                var newDivboxes.classList.add(claseletra)
                Si j == 9 elimina valor 0 array */ 
