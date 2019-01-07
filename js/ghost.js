	var imageObj = new Image();
	let posGhostX, posGhostY;
	let posPacManActuX, posPacManActuY;

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
					posGhostX = i;
					posGhostY = j;
					ctx.drawImage(imageObj, posX-2, posY+4);
				}

				posY+=lcc;

			}
			posY = 0;
		}

	}

	function determinerEtat()
	{
		for (var i = 0; i < map.length; i++) {
			for (var j = 0; j < map.length; j++) {

				if(map[j][i] == 3)
				{
					posPacManActuY = j;
					posPacManActuX = i;
				}

			}
		}

		if(posPacManActuY < posGhostY)
		{
			if(posPacManActuX < posGhostX)
			{
				return 1; // En haut a gauche
			}
			else if(posPacManActuX > posGhostX)
			{
				return 4; // En haut a droite
			}
		}

		else if(posPacManActuY > posGhostY) 
		{
			if(posPacManActuX < posGhostX) 
			{
				return 3; // En bas a gauche
			}
			else if(posPacManActuX > posGhostX) 
			{
				return 2; // En bas a droite
			}
		}

	}

	function Etat(mode)
	{

		switch (mode) {
			case 1:
			console.log('Mode en haut à gauche');

			if(map[posGhostY - 1][posGhostX] == 0 && posGhostY > pacManY) // Allez en haut
			{
				map[posGhostY - 1][posGhostX] = 4;
				map[posGhostY][posGhostX] = 0;
			}
			else if(map[posGhostY][posGhostX - 1] == 0 && posGhostX > pacManX) // Allez à gauche
			{
				map[posGhostY][posGhostX - 1] = 4;
				map[posGhostY][posGhostX] = 0;
			}
			else if(map[posGhostY][posGhostX + 1] == 0 && posGhostX > pacManX) // Allez à droite dans le dernier des cas
			{
				map[posGhostY][posGhostX + 1] = 4;
				map[posGhostY][posGhostX] = 0;	
			}
			else if(map[posGhostY + 1][posGhostX] == 0)
			{
				map[posGhostY + 1][posGhostX] = 4;
				map[posGhostY][posGhostX] = 0;	
			}

			break;

			case 2:
			console.log('Mode en bas a droite');


			if(map[posGhostY + 1][posGhostX] == 0 && posGhostY < pacManY) // Allez en bas
			{
				map[posGhostY + 1][posGhostX] = 4;
				map[posGhostY][posGhostX] = 0;	
			}
			else if(map[posGhostY][posGhostX + 1] == 0 && posGhostX < pacManX) // Allez à droite dans le dernier des cas
			{
				map[posGhostY][posGhostX + 1] = 4;
				map[posGhostY][posGhostX] = 0;	
			}
			else if(map[posGhostY][posGhostX - 1] == 0 && posGhostX < pacManX) // Allez à gauche
			{
				map[posGhostY][posGhostX - 1] = 4;
				map[posGhostY][posGhostX] = 0;
			}
			else if(map[posGhostY - 1][posGhostX] == 0 && posGhostY > pacManY) // Allez en haut
			{
				map[posGhostY - 1][posGhostX] = 4;
				map[posGhostY][posGhostX] = 0;
			}

			break;

			case 3:
			console.log('Mode en bas a gauche');

			if(map[posGhostY + 1][posGhostX] == 0 && posGhostY < pacManY) // Allez en bas
			{
				map[posGhostY + 1][posGhostX] = 4;
				map[posGhostY][posGhostX] = 0;	
			}
			else if(map[posGhostY][posGhostX - 1] == 0 && posGhostX > pacManX) // Allez à gauche
			{
				map[posGhostY][posGhostX - 1] = 4;
				map[posGhostY][posGhostX] = 0;
			}
			else if(map[posGhostY][posGhostX + 1] == 0 && posGhostX > pacManX) // Allez à droite dans le dernier des cas
			{
				map[posGhostY][posGhostX + 1] = 4;
				map[posGhostY][posGhostX] = 0;	
			}
			else if(map[posGhostY - 1][posGhostX] == 0 && posGhostY > pacManY) // Allez en haut
			{
				map[posGhostY - 1][posGhostX] = 4;
				map[posGhostY][posGhostX] = 0;
			}

			break;

			case 4:
			console.log('Mode en haut a droite');

			if(map[posGhostY - 1][posGhostX] == 0 && posGhostY > pacManY) // Allez en haut
			{
				map[posGhostY - 1][posGhostX] = 4;
				map[posGhostY][posGhostX] = 0;
			}
			else if(map[posGhostY][posGhostX + 1] == 0 && posGhostX < pacManX) // Allez à droite dans le dernier des cas
			{
				map[posGhostY][posGhostX + 1] = 4;
				map[posGhostY][posGhostX] = 0;	
			}
			else if(map[posGhostY][posGhostX - 1] == 0 && posGhostX < pacManX) // Allez à gauche
			{
				map[posGhostY][posGhostX - 1] = 4;
				map[posGhostY][posGhostX] = 0;
			}
			else if(map[posGhostY + 1][posGhostX] == 0)
			{
				map[posGhostY + 1][posGhostX] = 4;
				map[posGhostY][posGhostX] = 0;	
			}

			break;
			
		}
	}