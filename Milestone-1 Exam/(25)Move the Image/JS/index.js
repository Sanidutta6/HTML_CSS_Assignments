document.addEventListener("DOMContentLoaded", function () {
    const moveImg = document.getElementById("move-img");

    document.addEventListener("mousemove", function (event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        moveImg.style.top = `${mouseY}px`;
        moveImg.style.left = `${mouseX}px`;
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        const movement = 10;
        let currentX = parseInt(moveImg.style.left.replace("px", ""));
        let currentY = parseInt(moveImg.style.top.replace("px", ""));

        switch (key) {
            case 'ArrowUp':
                currentY -= movement;
                break;
            case 'ArrowDown':
                currentY += movement;
                break;
            case 'ArrowLeft':
                currentX -= movement;
                break;
            case 'ArrowRight':
                currentX += movement;
                break;
            default: return;
        }

        moveImg.style.left = `${currentX}px`;
        moveImg.style.top = `${currentY}px`;
    });
});