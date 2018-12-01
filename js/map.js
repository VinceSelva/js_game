var map = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,4,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,4,1],
[1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
[1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1],
[1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
[1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1],
[1,2,2,1,0,1,0,0,0,0,0,0,0,1,0,1,2,2,1],
[1,1,1,1,0,1,0,1,1,2,1,1,0,1,0,1,1,1,1],
[0,0,0,0,0,0,0,1,2,3,2,1,0,0,0,0,0,0,0],
[1,1,1,1,0,1,0,1,1,2,1,1,0,1,0,1,1,1,1],
[1,2,2,1,0,1,0,0,0,0,0,0,0,1,0,1,2,2,1],
[1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1],
[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
[1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
[1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1],
[1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1],
[1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1],
[1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1],
[1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];


function drawMap(){

	canvas = document.querySelector('#myCanvas');
	ctx = canvas.getContext('2d');

	lc = canvas.height;
	lg = canvas.width;


	//taille tableau +1 pour afficher tous les côtés
	lcc = lc/22;
	lgc = lg/20;

	posX = 0;
	posY = 0;

	for (var i = 0; i < map.length; i++) {
		posX+=lgc;
			for (var j = 0; j < map.length; j++) {
				

				if(map[j][i] == 1)
				{
					ctx.fillStyle = "blue";
					ctx.fillRect(posX,posY,25,25);
					//console.log("salut!");
				}

				if(map[j][i] == 0)
				{
					ctx.fillStyle = "orange";
					ctx.beginPath();
					ctx.arc(posX + 12, posY + 12, 3, 0, 2 * Math.PI);
					ctx.fill();
				}

				posY+=lcc;

			}
			posY = 0;
	}
}