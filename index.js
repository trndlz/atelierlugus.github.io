const video = document.getElementById("video");
const videoContainer = document.getElementById("video-container");

// if (document.fullscreenElement) {
//   document.exitFullscreen().then(() => {
//     console.log("EXIT")
//     video.style.display = "none";
//     video.load();
//   });
// }

// function toggleFullScreen() {
//   if (document.fullscreenElement) {
//     console.log("A")
//     document.exitFullscreen().then(() => {
//       console.log("EXIT 222")
//       video.style.display = "none";
//     });
//   } else if (document.webkitFullscreenElement) {
//     console.log("B")
//     // Need this to support Safari
//     document.webkitExitFullscreen();
//   } else if (videoContainer.webkitRequestFullscreen) {
//     console.log("C")
//     // Need this to support Safari
//     video.webkitRequestFullscreen();
//     video.load();
//       console.log( video.style.display)
//       // video.style.display = "flex";
//       // console.log( video.style.none)
//       video.play()
//   } else {
//     video.requestFullscreen().then(() => {
//       video.load();
//       console.log( video.style.display)
//       video.style.display = "flex";
//       console.log( video.style.display)
//       video.play();
//     });
//   }
// }

document.onfullscreenchange = function ( event ) {
  console.log("FULL SCREEN CHANGE", document.fullscreenElement);
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
        console.log(">>>>>")
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