//
// Custom Cursor Trail
//
document.addEventListener('mousemove', function(e) {
    var cursorPixel = document.createElement("div")
    cursorPixel.style.zIndex = 9999;
    cursorPixel.style.width = "40px";
    cursorPixel.style.height = "40px";
    cursorPixel.style.backgroundImage = "url('cursor.png')"; // Replace 'path/to/your/turtle.png' with the actual path to your turtle image
    cursorPixel.style.backgroundSize = "cover";
    cursorPixel.style.position = "absolute";
    cursorPixel.style.top = e.pageY + 'px';
    cursorPixel.style.left = e.pageX + 'px';
    document.body.appendChild(cursorPixel)

    setTimeout(function() {
        document.body.removeChild(cursorPixel);
    }, 500);
});

///
/// Click Cards to Change Color
///
var cardDivs = document.querySelectorAll(".card");
cardDivs.forEach(function(e) {
    e.addEventListener("click", function() {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        this.style.backgroundColor = "blue";
        this.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
    
    });
});