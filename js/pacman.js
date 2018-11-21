function drawPacman(){

	var imageObj = new Image();
	
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
				}

				posY+=lcc;

			}
			posY = 0;
	}

}

function moovePacman(){




}