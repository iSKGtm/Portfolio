var video = document.getElementById("videoBack");        
var btn = document.getElementById("videoBackBtn");

function videoBG() {
  if (video.paused) {
    video.play();
    btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    video.pause();
    btn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
}