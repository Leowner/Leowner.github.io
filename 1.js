var vedioFile = document.getElementById("file");
var formSubmit = document.getElementById("button");
var video = document.getElementById("video");
var vedioFile2;
var speed = document.getElementById("speed");
var str;
var p = document.getElementById("text");
// video.src = "movie.ogg";
// video.controls = "controls";
function myFunc() {
    vedioFile = document.getElementById("file");
    vedioFile2 = vedioFile.files[0];
    str = window.URL.createObjectURL(vedioFile2);
    video.src = str;
    video.playbackRate = speed.value;
    // p.innerText = str;
}

