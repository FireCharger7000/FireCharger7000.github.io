document.getElementById("play").addEventListener("click", function() {      
    var audio = document.getElementById("audio");
    audio.play();
});

var zoom = 1;
var zoomStep = 0.2;

document.getElementById("zoomIn").addEventListener("click", function() {      
    if (zoom < 2) {
        zoom += zoomStep;
        document.body.style.zoom = zoom;                                
    }                        
});

document.getElementById("zoomOut").addEventListener("click", function() {
    if (zoom > 1) {
        zoom -= zoomStep;
        document.body.style.zoom = zoom;
    }
});
