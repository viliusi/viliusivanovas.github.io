// getting a reference to our HTML element
const canvas = document.querySelector('canvas')

spawnSquare()

function spawnSquare() {
if (canvas !== null) {
    const c = canvas.getContext('2d')

    addEventListener('resize', () => {
        canvas.width = innerWidth
        canvas.height = innerHeight
    })

    if (c !== null) {
        c.fillStyle = 'rgba(100, 149, 237, 1)'
        c.rect(100, 20, 150, 100)
        c.fill()
    }
}

}

window.onresize = spawnSquare;

