// Author: Josh T
// File Name: main.js for Lab 5

// this function will run once the DOM loads
function init()
{
    //get the video player
    const player = document.getElementById("player");

    //get the play button and make it start the video when clicked
    const playBtn = document.getElementById("vStart");
    playBtn.addEventListener("click", () => { player.play() });

    //get the pause button and make it pause the video when clicked
    const pauseBtn = document.getElementById("vPause");
    pauseBtn.addEventListener("click", () => { player.pause() } );

    //get the stop button and make it pause and then restart the video when clicked
    const stopBtn = document.getElementById("vStop");
    stopBtn.addEventListener("click", () => { player.pause();  player.currentTime = 0; } );

    //get the mute button and make it set the volume of the video to zero when clicked
    const muteBtn = document.getElementById("vMute");
    muteBtn.addEventListener("click", () => { player.volume = 0.0; } );

    //get the decrease volume button and make it decrease the volume of the video when clicked
    const softerBtn = document.getElementById("vSofter");
    softerBtn.addEventListener("click", () => { 
        
        //only decrease the volume if it is not muted
        if(player.volume > 0.0)
        {
            //converting the volume to an integer, then subtracting 1, then converting it back to a decimal
            //garuntees an exact subtraction of 0.1
            player.volume = (player.volume * 10 - 1) / 10;  
        }


    } );

     //get the increase volume button and make it increase the volume of the video when clicked
    const louderBtn = document.getElementById("vLouder");
    louderBtn.addEventListener("click", () => { 

        //only increase the volume if it is not at the maximum
        if(player.volume < 1.0)
        {
            //converting the volume to an integer, then adding 1, then converting it back to a decimal
            //garuntees an exact addition of 0.1
            player.volume = (player.volume * 10 + 1) / 10;  
        }
    } );

    //get the fast forward option and have it increase the video playback rate to 2X
    const ffBtn = document.getElementById("vFast-forward");
    ffBtn.addEventListener("click", () => { player.playbackRate = 2 });

    //get the faster option and have it increase the video playback rate to 1.5X
    const fasterBtn = document.getElementById("vFaster-speed");
    fasterBtn.addEventListener("click", () => { player.playbackRate = 1.5 });

    //get the normal option and have it set the video playback rate to the standard rate
    const normalBtn = document.getElementById("vNormal-speed");
    normalBtn.addEventListener("click", () => { player.playbackRate = 1 });

    //get the slower option and have it decrease the video playback rate to 0.5X
    const slowerBtn = document.getElementById("vSlower-speed");
    slowerBtn.addEventListener("click", () => { player.playbackRate = 0.5 });

    //get the slow motion option and have it decrease the video playback rate to 0.25X
    const slowBtn = document.getElementById("vSlow-motion");
    slowBtn.addEventListener("click", () => { player.playbackRate = 0.25 });

    //make an array of the times to skip to in seconds
    let skipTimes = [0, 42, 84];

    //get the div holding the skip buttons
    const skipSpots = document.getElementById("skip-spots");

    //we start at 1 since the first child of the skip div is a subheading
    for(let i = 1; i < skipSpots.children.length; i++)
    {
        //make each skip button skip to its corresponding point in the array 
        //(the first button skips to 0 seconds, the second button skips to half way, the third button skips to the end)
        skipSpots.children[i].addEventListener("click", () => { player.currentTime = skipTimes[i - 1] })
    }

    //get the option to change to the hippo video
    const hippoBtn = document.getElementById("hippo-option");

    //when it is selected, it should do several things:
    hippoBtn.addEventListener("click", () => { 
        
        //it should change the source of the video player and load the hippo video
        player.src = "media/hippos.mp4"; 
        player.load(); 

        //it should chang when the middle and end seconds are for the skip buttons
        skipTimes[1] = 42; 
        skipTimes[2] = 84; 

        //it should hide all the caption tracks
        for (let i = 0; i < player.textTracks.length; i++) {
            
            player.textTracks[i].mode = 'hidden';
            player.textTracks[i].selected = false;
        }

        //and display the track the corresponds to the hippo video
        player.textTracks[0].selected = true;
        player.textTracks[0].mode = 'showing';
    });

    //get the option to change to the cooking video
    const cookingBtn = document.getElementById("cooking-option");

    //when it is selected, it should do several things:
    cookingBtn.addEventListener("click", () => { 
        
         //it should change the source of the video player and load the cooking video
        player.src = "media/cookingVideo.mp4"; 
        player.load(); 

        //it should chang when the middle and end seconds are for the skip buttons
        skipTimes[1] = 7; 
        skipTimes[2] = 14; 

        //it should hide all the caption tracks
        for (let i = 0; i < player.textTracks.length; i++) {

            player.textTracks[i].mode = 'hidden';
            player.textTracks[i].selected = false;
        }
        
        //and display the track the corresponds to the cooking video
        player.textTracks[1].selected = true;
        player.textTracks[1].mode = 'showing';
    });


    //JS for audio controls

    //get the audio player
    const audio = document.getElementById("audio");

    //get the audio play button and make it start the audio when clicked
    const audioPlayBtn = document.getElementById("aStart");
    audioPlayBtn.addEventListener("click", () => { audio.play() });

    //get the audio pause button and make it pause the audio when clicked
    const audioPauseBtn = document.getElementById("aPause");
    audioPauseBtn.addEventListener("click", () => { audio.pause() } );

    //get the audio stop button and make it pause and then restart the audio when clicked
    const audioStopBtn = document.getElementById("aStop");
    audioStopBtn.addEventListener("click", () => { audio.pause();  audio.currentTime = 0; } );

    //get the audio mute button and make it set the volume of the audio to zero when clicked
    const audioMuteBtn = document.getElementById("aMute");
    audioMuteBtn.addEventListener("click", () => { audio.volume = 0.0; } );

    //get the audio decrease volume button and make it decrease the volume of the audio when clicked
    const audioSofterBtn = document.getElementById("aSofter");
    audioSofterBtn.addEventListener("click", () => { 

        //only decrease the volume if it is not muted
        if(audio.volume > 0.0)
        {
            //converting the volume to an integer, then subtracting 1, then converting it back to a decimal
            //garuntees an exact subtraction of 0.1
            audio.volume = (audio.volume * 10 - 1) / 10;  
        }


    } );

    //get the audio increase volume button and make it increase the volume of the audio when clicked
    const audioLouderBtn = document.getElementById("aLouder");
    audioLouderBtn.addEventListener("click", () => { 

        //only increase the volume if it is not at the max
        if(audio.volume < 1.0)
        {
            //converting the volume to an integer, then adding 1, then converting it back to a decimal
            //garuntees an exact addition of 0.1
            audio.volume = (audio.volume * 10 + 1) / 10;  
        }
    } );


    //get the audio fast forward option and have it increase the audio playback rate to 2X
    const audioFFBtn = document.getElementById("aFast-forward");
    audioFFBtn.addEventListener("click", () => { audio.playbackRate = 2 });

    //get the audio faster option and have it increase the audio playback rate to 1.5X
    const audioFasterBtn = document.getElementById("aFaster-speed");
    audioFasterBtn.addEventListener("click", () => { audio.playbackRate = 1.5 });

    //get the audio normal option and have it set the audio playback rate to the standard rate
    const audioNormalBtn = document.getElementById("aNormal-speed");
    audioNormalBtn.addEventListener("click", () => { audio.playbackRate = 1 });

    //get the audio slower option and have it decrease the audio playback rate to 0.5X
    const audioSlowerBtn = document.getElementById("aSlower-speed");
    audioSlowerBtn.addEventListener("click", () => { audio.playbackRate = 0.5 });

    //get the audio slow motion option and have it decrease the audio playback rate to 0.25X
    const audioSlowBtn = document.getElementById("aSlow-motion");
    audioSlowBtn.addEventListener("click", () => { audio.playbackRate = 0.25 });

}



    


//call the init function once the DOM loads
  document.addEventListener('DOMContentLoaded', init);
