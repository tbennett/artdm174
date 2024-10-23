
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

    const captionBtn = document.getElementById("caption");


    const skipBtns = document.getElementById("skip-to-controls");
    let skipTimes = [52, 435, 1279, 2135];

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
          videoId: 'nFiNJ07cgnA',
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
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
