let posX, posY, canvas, ctx, lc, lg, lcc, lgc, eventKey;

window.onload = function (){
	
	setInterval(function(){ audioSound();}, 150);

	drawMap();
	drawPacman(2, 2, 20, 2);

}
