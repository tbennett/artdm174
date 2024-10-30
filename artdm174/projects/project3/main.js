/*
Author: Josh T
File Name: index.html for Project 3
*/


function init()
{
    const playBtn = document.getElementById("start");
    playBtn.addEventListener("click", (e) => { player.playVideo() } );

    const pauseBtn = document.getElementById("pause");
    pauseBtn.addEventListener("click", (e) => { player.pauseVideo() } );

    const stopBtn = document.getElementById("stop");
    stopBtn.addEventListener("click", (e) => { player.stopVideo() } );

    const ffBtn = document.getElementById("fast-forward");
    ffBtn.addEventListener("click", (e) => { player.setPlaybackRate(2) });

    const normalBtn = document.getElementById("normal-speed");
    normalBtn.addEventListener("click", (e) => { player.setPlaybackRate(1) });

    const slowBtn = document.getElementById("slow-motion");
    slowBtn.addEventListener("click", (e) => { player.setPlaybackRate(0.5) });

    const book = document.getElementById("book");
    const leftPage = document.getElementById("leftPage");
    const rightPage = document.getElementById("rightPage");
    const flipPage = document.getElementById("flipPage");

    console.log(book.style.width);

    flipPage.style.right = -1 * (Number)(book.style.width) / 2;

    const pageSources = ["images/rulebookPages/page2.jpeg", "images/rulebookPages/page3.jpeg", "images/rulebookPages/page4.jpeg", "images/rulebookPages/page5.jpeg"];

    const pageChangeBtn = document.getElementById("flip");
    pageChangeBtn.addEventListener("click", flipToPage(4) );

    function flipToPage(pageNumber) {

        flipPage.style.display = "block";
        flipPage.style.animation = "flip 0.8s ease";



    }


    const skipBtns = document.getElementById("skip-to-controls");
    let skipTimes = [60, 435, 1279, 670];

    for(let i = 1; i < skipBtns.children.length; i++)
    {
       skipBtns.children[i].addEventListener("click", (e) => {  player.seekTo(skipTimes[i - 1], true); player.playVideo();});
    }


}



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
            'onReady': onPlayerReady,
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




  //call the init function once the DOM loads
  document.addEventListener('DOMContentLoaded', init);