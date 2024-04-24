var video = document.getElementById("videoBack");        
var btn = document.getElementById("videoBackBtn");

function videoBG() {
  if (video.paused) {
    video.play();
    btn.innerHTML = `                        
    <lord-icon
    src="https://cdn.lordicon.com/ptvmrrcc.json"
    trigger="morph"
    state="morph-play-pause"
    style="width:25px;height:25px;margin-left:-8px;margin-bottom:-5px;">
    </lord-icon>`;
  } else {
    video.pause();
    btn.innerHTML = `                        
    <lord-icon
    src="https://cdn.lordicon.com/ptvmrrcc.json"
    trigger="morph"
    state="morph-pause-play"
    style="width:25px;height:25px;margin-left:-8px;margin-bottom:-5px;">
    </lord-icon>`;
  }
}