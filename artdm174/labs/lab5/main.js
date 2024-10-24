
function init()
{

    const player = document.getElementById("player");


    const playBtn = document.getElementById("vStart");
    playBtn.addEventListener("click", () => { player.play() });


    const pauseBtn = document.getElementById("vPause");
    pauseBtn.addEventListener("click", () => { player.pause() } );

    const stopBtn = document.getElementById("vStop");
    stopBtn.addEventListener("click", () => { player.pause();  player.currentTime = 0; } );

    const muteBtn = document.getElementById("vMute");
    muteBtn.addEventListener("click", () => { player.volume = 0.0; } );

    const softerBtn = document.getElementById("vSofter");
    softerBtn.addEventListener("click", () => { 
        if(player.volume > 0.0)
        {
            player.volume = (player.volume * 10 - 1) / 10;  
        }


    } );

    const louderBtn = document.getElementById("vLouder");
    louderBtn.addEventListener("click", () => { 
        if(player.volume < 1.0)
        {
            player.volume = (player.volume * 10 + 1) / 10;  
        }
    } );

    const ffBtn = document.getElementById("vFast-forward");
    ffBtn.addEventListener("click", () => { player.playbackRate = 2 });

    const fasterBtn = document.getElementById("vFaster-speed");
    fasterBtn.addEventListener("click", () => { player.playbackRate = 1.5 });

    const normalBtn = document.getElementById("vNormal-speed");
    normalBtn.addEventListener("click", () => { player.playbackRate = 1 });

    const slowerBtn = document.getElementById("vSlower-speed");
    slowerBtn.addEventListener("click", () => { player.playbackRate = 0.5 });

    const slowBtn = document.getElementById("vSlow-motion");
    slowBtn.addEventListener("click", () => { player.playbackRate = 0.25 });


    let skipTimes = [0, 84];
    const skipSpots = document.getElementById("skip-spots");

    for(let i = 1; i < skipSpots.children.length; i++)
    {
        skipSpots.children[i].addEventListener("click", () => { player.currentTime = skipTimes[i - 1] })
    }


    const hippoBtn = document.getElementById("hippo-option");
    hippoBtn.addEventListener("click", () => { 
        
        player.src = "hippos.mp4"; 
        player.load(); 
        skipTimes[1] = player.duration; 

        for (let i = 0; i < player.textTracks.length; i++) {
            
            player.textTracks[i].mode = 'hidden';
            player.textTracks[i].selected = false;
        }

        player.textTracks[0].selected = true;
        player.textTracks[0].mode = 'showing';
    });

    const cookingBtn = document.getElementById("cooking-option");
    cookingBtn.addEventListener("click", () => { 
        
        player.src = "cookingVideo.mp4"; 
        player.load(); 
        skipTimes[1] = player.duration; 

        for (let i = 0; i < player.textTracks.length; i++) {

            player.textTracks[i].mode = 'hidden';
            player.textTracks[i].selected = false;
        }
        
        player.textTracks[1].selected = true;
        player.textTracks[1].mode = 'showing';
    });



    const audio = document.getElementById("audio");

    const audioPlayBtn = document.getElementById("aStart");
    audioPlayBtn.addEventListener("click", () => { audio.play() });

    const audioPauseBtn = document.getElementById("aPause");
    audioPauseBtn.addEventListener("click", () => { audio.pause() } );

    const audioStopBtn = document.getElementById("aStop");
    audioStopBtn.addEventListener("click", () => { audio.pause();  audio.currentTime = 0; } );


    const audioMuteBtn = document.getElementById("aMute");
    audioMuteBtn.addEventListener("click", () => { audio.volume = 0.0; } );

    const audioSofterBtn = document.getElementById("aSofter");
    audioSofterBtn.addEventListener("click", () => { 
        if(audio.volume > 0.0)
        {
            audio.volume = (audio.volume * 10 - 1) / 10;  
        }


    } );

    const audioLouderBtn = document.getElementById("aLouder");
    audioLouderBtn.addEventListener("click", () => { 
        if(audio.volume < 1.0)
        {
            audio.volume = (audio.volume * 10 + 1) / 10;  
        }
    } );



    const audioFFBtn = document.getElementById("aFast-forward");
    audioFFBtn.addEventListener("click", () => { audio.playbackRate = 2 });

    const audioFasterBtn = document.getElementById("aFaster-speed");
    audioFasterBtn.addEventListener("click", () => { audio.playbackRate = 1.5 });

    const audioNormalBtn = document.getElementById("aNormal-speed");
    audioNormalBtn.addEventListener("click", () => { audio.playbackRate = 1 });

    const audioSlowerBtn = document.getElementById("aSlower-speed");
    audioSlowerBtn.addEventListener("click", () => { audio.playbackRate = 0.5 });

    const audioSlowBtn = document.getElementById("aSlow-motion");
    audioSlowBtn.addEventListener("click", () => { audio.playbackRate = 0.25 });

}



    


//call the init function once the DOM loads
  document.addEventListener('DOMContentLoaded', init);
