function Game(){
    this.rightDown = false,
    this.leftDown = false,
    this.topDown = false,
    this.bottomDown = false,
    this.spaceDown = false,
}


$(document).keydown(function(e) {
    if (game.play === true)
    {
        if (e.keyCode === 39) //Move right
            game.rightDown = true;
        else if (e.keyCode === 37) //Move left
            game.leftDown = true;
        else if (e.keyCode === 38) //Move up
            game.topDown = true;
        else if (e.keyCode === 40) //Move down
            game.bottomDown = true;
    }
});