var pacManX, pacManY;

var imageObj = new Image();

function drawPacman(){
	
	// une fois le chargement terminé
	imageObj.onload = function()
	{
		console.log("Image bien charge");
	}

	imageObj.src = "assets/pacman.png";

	posX = 0;
	posY = 0 + lcc;

	for (var i = 0; i < map.length; i++) {
		posX+=lgc;
		for (var j = 0; j < map.length; j++) {

			if(map[j][i] == 3)
			{
				ctx.drawImage(imageObj, posX, posY);
				pacManY = i;
				pacManX = j;
			}

			posY+=lcc;

		}
		posY = 0;
	}

}

window.addEventListener('keydown', moovePacman);

function moovePacman(event){

	var key = event.keyCode || event.which;

	switch (key) {
		case 37:
        //-Move left
        //ctx.drawImage(imageObj, pacManX -= 25, pacManY);
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
        //-Move right
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
        	drawPacman();
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
        	drawPacman();
        }
        break;
        default:
        break;
    }



}