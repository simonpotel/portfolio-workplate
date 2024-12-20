document.addEventListener("DOMContentLoaded", function () {
    const firstImg = document.getElementById("first-img");
    const scndImg = document.getElementById("scnd-img");
    const thirdImg = document.getElementById("third-img");

    const images = [
        { element: firstImg, minY: -10, maxY: 10, speed: 0.15 },
        { element: scndImg, minY: -10, maxY: 10, speed: 0.12 },
        { element: thirdImg, minY: -10, maxY: 10, speed: 0.125 }
    ];

    images.forEach(img => {
        animateFloatingEffect(img.element, img.minY, img.maxY, img.speed);
    });
});

function animateFloatingEffect(element, minY, maxY, speed) {
    let direction = 1;
    let currentY = 0;

    function animate() {
        currentY += direction * speed;
        if (currentY >= maxY || currentY <= minY) {
            direction *= -1;
        }
        element.style.transform = `translateY(${currentY}px)`;
        requestAnimationFrame(animate);
    }

    animate();
}
