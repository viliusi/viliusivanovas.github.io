// getting a reference to our HTML element
const canvas = document.getElementById('canvas') as HTMLCanvasElement

spawnSquare()

function spawnSquare() {
    if (canvas !== null) {
        const c = canvas.getContext('2d')

        addEventListener('resize', () => {
            canvas.width = innerWidth
            canvas.height = innerHeight
        })

        if (c !== null) {
            c.beginPath();
            c.rect(5, 5, 290, 140);
            c.stroke();
        }
    }

}

window.onresize = spawnSquare;

