const video = document.getElementById("video");
const videoContainer = document.getElementById("video-container");

document.exitFullscreen().then(() => {
  video.style.display = "none";
});

function toggleFullScreen() {
  console.log("YO");
  if (document.fullscreenElement) {
    document.exitFullscreen().then(() => {
      video.style.display = "none";
    });
  } else if (document.webkitFullscreenElement) {
    // Need this to support Safari
    document.webkitExitFullscreen();
  } else if (videoContainer.webkitRequestFullscreen) {
    // Need this to support Safari
    video.webkitRequestFullscreen();
  } else {
    video.requestFullscreen().then(() => {
      video.load();
      video.style.display = "block";
      video.play();
    });
  }
}

document.addEventListener("fullscreenchange", function (event) {
  if (!document.fullscreen) {
    video.style.display = "none";
  }
});
