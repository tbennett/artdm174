
function init()
{

    const player = document.getElementById("player");


    const playBtn = document.getElementById("start");
    playBtn.addEventListener("click", (e) => { player.play() } );

    const pauseBtn = document.getElementById("pause");
    pauseBtn.addEventListener("click", (e) => { player.pause() } );

    const stopBtn = document.getElementById("stop");
    stopBtn.addEventListener("click", (e) => { player.pause();  player.currentTime = 0; } );

    const ffBtn = document.getElementById("fast-forward");
    ffBtn.addEventListener("click", (e) => { player.playbackRate = 2 });

    const normalBtn = document.getElementById("normal-speed");
    normalBtn.addEventListener("click", (e) => { player.playbackRate = 1 });

    const slowBtn = document.getElementById("slow-motion");
    slowBtn.addEventListener("click", (e) => { player.playbackRate = 0.5 });


}



    


//call the init function once the DOM loads
  document.addEventListener('DOMContentLoaded', init);
