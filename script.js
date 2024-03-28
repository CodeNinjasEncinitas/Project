//
// Custom Cursor Trail
//
var turtleCursor = document.createElement("div")
document.body.appendChild(turtleCursor)

document.addEventListener('mousemove', function(e) {
    if(turtleCursor) {
        document.body.removeChild(turtleCursor);
    }
    turtleCursor = document.createElement("div")
    turtleCursor.style.zIndex = 9999;
    turtleCursor.style.width = "40px";
    turtleCursor.style.height = "40px";
    turtleCursor.style.backgroundImage = "url('cursor.png')"; // Replace 'path/to/your/turtle.png' with the actual path to your turtle image
    turtleCursor.style.backgroundSize = "cover";
    turtleCursor.style.position = "absolute";
    turtleCursor.style.top = e.pageY + 10 + 'px';
    turtleCursor.style.left = e.pageX + 10 + 'px';
    document.body.appendChild(turtleCursor)
});



///
/// Mouse Painting
///
var isPainting = false;
var paintPixels = [];
var pixelColor = "black";

document.getElementById("clearPaintButton").addEventListener("click", function() {
    for (pixel in paintPixels) {
        document.body.removeChild(paintPixels[pixel]);
    }
    paintPixels = [];

}, false);

document.getElementById("redBox").addEventListener("click", function() {
    pixelColor = "#FF0000";
    }, false);
document.getElementById("greenBox").addEventListener("click", function() {
    pixelColor = "#00FF00";
    }, false);
document.getElementById("blueBox").addEventListener("click", function() {
    pixelColor = "#00FFFF";
    }, false);
document.getElementById("yellowBox").addEventListener("click", function() {
    pixelColor = "#FFFF00";
    }, false);
document.getElementById("purpleBox").addEventListener("click", function() {
    pixelColor = "#FF00FF";
    }, false);

document.addEventListener('mousedown', function(e) {
    isPainting = true;
});
document.addEventListener('mouseup', function(e) {
    isPainting = false;
});

document.addEventListener('mousemove', function(e) {
    if (isPainting) {
        var paintPixel = document.createElement("div")
        paintPixel.style.zIndex = 9999;
        paintPixel.style.width = "20px"; // width of paint pixels
        paintPixel.style.height = "20px"; // height of paint pixels
        paintPixel.style.backgroundColor = pixelColor;
        paintPixel.style.position = "absolute";
        paintPixel.style.top = e.pageY + 'px';
        paintPixel.style.left = e.pageX + 'px';
        document.body.appendChild(paintPixel)
        paintPixels.push(paintPixel);
    }
});

