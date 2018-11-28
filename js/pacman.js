var pacManX, pacManY;

let toucheappuye;

function drawPacman(param1, param2, param3, param4){

    posX = 0;
    posY = 0 + lcc;

    for (var i = 0; i < map.length; i++) {
      posX+=lgc;
      for (var j = 0; j < map.length; j++) {

       if(map[j][i] == 3)
       {
            //dessin du PacMan

            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(posX + 12, posY + 12, 10, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.moveTo(posX+12, posY+12);
            ctx.lineTo(posX+param1, posY+param2);
            ctx.lineTo(posX+param3, posY+param4);
            ctx.fill();


            pacManY = i;
            pacManX = j;
        }

        posY+=lcc;

    }
    posY = 0;
}

}

window.addEventListener('keydown', moovePacman);

function setKeyPress(event)
{
    toucheappuye = event.keyCode || event.which;
}

function moovePacman(event){

    toucheappuye = event.keyCode || event.which;

	switch (toucheappuye) {
		case 37:
        //-Move left

        if(map[pacManX][pacManY-1] != 1)
        {


        	map[pacManX][pacManY] = 2;
        	map[pacManX][pacManY-1] = 3;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            drawMap();
            drawPacman();


        }
        break;
        case 39:
        //move right

        if(map[pacManX][pacManY+1] != 1)
        {

            map[pacManX][pacManY] = 2;
            map[pacManX][pacManY+1] = 3;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawMap();
            drawPacman();
        }
        break;
        case 38:
        //-Move up

        if(map[pacManX-1][pacManY] != 1)
        {

        	map[pacManX][pacManY] = 2;
        	map[pacManX-1][pacManY] = 3;
        	ctx.clearRect(0, 0, canvas.width, canvas.height);
        	drawMap();
        	drawPacman(2, 2, 20, 2)
        }
        break;
        case 40:
        //-Move down

        if(map[pacManX+1][pacManY] != 1)
        {

        	map[pacManX][pacManY] = 2;
        	map[pacManX+1][pacManY] = 3;
        	ctx.clearRect(0, 0, canvas.width, canvas.height);
        	drawMap();
        	drawPacman(-2, -2, 20, -2)
        }
        break;
        default:
        break;
    }



}