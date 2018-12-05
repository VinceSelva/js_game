	var imageObj = new Image();
	let posGhostX, posGhostY;

	imageObj.src = "assets/fantome_rouge.png";
	
	// une fois le chargement terminé
	imageObj.onload = function()
	{
		console.log("Image bien charge");
	}

	function drawGhost(){

		posX = 0;
		posY = 0 + lcc;

		for (var i = 0; i < map.length; i++) {
			posX+=lgc;
			for (var j = 0; j < map.length; j++) {

				if(map[j][i] == 4)
				{
					posGhostX = j;
					posGhostY = i;
					ctx.drawImage(imageObj, posX-2, posY+4);
				}

				posY+=lcc;

			}
			posY = 0;
		}

	}

	function determinerEtat()
	{
		if(pacManX <= posGhostX)
		{
			if(pacManY <= posGhostY)
			{
				return 1; // En haut a gauche
			}
		}

		if(pacManX >= posGhostX)
		{
			if(pacManY >= posGhostY)
			{
				return 2; // En bas a droite
			}
		}

		if(pacManX <= posGhostX) 
		{
			if(pacManY >= posGhostY) 
			{
				return 3; // En bas a gauche
			}
		}

		if(pacManX >= posGhostX)
		{
			if(pacManY <= posGhostY)
			{
				return 4; // En haut a droite
			}
		}

	}