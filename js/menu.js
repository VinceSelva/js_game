 function visibilite(thingId) {
            targetElement;
            targetElement = document.getElementById(thingId);
            if (targetElement.style.display == "none") {

                targetElement.style.display = "block";
            } else {
                targetElement.style.display = "none";
            }
        }

 function play(idPlayer, control) {
            player = document.querySelector('#' + idPlayer);
            if (player.paused) {
                player.play();
            } else {
                player.pause();
            }
        }

        function resume(idPlayer) {
            player = document.querySelector('#' + idPlayer);

            player.currentTime = 0;
            player.pause();
        }