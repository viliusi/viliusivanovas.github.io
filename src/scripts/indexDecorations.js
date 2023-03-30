// getting a reference to our HTML element
var canvas = document.getElementById('canvas');
spawnSquare();
function spawnSquare() {
    if (canvas !== null) {
        var c = canvas.getContext('2d');
        addEventListener('resize', function () {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
        });
        if (c !== null) {
            c.beginPath();
            c.rect(5, 5, 290, 140);
            c.stroke();
        }
    }
}
window.onresize = spawnSquare;
