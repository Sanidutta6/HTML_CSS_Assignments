// Get the image element
const image = document.getElementById('move-img');

// Set initial position
let positionX = 0;
let positionY = 0;

// Set the distance to move in pixels
const moveDistance = 10;

// Handle arrow key press events
document.addEventListener('keydown', (event) => {
    // Retrieve the key value
    const key = event.key;

    // Move the image based on the arrow key pressed
    switch (key) {
        case 'ArrowLeft':
            positionX -= moveDistance;
            break;
        case 'ArrowUp':
            positionY -= moveDistance;
            break;
        case 'ArrowRight':
            positionX += moveDistance;
            break;
        case 'ArrowDown':
            positionY += moveDistance;
            break;
        default:
            return; // Do nothing for other keys
    }

    // Update the image position
    image.style.transform = `translate(${positionX}px, ${positionY}px)`;
});
