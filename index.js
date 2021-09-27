const video = document.getElementById("video");
const welcome = document.getElementById("welcome");

function closePlayer() {
  if (!document.fullscreenElement) {
    video.pause();
    video.style.display = "none";
  }
}

video.addEventListener("webkitfullscreenchange", closePlayer);
video.addEventListener("mozfullscreenchange", closePlayer);
video.addEventListener("fullscreenchange", closePlayer);

window.addEventListener("hashchange", function (e) {
  closePlayer();
});

document.onfullscreenchange = function (event) {
  if (!document.fullscreenElement) {
    closePlayer();
  }
};

function toggleFullScreen() {
  if (document.fullscreenEnabled) {
    if (!document.fullscreenElement) {
      video.requestFullscreen().then(() => {
        video.style.display = "flex";
        video.load();
        video.play();
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          closePlayer();
        });
      } else {
        closePlayer();
      }
    }
  } else {
    video.style.display = "block";
    video.load();
    video.play();
    welcome.style.display = "none";
  }
}

const hooligan = [
  "Allez, Lorient, allez !",
  "Visitez https://fclweb.fr/",
  "Lorient est hauuuuuuuuuuuuuuuuuuuuut !",
];

hooligan.forEach((h) => {
  console.log(`%c ${h}`, "background: #ffa500");
});
