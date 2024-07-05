document.getElementById("enter").addEventListener("click", function () {

    const target = document.getElementById("enter");

    target.style.opacity = '0';
    target.addEventListener('transitionend', () => target.remove());

    if (typeof window.orientation == 'undefined') {


    }
});

document.onclick = function () {
    var video = document.getElementById('bgvid');
    video.play();
    console.log("video")
}