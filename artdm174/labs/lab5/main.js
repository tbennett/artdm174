
function init()
{

    const player = document.getElementById("player");


    const playBtn = document.getElementById("start");
    playBtn.addEventListener("click", (e) => { player.play() } );

    const pauseBtn = document.getElementById("pause");
    pauseBtn.addEventListener("click", (e) => { player.pause() } );

    const stopBtn = document.getElementById("stop");
    stopBtn.addEventListener("click", (e) => { player.pause();  player.currentTime = 0; } );

    const muteBtn = document.getElementById("mute");
    muteBtn.addEventListener("click", (e) => { player.volume = 0.0; } );

    const softerBtn = document.getElementById("softer");
    softerBtn.addEventListener("click", (e) => { 
        if(player.volume > 0.0)
        {
            player.volume = (player.volume * 10 - 1) / 10;  
        }


    } );

    const louderBtn = document.getElementById("louder");
    louderBtn.addEventListener("click", (e) => { 
        if(player.volume < 1.0)
        {
            player.volume = (player.volume * 10 + 1) / 10;  
        }
    } );

    const ffBtn = document.getElementById("fast-forward");
    ffBtn.addEventListener("click", (e) => { player.playbackRate = 2 });

    const fasterBtn = document.getElementById("faster-speed");
    fasterBtn.addEventListener("click", (e) => { player.playbackRate = 1.5 });

    const normalBtn = document.getElementById("normal-speed");
    normalBtn.addEventListener("click", (e) => { player.playbackRate = 1 });

    const slowerBtn = document.getElementById("slower-speed");
    slowerBtn.addEventListener("click", (e) => { player.playbackRate = 0.5 });

    const slowBtn = document.getElementById("slow-motion");
    slowBtn.addEventListener("click", (e) => { player.playbackRate = 0.25 });


    const skipTimes = [0, 84];
    const skipSpots = document.getElementById("skip-spots");

    for(let i = 1; i < skipSpots.children.length; i++)
    {
        skipSpots.children[i].addEventListener("click", (e) => { player.currentTime = skipTimes[i - 1] })
    }


    const hippoBtn = document.getElementById("hippo-option");
    hippoBtn.addEventListener("click", (e) => { player.src = "hippos.mp4"; player.load(); });

    const cookingBtn = document.getElementById("cooking-option");
    cookingBtn.addEventListener("click", (e) => { player.src = "cookingVideo.mp4"; player.load(); });


}



    


//call the init function once the DOM loads
  document.addEventListener('DOMContentLoaded', init);
