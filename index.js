const video = document.getElementById("video");

window.addEventListener("hashchange", function(e) {
  if (!document.fullscreenElement) {
    video.style.display = "none";
  }
})

document.onfullscreenchange = function ( event ) {
  if (!document.fullscreenElement) {
    video.style.display = "none";
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
        video.style.display = "none";
      });
    } else {
      video.style.display = "none";
    }
  }
  } else {
    window.alert('Sorry, your browser is not compatible with full screen mode !')
  }
  
}


const hooligan = ["Allez, Lorient, allez !", "Visitez https://fclweb.fr/", "Lorient est hauuuuuuuuuuuuuuuuuuuuut !" ];

hooligan.forEach((h) => {
  console.log(`%c ${h}`, 'background: #ffa500');
})