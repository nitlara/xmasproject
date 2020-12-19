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