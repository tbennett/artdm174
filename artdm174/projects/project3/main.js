/*
Author: Josh T
File Name: index.html for Project 3
*/


function init()
{


    const playBtn = document.getElementById("start");
    playBtn.addEventListener("click", () => { player.playVideo() } );

    const pauseBtn = document.getElementById("pause");
    pauseBtn.addEventListener("click", () => { player.pauseVideo() } );

    const stopBtn = document.getElementById("stop");
    stopBtn.addEventListener("click", () => { player.stopVideo() } );

    const ffBtn = document.getElementById("fast-forward");
    ffBtn.addEventListener("click", () => { player.setPlaybackRate(2) });

    const normalBtn = document.getElementById("normal-speed");
    normalBtn.addEventListener("click", () => { player.setPlaybackRate(1) });

    const slowBtn = document.getElementById("slow-motion");
    slowBtn.addEventListener("click", () => { player.setPlaybackRate(0.5) });

   
    const pageNextBtn = document.getElementById("flipNext");
    pageNextBtn.addEventListener("click", () => { flipToPage(currentPageSet + 1); } );

    const pagePrevBtn = document.getElementById("flipPrev");
    pagePrevBtn.addEventListener("click", () => { flipToPage(currentPageSet - 1); } );



    const skipBtns = document.getElementById("skip-to-controls");
    let skipTimes = [60, 435, 1279, 670];

    for(let i = 1; i < skipBtns.children.length; i++)
    {
       skipBtns.children[i].addEventListener("click", (e) => {  player.seekTo(skipTimes[i - 1], true); player.playVideo();});
    }


}

        //call the init function once the DOM loads
        document.addEventListener('DOMContentLoaded', init);

      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'R1qh-lhxy9s',
          playerVars: {
            'playsinline': 1
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          }
        });
      }
      


      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;

      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }

      let currentPageSet = 1;

      function flipToPage(newPageSet) 
      {



        if(newPageSet < 1)
        {
            newPageSet = 1;
            console.log("Can't be less than 1");
        }
        else if(newPageSet > 3)
        {
            newPageSet = 3;
            console.log("Can't be over 3");
        }

        if(newPageSet != currentPageSet)
        {

            const leftPage = document.getElementById("leftPage");
            const topPage = document.getElementById("topPage");
            const bottomPage = document.getElementById("bottomPage");
        
        
        
            const pageSources = ["images/rulebookPages/page1.jpeg", "images/rulebookPages/page2.jpeg", "images/rulebookPages/page3.jpeg", "images/rulebookPages/page4.jpeg", "images/rulebookPages/page5.jpeg", "images/rulebookPages/page6.jpeg"];
        



            topPage.style.display = "block";

            if(newPageSet > currentPageSet)
            {
                topPage.src = bottomPage.src;
                topPage.style.animation = "flipToNext 0.8s ease";
                bottomPage.src = pageSources[2 * (newPageSet - 1) + 1];

                setTimeout(afterNextAnim, 795);
            }
            else
            {
                topPage.src = pageSources[2 * (newPageSet - 1) + 1];
                leftPage.src = pageSources[2 * (newPageSet - 1)];
                topPage.style.animation = "flipToPrevious 0.8s ease";

                setTimeout(afterPrevAnim, 795);

            }



            function afterNextAnim()
            {
                topPage.style.display = 'none';
                leftPage.src = pageSources[2 * (newPageSet - 1)];
            }

            function afterPrevAnim()
            {
                topPage.style.display = 'none';
                bottomPage.src = pageSources[2 * (newPageSet - 1) + 1];
            }

            currentPageSet = newPageSet;

        }



    }

